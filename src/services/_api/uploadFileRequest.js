import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

export const handleUploadFiles = async (files) => {
  if (!files) {
    throw new Error('❌ ไม่พบไฟล์สำหรับอัปโหลด');
  }

  // ถ้า files ไม่ใช่ Array ให้แปลงเป็น Array
  if (!Array.isArray(files)) {
    files = [files];
  }

  if (files.length === 0) {
    throw new Error('❌ ไม่พบไฟล์สำหรับอัปโหลด');
  }

  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const timestamp = Date.now();
      const fileName = `uploads/${timestamp}_${file.relativePath || file.name}`;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // คำนวณความคืบหน้าได้ที่นี่หากต้องการ
        },
        (error) => {
          console.error('❌ Error uploading file:', error);
          reject(error);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({ fileName, url });
          } catch (err) {
            reject(err);
          }
        }
      );
    });
  });

  const results = await Promise.all(uploadPromises);
  return results;
};

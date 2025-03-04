import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebaseConfig';
// ฟังก์ชันสำหรับอัปโหลดไฟล์ (คงเดิมตามโค้ดของคุณ)

export const handleUploadFiles = async (files, folder, name) => {
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

  // ฟังก์ชันแปลงรูปภาพเป็น JPG
  const convertToJpg = (file) => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/') || file.type === 'image/jpeg' || file.type === 'image/jpg') {
        // ถ้าไม่ใช่รูปภาพ หรือเป็น JPG อยู่แล้ว ไม่ต้องแปลง
        resolve(file);
      } else {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
          img.src = e.target.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            canvas.toBlob(
              (blob) => {
                const convertedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now()
                });
                resolve(convertedFile);
              },
              'image/jpeg',
              0.9
            ); // คุณภาพ 90%
          };
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const uploadPromises = files.map(async (file, index) => {
    return new Promise(async (resolve, reject) => {
      const timestamp = Date.now();
      // ตรวจสอบประเภทไฟล์
      let fileToUpload = file;
      let fileExtension = '';

      if (file.type.startsWith('image/')) {
        // ถ้าเป็นรูปภาพ แปลงเป็น JPG
        fileToUpload = await convertToJpg(file);
        fileExtension = '.jpg';
      } else {
        // ถ้าไม่ใช่รูปภาพ ใช้ชื่อไฟล์ต้นฉบับ
        fileExtension = file.name.substring(file.name.lastIndexOf('.'));
      }

      // สร้างชื่อไฟล์ใหม่
      const uniqueFileName = files.length > 1 ? `${name}_${timestamp}_${index}${fileExtension}` : `${name}_${timestamp}${fileExtension}`;
      const fileName = `uploads/${folder}/${uniqueFileName}`;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

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

// ฟังก์ชันสำหรับลบไฟล์จาก Firebase Storage
export const deleteFileFromFirebase = async (filePath) => {
  if (!filePath) {
    throw new Error('❌ ไม่พบเส้นทางไฟล์สำหรับลบ');
  }

  try {
    const storageRef = ref(storage, filePath);
    await deleteObject(storageRef);
    console.log(`✅ Deleted file from Firebase: ${filePath}`);
  } catch (error) {
    console.error('❌ Error deleting file from Firebase:', error);
    throw error; // ส่ง error ต่อไปเพื่อให้ caller จัดการ
  }
};

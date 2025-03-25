import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/_api/firebaseConfig';

const FirebaseImage = ({ imagePath, alt = 'Image', style, thumbnail = true, fallbackImage, className }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ฟังก์ชันดึง URL จาก Firebase Storage
  const fetchImageUrl = async (path) => {
    try {
      setLoading(true);
      const storageRef = ref(storage, path);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setError(null);
    } catch (err) {
      console.error('❌ Error fetching image URL:', err);
      setError('ไม่สามารถโหลดรูปภาพได้');
      setImageUrl(fallbackImage || null); // ใช้ fallbackImage ถ้ามี
    } finally {
      setLoading(false);
    }
  };

  // ดึง URL เมื่อ imagePath เปลี่ยนแปลง
  useEffect(() => {
    if (imagePath) {
      fetchImageUrl(imagePath);
    } else {
      setImageUrl(null); // ถ้าไม่มี path ให้รีเซ็ต URL
    }
  }, [imagePath]);

  // การแสดงผลตามสถานะ
  if (!imagePath) {
    return null; // ไม่มี path ไม่ต้องแสดงอะไร
  }

  if (loading) {
    return <span>กำลังโหลด...</span>; // สามารถเปลี่ยนเป็น spinner ได้
  }

  if (error && !imageUrl) {
    return <span>{error}</span>; // แสดงข้อความ error ถ้าไม่มี fallback
  }

  if (imageUrl) {
    return <Image src={imageUrl} className={className} alt={alt} style={style} thumbnail={thumbnail} />;
  }

  return null; // กรณีอื่นๆ
};

export default FirebaseImage;

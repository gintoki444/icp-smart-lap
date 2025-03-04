import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from 'your-firebase-config'; // ปรับ path ตามไฟล์ config ของคุณ

const FirebaseFile = ({ filePath, fileName }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ฟังก์ชันดึง URL จาก Firebase Storage
  const fetchFileUrl = async (path) => {
    try {
      setLoading(true);
      const storageRef = ref(storage, path);
      const url = await getDownloadURL(storageRef);
      setFileUrl(url);
      setError(null);
    } catch (err) {
      console.error('❌ Error fetching file URL:', err);
      setError('ไม่สามารถโหลดไฟล์ได้');
    } finally {
      setLoading(false);
    }
  };

  // ดึง URL เมื่อ filePath เปลี่ยนแปลง
  useEffect(() => {
    if (filePath) {
      fetchFileUrl(filePath);
    } else {
      setFileUrl(null);
    }
  }, [filePath]);

  // ดึงชื่อไฟล์จาก filePath หรือใช้ fileName ที่ส่งมา
  const displayName = fileName || (filePath ? filePath.split('/').pop() : 'Unknown File');

  // ฟังก์ชันสำหรับดาวน์โหลดไฟล์
  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = displayName; // ใช้ชื่อไฟล์ในการดาวน์โหลด
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // ฟังก์ชันสำหรับเปิด preview (ในแท็บใหม่)
  const handlePreview = () => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  // การแสดงผลตามสถานะ
  if (!filePath) {
    return <span>ไม่มีไฟล์</span>;
  }

  if (loading) {
    return (
      <span>
        <Spinner animation="border" size="sm" /> กำลังโหลด...
      </span>
    );
  }

  if (error) {
    return <span className="text-danger">{error}</span>;
  }

  if (fileUrl) {
    return (
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span>{displayName}</span>
        <div>
          <Button variant="outline-primary" size="sm" onClick={handlePreview} className="me-2">
            Preview
          </Button>
          <Button variant="outline-success" size="sm" onClick={handleDownload}>
            Download
          </Button>
        </div>
      </ListGroup.Item>
    );
  }

  return null;
};

export default FirebaseFile;

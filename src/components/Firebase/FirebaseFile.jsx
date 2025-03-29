import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/_api/firebaseConfig';
import { LuView } from 'react-icons/lu';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

const FirebaseFile = ({ filePath, fileName, onDelete }) => {
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
      link.download = displayName || 'downloaded_file'; // ตั้งชื่อไฟล์ fallback ถ้า displayName ว่าง
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log('No file URL provided');
    }
  };

  // ฟังก์ชันสำหรับเปิด preview (ในแท็บใหม่)
  const handlePreview = () => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  // ฟังก์ชันสำหรับลบไฟล์
  const handleDelete = () => {
    if (onDelete) {
      onDelete(filePath, fileName); // เรียกฟังก์ชัน onDelete ที่ส่งมาจาก parent
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
      <ListGroup.Item className="mb-2 ps-2 pe-2">
        <span>{displayName}</span>
        <div className="d-flex justify-content align-items-center mt-2">
          <Button variant="outline-primary" size="sm" onClick={handlePreview} className="me-2">
            <LuView style={{ fontSize: 16, marginRight: 8 }} />
            Preview
          </Button>
          <Button variant="outline-success" size="sm" onClick={handlePreview} className="me-2">
            <MdOutlineSimCardDownload style={{ fontSize: 16, marginRight: 8 }} />
            Download
          </Button>
          <Button variant="outline-danger" size="sm" onClick={handleDelete}>
            <RiDeleteBin5Line style={{ fontSize: 16, marginRight: 8 }} /> Delete
          </Button>
        </div>
      </ListGroup.Item>
    );
  }

  return null;
};

export default FirebaseFile;

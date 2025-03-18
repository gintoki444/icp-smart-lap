// Profile.jsx
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { authenUser } from 'services/_api/authentication';
import { getUserByID } from 'services/_api/usersRequest';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        getUserByID(response.user.user_id).then((response) => {
          console.log('getUserByID:', response);
          setProfile(response);
        });
      });
    }
  }, [profile]);

  const handleEdit = (users) => {
    navigate('/profile/edit', { state: { users } });
  };
  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลโปรไฟล์</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <div className="container">
            <Row className="justify-content-center">
              <Col md={6} sm={12}>
                <Card className="text-center">
                  <Card.Body>
                    <img src="https://placehold.co/100" alt="Profile" className="rounded-circle mb-3" />
                    <h4>{profile.name}</h4>
                    <h5 className="text-muted">{profile.email}</h5>
                    <Card className="text-start mt-4 mb-0">
                      <Card.Body>
                        <h6>ชื่อ-นามสกุล</h6>
                        <p>{profile.first_name + ' ' + profile.last_name}</p>

                        <h6>อีเมล์</h6>
                        <p>{profile.email}</p>

                        <h6>เบอร์โทรศัพท์</h6>
                        <p>{profile.phone}</p>

                        <Button variant="primary" onClick={() => handleEdit(profile)}>
                          <FiEdit style={{ marginRight: 8 }} />
                          แก้ไข
                        </Button>
                      </Card.Body>
                    </Card>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;

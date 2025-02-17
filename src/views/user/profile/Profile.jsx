// Profile.jsx
import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Modal } from 'react-bootstrap';

const Profile = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Your Name',
    email: 'yourname@gmail.com',
    phone: 'Add number',
    location: 'USA'
  });

  const handleSettingsClose = () => setShowSettings(false);
  const handleSettingsShow = () => setShowSettings(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="container">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <Card className="text-center">
            <Card.Body>
              <img src="https://placehold.co/100" alt="Profile" className="rounded-circle mb-3" />
              <h4>{profile.name}</h4>
              <p className="text-muted">{profile.email}</p>
              <Button variant="primary" className="mb-3" onClick={handleSettingsShow}>
                Settings
              </Button>

              <Card className="text-start mt-3">
                <Card.Body>
                  <h6>Name</h6>
                  <p>{profile.name}</p>

                  <h6>Email account</h6>
                  <p>{profile.email}</p>

                  <h6>Mobile number</h6>
                  <p>{profile.phone}</p>

                  <h6>Location</h6>
                  <p>{profile.location}</p>

                  <Button variant="success">Save Changes</Button>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Settings Modal */}
      <Modal show={showSettings} onHide={handleSettingsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Theme</Form.Label>
              <Form.Select defaultValue="Light">
                <option>Light</option>
                <option>Dark</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Select defaultValue="Eng">
                <option>Eng</option>
                <option>Thai</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSettingsClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;

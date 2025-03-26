import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

// import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

// import { CopyToClipboard } from 'react-copy-to-clipboard';

import AuthLogin from './JWTLogin';
import logo from '../../../assets/images/logo/logo.png';

const Signin = () => {
  return (
    <React.Fragment>
      {/* <Breadcrumb /> */}
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <div className="mb-0">
                <img className="img-fluid" src={logo} alt="logo" width={120} />
                {/* <i className="feather icon-unlock auth-icon" /> */}
              </div>
              <AuthLogin />
              <p className="mb-1 text-muted">
                Forgot password?{' '}
                <NavLink to={'/auth/reset-password#'} className="f-w-400">
                  Reset
                </NavLink>
              </p>
              <p className="mb-1 text-muted">
                Activate E-mail?{' '}
                <NavLink to="/auth/activate-token" className="f-w-400">
                  Activate
                </NavLink>
              </p>
              <p className="mb-1 text-muted">
                Don’t have an account?{' '}
                <NavLink to="/auth/signup-1" className="f-w-400">
                  Sign Up
                </NavLink>
              </p>
              {/* <Alert variant="primary" className="text-start mt-3">
                User:
                <CopyToClipboard text="info@codedthemes.com">
                  <Button variant="outline-primary" as={Link} to="#" className="badge mx-2 mb-2" size="sm">
                    <i className="fa fa-user" /> info@codedthemes.com
                  </Button>
                </CopyToClipboard>
                <br />
                Password:
                <CopyToClipboard text="123456">
                  <Button variant="outline-primary" as={Link} to="#" className="badge mx-2" size="sm">
                    <i className="fa fa-lock" /> 123456
                  </Button>
                </CopyToClipboard>
              </Alert> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;

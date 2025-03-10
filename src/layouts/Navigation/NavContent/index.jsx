import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import NavGroup from './NavGroup';

const NavContent = ({ navigation }) => {
  // ✅ ตรวจสอบว่า navigation มีค่าหรือไม่
  if (!navigation || !Array.isArray(navigation) || navigation.length === 0) {
    return <p className="text-center mt-3">No menus available.</p>; // ป้องกัน Error
  }

  const navItems = navigation.map((item) => {
    if (item.type === 'group') {
      return <NavGroup key={'nav-group-' + item.id} group={item} />;
    }
    return null; // ป้องกัน Error ถ้าประเภทไม่ถูกต้อง
  });

  return (
    <div className="navbar-content datta-scroll">
      <PerfectScrollbar>
        <ListGroup variant="flush" as="ul" bsPrefix=" " className="nav pcoded-inner-navbar" id="nav-ps-next">
          {navItems}
        </ListGroup>
      </PerfectScrollbar>
    </div>
  );
};

NavContent.propTypes = {
  navigation: PropTypes.array
};

export default NavContent;

// import PropTypes from 'prop-types';
// import React from 'react';
// import { ListGroup } from 'react-bootstrap';
// import PerfectScrollbar from 'react-perfect-scrollbar';

// import NavGroup from './NavGroup';
// // import NavCard from './NavCard';

// const NavContent = ({ navigation }) => {
//   const navItems = navigation.map((item) => {
//     switch (item.type) {
//       case 'group':
//         return <NavGroup key={'nav-group-' + item.id} group={item} />;
//       default:
//         return false;
//     }
//   });

//   let mainContent = '';

//   mainContent = (
//     <div className="navbar-content datta-scroll">
//       <PerfectScrollbar>
//         <ListGroup variant="flush" as="ul" bsPrefix=" " className="nav pcoded-inner-navbar" id="nav-ps-next">
//           {navItems}
//         </ListGroup>
//         {/* <NavCard /> */}
//       </PerfectScrollbar>
//     </div>
//   );

//   return <React.Fragment>{mainContent}</React.Fragment>;
// };

// NavContent.propTypes = {
//   navigation: PropTypes.array
// };

// export default NavContent;

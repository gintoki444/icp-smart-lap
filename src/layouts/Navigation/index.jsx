import React, { useContext } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';
import useWindowSize from '../../hooks/useWindowSize';
import useMenuItems from '../../hooks/useMenuItems'; // ✅ ใช้ Hook โหลดเมนูจาก API

import NavLogo from './NavLogo';
import NavContent from './NavContent';

const Navigation = () => {
  const configContext = useContext(ConfigContext);
  const { collapseMenu } = configContext.state;
  const windowSize = useWindowSize();
  const { menuItems, loading } = useMenuItems(); // ✅ โหลดเมนูจาก API

  let navClass = ['pcoded-navbar'];

  if (windowSize.width < 992 && collapseMenu) {
    navClass.push('mob-open');
  } else if (collapseMenu) {
    navClass.push('navbar-collapsed');
  }

  return (
    <nav className={navClass.join(' ')}>
      <div className="navbar-wrapper">
        <NavLogo />
        {loading ? <p>Loading menus...</p> : <NavContent navigation={menuItems.items || []} />}
      </div>
    </nav>
  );
};

export default Navigation;

// import React, { useContext } from 'react';

// import { ConfigContext } from '../../../contexts/ConfigContext';
// import useWindowSize from '../../../hooks/useWindowSize';

// import NavLogo from './NavLogo';
// import NavContent from './NavContent';
// import navigation from '../../../menu-items';

// const Navigation = () => {
//   const configContext = useContext(ConfigContext);
//   const { collapseMenu } = configContext.state;
//   const windowSize = useWindowSize();

//   let navClass = ['pcoded-navbar'];

//   navClass = [...navClass];

//   if (windowSize.width < 992 && collapseMenu) {
//     navClass = [...navClass, 'mob-open'];
//   } else if (collapseMenu) {
//     navClass = [...navClass, 'navbar-collapsed'];
//   }

//   let navBarClass = ['navbar-wrapper'];

//   let navContent = (
//     <div className={navBarClass.join(' ')}>
//       <NavLogo />
//       <NavContent navigation={navigation.items} />
//     </div>
//   );
//   if (windowSize.width < 992) {
//     navContent = (
//       <div className="navbar-wrapper">
//         <NavLogo />
//         <NavContent navigation={navigation.items} />
//       </div>
//     );
//   }
//   return (
//     <React.Fragment>
//       <nav className={navClass.join(' ')}>{navContent}</nav>
//     </React.Fragment>
//   );
// };

// export default Navigation;

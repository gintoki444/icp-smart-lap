const menuItems = {
  items: [
    {
      id: 'navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/admin/dashboard'
        }
      ]
    },
    {
      id: 'requests',
      title: 'การขอรับบริการ',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'requestsList',
          title: 'รายการขอรับบริการ',
          type: 'item',
          icon: 'feather icon-box',
          url: '/admin/request'
        },
        {
          id: 'requestsList',
          title: 'ทบทวนคำขอรับบริการ',
          type: 'item',
          icon: 'feather icon-box',
          url: '/admin/charts/nvd3'
        },
        {
          id: 'testList',
          title: 'รับตัวอย่าง',
          type: 'item',
          icon: 'im box-add',
          url: '/admin/lab-test'
        }
      ]
    },
    {
      id: 'lab',
      title: 'การทดสอบ',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'labList',
          title: 'ทดสอบตัวอย่าง',
          type: 'collabse',
          icon: 'gi test-tubes',
          children: [
            {
              id: 'CIP₂O&WP₂O₅',
              title: 'CIP₂O & WP₂O₅',
              // icon: 'gi test-tubes',
              type: 'item',
              url: '/admin/lab-test/cip-wp'
            },
            {
              id: 'water-soluble',
              title: 'Water Soluble Potassium',
              // icon: 'gi test-tubes',
              type: 'item',
              url: '/admin/lab-test/water-soluble-potassium'
            },
            {
              id: 'icp-oes',
              title: 'ทดสอบธาตุ OES',
              // icon: 'gi test-tubes',
              type: 'item',
              url: '/admin/lab-test/test-oes'
            },
            {
              id: 'phosphorus',
              title: 'ทดสอบ Phosphorus',
              // icon: 'gi test-tubes',
              type: 'item',
              url: '/admin/lab-test/phosphorus'
            }
            // {
            //   id: 'phosphorus',
            //   title: 'Phosphorus',
            //   // icon: 'gi test-tubes',
            //   type: 'item',
            //   url: '/admin/lab-test/phosphorus'
            // }
          ]
          // badge: {
          //   title: '7',
          //   type: 'label-danger'
          // },
          // url: '/admin/lab-list'
        }
      ]
    },
    // {
    //   id: 'payment',
    //   title: 'ข้อมูลการชำระเงิน&บัญชี',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'requestsList',
    //       title: 'รายการทดสอบ',
    //       type: 'item',
    //       icon: 'icon-gi-test-tubes',
    //       badge: {
    //         title: '1',
    //         type: 'label-danger'
    //       },
    //       url: '/admin/test/list'
    //     }
    //   ]
    // },
    {
      id: 'report',
      title: 'รายงาน',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'report1',
          title: 'รายงานสรุปการขอรับบริการ',
          type: 'item',
          icon: 'tb report-analytics',
          url: '/admin/charts/nvd3'
        },
        {
          id: 'report2',
          title: 'ออกผลรายงานการทดสอบ',
          type: 'item',
          icon: 'tb report-analytics',
          url: '/admin/charts/nvd3'
        }
        // {
        //   id: 'report2',
        //   title: 'ออกผลรายงาน',
        //   type: 'item',
        //   icon: 'tb report-analytics',
        //   url: '/admin/charts/nvd3'
        // }
      ]
    },
    {
      id: 'Admin',
      title: 'ผู้ดูแลระบบ',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'user',
          title: 'ข้อมูลผู้ใช้งาน',
          type: 'item',
          icon: 'feather icon-user',
          // badge: {
          //   title: '1',
          //   type: 'label-danger'
          // },
          url: '/admin/user'
        },
        {
          id: 'user',
          title: 'ข้อมูลลูกค้า',
          type: 'item',
          icon: 'feather icon-users',
          // badge: {
          //   title: '1',
          //   type: 'label-danger'
          // },
          url: '/admin/customer'
        },
        {
          id: 'company',
          title: 'ข้อมูลบริษัท',
          type: 'item',
          icon: 'lu icon-building',
          url: '/admin/company'
        }
      ]
    }
    // {
    //   id: 'ui-element',
    //   title: 'UI ELEMENT',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'component',
    //       title: 'Component',
    //       type: 'collabse',
    //       icon: 'feather icon-box',
    //       children: [
    //         {
    //           id: 'button',
    //           title: 'Button',
    //           type: 'item',
    //           url: '/admin/basic/button'
    //         },
    //         {
    //           id: 'badges',
    //           title: 'Badges',
    //           type: 'item',
    //           url: '/admin/basic/badges'
    //         },
    //         {
    //           id: 'breadcrumb',
    //           title: 'Breadcrumb & Pagination',
    //           type: 'item',
    //           url: '/admin/basic/breadcrumb-paging'
    //         },
    //         {
    //           id: 'collabse',
    //           title: 'Collabse',
    //           type: 'item',
    //           url: '/admin/basic/collabse'
    //         },
    //         {
    //           id: 'tabs-pills',
    //           title: 'Tabs & Pills',
    //           type: 'item',
    //           url: '/admin/basic/tabs-pills'
    //         },
    //         {
    //           id: 'typography',
    //           title: 'Typography',
    //           type: 'item',
    //           url: '/admin/basic/typography'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'ui-forms',
    //   title: 'FORMS & TABLES',
    //   type: 'group',
    //   icon: 'icon-group',
    //   children: [
    //     {
    //       id: 'forms',
    //       title: 'Form Elements',
    //       type: 'item',
    //       icon: 'feather icon-file-text',
    //       url: '/admin/forms/form-basic'
    //     },
    //     {
    //       id: 'table',
    //       title: 'Table',
    //       type: 'item',
    //       icon: 'feather icon-server',
    //       url: '/admin/tables/bootstrap'
    //     }
    //   ]
    // },
    // {
    //   id: 'chart-maps',
    //   title: 'Chart & Maps',
    //   type: 'group',
    //   icon: 'icon-charts',
    //   children: [
    //     {
    //       id: 'charts',
    //       title: 'Charts',
    //       type: 'item',
    //       icon: 'feather icon-pie-chart',
    //       url: '/admin/charts/nvd3'
    //     },
    //     {
    //       id: 'maps',
    //       title: 'Maps',
    //       type: 'item',
    //       icon: 'feather icon-map',
    //       url: '/admin/maps/google-map'
    //     }
    //   ]
    // },
    // {
    //   id: 'pages',
    //   title: 'Pages',
    //   type: 'group',
    //   icon: 'icon-pages',
    //   children: [
    //     {
    //       id: 'auth',
    //       title: 'Authentication',
    //       type: 'collabse',
    //       icon: 'feather icon-lock',
    //       badge: {
    //         title: 'New',
    //         type: 'label-danger'
    //       },
    //       children: [
    //         {
    //           id: 'signup-1',
    //           title: 'Sign up',
    //           type: 'item',
    //           url: '/admin/auth/signup-1',
    //           target: true,
    //           breadcrumbs: false
    //         },
    //         {
    //           id: 'signin',
    //           title: 'Sign in',
    //           type: 'item',
    //           url: '/admin/auth/signin',
    //           target: true,
    //           breadcrumbs: false
    //         }
    //       ]
    //     },
    //     {
    //       id: 'sample-page',
    //       title: 'Sample Page',
    //       type: 'item',
    //       url: '/admin/sample-page',
    //       classes: 'nav-item',
    //       icon: 'feather icon-sidebar'
    //     },
    //     {
    //       id: 'documentation',
    //       title: 'Documentation',
    //       type: 'item',
    //       icon: 'feather icon-book',
    //       classes: 'nav-item',
    //       url: '/adminhttps://codedthemes.gitbook.io/datta/',
    //       target: true,
    //       external: true
    //     },
    //     {
    //       id: 'menu-level',
    //       title: 'Menu Levels',
    //       type: 'collabse',
    //       icon: 'feather icon-menu',
    //       children: [
    //         {
    //           id: 'menu-level-1.1',
    //           title: 'Menu Level 1.1',
    //           type: 'item',
    //           url: '/admin#!'
    //         },
    //         {
    //           id: 'menu-level-1.2',
    //           title: 'Menu Level 2.2',
    //           type: 'collabse',
    //           children: [
    //             {
    //               id: 'menu-level-2.1',
    //               title: 'Menu Level 2.1',
    //               type: 'item',
    //               url: '/admin#'
    //             },
    //             {
    //               id: 'menu-level-2.2',
    //               title: 'Menu Level 2.2',
    //               type: 'collabse',
    //               children: [
    //                 {
    //                   id: 'menu-level-3.1',
    //                   title: 'Menu Level 3.1',
    //                   type: 'item',
    //                   url: '/admin#'
    //                 },
    //                 {
    //                   id: 'menu-level-3.2',
    //                   title: 'Menu Level 3.2',
    //                   type: 'item',
    //                   url: '/admin#'
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 'disabled-menu',
    //       title: 'Disabled Menu',
    //       type: 'item',
    //       url: '/admin#',
    //       classes: 'nav-item disabled',
    //       icon: 'feather icon-power'
    //     }
    //   ]
    // }
  ]
};

export default menuItems;

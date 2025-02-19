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
    // {
    //   id: 'requests',
    //   title: 'การขอรับบริการ',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'requestsList',
    //       title: 'รายการขอรับบริการ',
    //       type: 'item',
    //       icon: 'feather icon-box',
    //       url: '/admin/request'
    //     },
    //     {
    //       id: 'requestscharts',
    //       title: 'ทบทวนคำขอรับบริการ',
    //       type: 'item',
    //       icon: 'feather icon-box',
    //       url: '/admin/charts/nvd3'
    //     },
    //     {
    //       id: 'testList',
    //       title: 'รับตัวอย่าง',
    //       type: 'item',
    //       icon: 'im box-add',
    //       url: '/admin/lab-test'
    //     }
    //   ]
    // },
    // {
    //   id: 'labs-element',
    //   title: 'การทดสอบ',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'component',
    //       title: 'ทดสอบตัวอย่าง',
    //       type: 'collapse',
    //       icon: 'feather icon-box',
    //       children: [
    //         {
    //           id: 'testconnect',
    //           title: 'ทดสอบ connect',
    //           // icon: 'gi test-tubes',
    //           type: 'item',
    //           url: '/admin/lab-test/connect'
    //         },
    //         {
    //           id: 'CIP₂O&WP₂O₅',
    //           title: 'CIP₂O & WP₂O₅',
    //           // icon: 'gi test-tubes',
    //           type: 'item',
    //           url: '/admin/lab-test/cip-wp'
    //         },
    //         {
    //           id: 'water-soluble',
    //           title: 'Water Soluble Potassium',
    //           // icon: 'gi test-tubes',
    //           type: 'item',
    //           url: '/admin/lab-test/water-soluble-potassium'
    //         },
    //         {
    //           id: 'icp-oes',
    //           title: 'ทดสอบธาตุ OES',
    //           // icon: 'gi test-tubes',
    //           type: 'item',
    //           url: '/admin/lab-test/test-oes'
    //         },
    //         {
    //           id: 'phosphorus',
    //           title: 'ทดสอบ Phosphorus',
    //           // icon: 'gi test-tubes',
    //           type: 'item',
    //           url: '/admin/lab-test/phosphorus'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'report',
    //   title: 'รายงาน',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'report1',
    //       title: 'รายงานสรุปการขอรับบริการ',
    //       type: 'item',
    //       icon: 'tb report-analytics',
    //       url: '/admin/charts/nvd3'
    //     },
    //     {
    //       id: 'report2',
    //       title: 'ออกผลรายงานการทดสอบ',
    //       type: 'item',
    //       icon: 'tb report-analytics',
    //       url: '/admin/charts/nvd3'
    //     }
    //   ]
    // },
    {
      id: 'Admin',
      title: 'ผู้ดูแลระบบ',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'managemenu',
          title: 'จัดการเมนู & Roles',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'roles',
              title: 'จัดการ Roles',
              type: 'item',
              url: '/admin/roles-list'
            },
            {
              id: 'menu',
              title: 'จัดการเมนู',
              type: 'item',
              url: '/admin/menus'
            }
          ]
        },
        {
          id: 'user',
          title: 'ข้อมูลผู้ใช้งาน',
          type: 'item',
          icon: 'feather icon-user',
          url: '/admin/user'
        },
        {
          id: 'company',
          title: 'ข้อมูลลูกค้า/บริษัท',
          type: 'item',
          icon: 'lu icon-building',
          url: '/admin/company'
        }
      ]
    }
  ]
};

export default menuItems;

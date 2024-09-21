const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  children: [
    {
      name: 'LandingPage',
      path: '/',
      component: () => import('@/views/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: () => import('@/views/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Contacts',
      path: '/contacts',
      component: () => import('@/views/contacts/Contacts.vue')
    },
    {
      name: 'Projects',
      path: '/projects',
      component: () => import('@/views/projects/Projects.vue')
    },
    {
      name: 'Proposals',
      path: '/proposals',
      component: () => import('@/views/proposals/Proposals.vue')
    },
    {
      name: 'Invoices',
      path: '/invoices',
      component: () => import('@/views/invoices/Invoices.vue')
    },
    {
      name: 'Inventory',
      path: '/inventory',
      component: () => import('@/views/inventory/Inventory.vue')
    },
    {
      name: 'Notes',
      path: '/notes',
      component: () => import('@/views/shadows/ShadowPage.vue')
    },
    {
      name: 'Uploads',
      path: '/uploads',
      component: () => import('@/views/shadows/ShadowPage.vue')
    },
    {
      name: 'Support',
      path: '/support',
      component: () => import('@/views/StarterPage.vue')
    }
  ]
};

export default MainRoutes;

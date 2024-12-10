const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'resources', component: () => import('pages/ResourcesPage.vue'), title: 'Resources', icon: 'description' },
      { path: 'community', component: () => import('pages/CommunityPage.vue'), title: 'Community', icon: 'groups' },
      { path: 'about', component: () => import('pages/AboutPage.vue'), title: 'About', icon: 'help' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

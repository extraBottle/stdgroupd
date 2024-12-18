const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/resources',
    title: 'Resources',
    icon: 'description',
    children: [      
      { path: 'news', component: () => import('pages/NewsPage.vue'), title: 'News' },
      { path: 'quiz', component: () => import('pages/DailyQuizzesPage.vue'), title: 'Daily Quizzes' }      
    ]
  },
  {
    path: '/community',
    title: 'Community',
    icon: 'groups',
    children: [      
      { path: 'upload', component: () => import('pages/UploadPhotoPage.vue'), title: 'Upload Photo' },
      { path: 'community', component: () => import('pages/CommunityBoardPage.vue'), title: 'Community Board' }      
    ]
  },
  {
    path: '/about',
    title: 'About',
    icon: 'help',
    children: [      
      { path: 'partners', component: () => import('pages/OurPartnersPage.vue'), title: 'Our Partners' },
      { path: 'overview', component: () => import('pages/ProjectOverviewPage.vue'), title: 'Project Overview' },
      { path: 'why', component: () => import('pages/WhyPage.vue'), title: 'Why honeybees matter' }            
    ]
  },
  {
    path: '/camera',
    component: () => import('layouts/UploadLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CameraPage.vue') }
    ]
  },
  {
    path: '/location',
    component: () => import('pages/LocationPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

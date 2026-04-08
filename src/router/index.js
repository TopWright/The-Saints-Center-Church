import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/PublicLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('@/views/public/Home.vue') },
      { path: 'sermons', name: 'Sermons', component: () => import('@/views/public/Sermons.vue') },
      { path: 'programmes', name: 'Programmes', component: () => import('@/views/public/Programmes.vue') },
      { path: 'contact', name: 'Contact', component: () => import('@/views/public/Contact.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: 'login', name: 'Login', component: () => import('@/views/auth/Login.vue') },
      { path: 'register', name: 'Register', component: () => import('@/views/auth/Register.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Dashboard', component: () => import('@/views/admin/Dashboard.vue') },
      { path: 'evangelism', name: 'Evangelism', component: () => import('@/views/admin/Evangelism.vue') },
      { path: 'evangelism/add', name: 'AddEvangelism', component: () => import('@/views/admin/AddEvangelism.vue') },
      { path: 'evangelism/:id', name: 'EvangelismDetails', component: () => import('@/views/admin/EvangelismDetails.vue') },
      { path: 'follow-ups', name: 'FollowUps', component: () => import('@/views/admin/FollowUps.vue') },
      { path: 'follow-ups/add', name: 'AddFollowUp', component: () => import('@/views/admin/AddFollowUp.vue') },
      { path: 'disciples', name: 'Disciples', component: () => import('@/views/admin/Disciples.vue') },
      { path: 'disciples/:id', name: 'DiscipleDetails', component: () => import('@/views/admin/DiscipleDetails.vue') },
      { path: 'reports', name: 'Reports', component: () => import('@/views/admin/Reports.vue') },
      { path: 'users', name: 'Users', component: () => import('@/views/admin/Users.vue') },
      { path: 'users/:id', name: 'MemberProfile', component: () => import('@/views/admin/MemberProfile.vue') },
      { path: 'settings', name: 'Settings', component: () => import('@/views/admin/Settings.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('tsc_token')
    if (!token) return next({ name: 'Login' })
  }
  next()
})

export default router

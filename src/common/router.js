const routes = [
	{
		path: '/',
		models:() => [import('@/models/example')],
    component: () => import('@/routes/Home'),
    title: '星空业主服务号'
	},
	{
		path: '/login',
		models:() => [import('@/models/login')],
		component: () => import('@/routes/Login'),
  },
  {
		path: '/bind',
		models:() => [import('@/models/login')],
    component: () => import('@/routes/Auth/Bind'),
    title: '登录'
  },
  {
		path: '',
    component: () => import('@/routes/Auth/404'),
    title: '404'
	}
]

export {
    routes
}
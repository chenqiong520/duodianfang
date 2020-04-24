export default context => {
  const { route, redirect } = context
  // 路由重定向
  if (route.fullPath === '/index' || route.fullPath === '/home') {
    redirect('/')
  }
}

export default ({ app, route, store }) => {
  const defaultPath = app.getRouteBaseName().split('-')
  const routes = route.fullPath.split('/')
  const breadcrumbs = routes.map((x) => {
    if (x === '') {
      return 'index'
    }
    return x
  })

  store.commit('breadcrumbs/SET_DEFAULT_PATH', ['index', ...defaultPath])
  store.commit('breadcrumbs/SET_LOCALE', app.i18n.locale)
  store.commit('breadcrumbs/SET_BREADCRUMBS', breadcrumbs)
}

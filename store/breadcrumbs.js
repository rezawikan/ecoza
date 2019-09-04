export const state = () => ({
  breadcrumbs: [],
  locale: null,
  defaultPath: []
})

export const getters = {
  breadcrumbs(state) {
    const results = []
    let breadcrumbs = state.breadcrumbs
    let defaultPath = state.defaultPath
    if (state.locale !== null) {
      breadcrumbs = breadcrumbs.filter((c) => { return c !== state.locale })
      defaultPath = defaultPath.filter((c) => { return c !== state.locale })
    }

    breadcrumbs.forEach((x, index) => {
      const data = { label: x }
      const slices = defaultPath.slice(0, index + 1)
      if (index > 0) {
        slices.shift()
      }

      results.push(
        Object.assign({}, data, { link: slices.join('-') })
      )
    })
    return results
  },
  defaultPath(state) {
    return state.defaultPath
  }
}

export const mutations = {
  SET_BREADCRUMBS(state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  SET_LOCALE(state, locale) {
    state.locale = locale
  },
  SET_DEFAULT_PATH(state, defaultPath) {
    state.defaultPath = defaultPath
  }
}

import BeerAPI from '@/services/api/Beers'

export const state = () => ({
  list: []
})

export const mutations = {
  SET_BEERS(state, payload) {
    state.list = payload
  }
}

export const actions = {
  async GET_BEERS(context, config) {
    const beers = await BeerAPI.getBeers()
    return context.commit('SET_BEERS', beers)
  }
}

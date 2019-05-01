import axios from 'axios'

export default {
  async getBeers() {
    const response = await axios.get('https://api.punkapi.com/v2/beers')
    return response.data
  }
}

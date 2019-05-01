<template>
  <div>
    <Search>
      <input v-model="search" type="text" placeholder="Search" />
    </Search>
    <BeerList>
      <div v-for="(beer, index) in filteredBeers" :key="`${beer}-${index}`">
        <beer :beer="beer" />
      </div>
    </BeerList>
  </div>
</template>
<script>
import styled from 'vue-styled-components'
import Beer from '@/components/Beer.vue'

const Search = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  input {
    margin: 1rem 0;
    height: 40px;
    font-size: 16px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
`

const BeerList = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export default {
  components: {
    Beer,
    BeerList,
    Search
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    beers() {
      return this.$store.state.beers.list
    },
    filteredBeers: function() {
      return this.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.search)
      })
    }
  },
  created() {
    this.$store.dispatch('beers/GET_BEERS').then(() => {})
  }
}
</script>

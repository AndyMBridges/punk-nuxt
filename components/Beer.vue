<template>
  <BeerItem>
    <div class="image">
      <img :src="beer.image_url" />
    </div>
    <div class="info">
      <h2>{{ beer.name }}</h2>
      <p>{{ beer.tagline }}</p>
      <p>{{ beer.description }}</p>
      <p>Abv: {{ beer.abv }}%</p>
    </div>
  </BeerItem>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import styled from 'vue-styled-components'

const BeerItem = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 1rem 0;
  .image {
    min-width: 100px;
    display: flex;
    align-items: center;
    align-content: center;
    margin-right: 20px;
    img {
      height: 120px;
      margin: 0 auto;
    }
  }
  .info {
    text-align: left;
    p {
      margin: 0.5rem 0;
    }
  }
`

@Component({
  components: {
    BeerItem
  },
  props: {
    beer: Object
  }
})
export default class Beer extends Vue {
  testFunction(name: string): string {
    /* eslint-disable no-console */
    console.log(name)
    return name
  }

  mounted() {
    this.testFunction('name')
  }
}
</script>

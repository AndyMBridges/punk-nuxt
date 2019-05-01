<template>
  <section class="container">
    <Header />
    <beer-list />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import BeerList from '@/components/BeerList.vue'

export default {
  components: {
    Header,
    BeerList
  }
}
</script>

<style>
.container {
  margin: 2rem auto;
  text-align: center;
  max-width: 900px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div id="app">
    <header class="navbar sticky-top bg-white border-bottom">
      <h4 class="float-left">Spot a room</h4>
      <div class="d-none d-sm-block">
        <ul class="nav justify-content-end">
          <li class="nav-item"><a href="#" class="nav-link">The company</a></li>
          <li class="nav-item"><a href="#" class="nav-link">How we work</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li>
        </ul>
      </div>
    </header>
    <div></div>
    <main class="content container-fluid">
      <h4 v-if="loading" class="mt-2">Loading rooms...</h4>
      <h4 v-if="error != ''" class="mt-2">{{ error }}</h4>
      <Room v-else v-for="room in homecards" :room="room" :key="room.id"/>
    </main>
  </div>
</template>

<script>
import Room from './components/Room.vue'
import api from './api'

export default {
  name: 'app',
  components: { Room },
  data: () => {
    return {
      loading: true,
      homecards: [],
      error: ''
    }
  },
  mounted () {
    api.fetchHomeCards()
      .then(response => {
            this.homecards = response
            this.loading = false
      })
      .catch(error => {
        this.error = error
        this.loading = false
      });
  }
}
</script>

<style lang="scss">
@import "theme";
</style>

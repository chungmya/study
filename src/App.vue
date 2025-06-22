<template>
  <Navbar />
  <Event :text="text" />

  <MoviesList 
  :data="data"
  :isModal="isModal"
  :selectedMovie="selectedMovie"
  @openMdal="isModal=true; selectedMovie=$event"
  @increaseLike="increaseLike($event)"
  />

  <Modal 
      :data="data" 
      :isModal="isModal" 
      :selectedMovie="selectedMovie" 
      @closeModal="isModal=false"
    />
  <!-- <div v-for="(item, i) in data" :key="i">{{ item }}</div> -->

  <!-- 반복문 고유값 key 값이 반드시 필요하다 -->
   <!-- <p v-for="(item, i) in foods" :key="i">{{ item }}</p> -->
</template>

<script>
import data from './assets/MoviesInfo.js';
import Navbar from './components/Navbar.vue';
import Modal from './components/Modal.vue';
import Event from './components/Event.vue'; //이벤트 박스
import MoviesList from './components/MoviesList.vue' //무비 

  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data : data,
        selectedMovie:0,
        textRed: {
          color:'red'
        },
        text: "이벤트 내용이 들어갑니다"
    }
  },
  methods: {
    increaseLike(i) {
      this.data[i].like += 1;
    }
  },
  components: {
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
    MoviesList: MoviesList,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  }
  body { max-width: 768px; margin: 0 auto; padding: 20px; }
  h1, h2, h3 { margin-bottom: 1rem;}
  p { margin-bottom: 0.5rem; }
  button { margin-right: 10px; margin-top: 1rem; }
  .item { width: 100%; border: 1px solid #ccc; display: flex; margin-bottom: 20px; padding: 1rem; }
  .item figure { width: 30%; margin-right: 1rem; }
  .item img { width: 100%; }
  .item .info { width: 100% }
</style>


<!-- 58:53 -->
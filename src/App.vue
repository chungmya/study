<template>
  <Navbar />
  <Event :text="text[eventTextNum]" />
  <SearchBar :data="data_temp" @searchMovie=" searchMovie($event)"/>
<p>
  <button @click="showAllMovie">전체보기</button>
</p>

  <MoviesList 
  :data="data_temp"
  :isModal="isModal"
  :selectedMovie="selectedMovie"
  @openMdal="isModal=true;selectedMovie=$event"
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
import SearchBar from './components/SearchBar.vue' //검색창

  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data : data, //원본
        data_temp: [...data], //사본
        selectedMovie:0,
        textRed: {
          color:'red'
        },
        text: [
          'nexflix 어쩌고 저쩌고',
          '디즈니 100주년 어쩌고 저쩌고 광고',
          '그날, 대한민국의 운명이 바뀌었다 영화 광고 내용'
        ],
        eventTextNum : 0,
        interval : null,
    }
  },
  methods: {
    increaseLike(id) {
      //this.data[i].like += 1;
      this.data.find(movie => {
        if(movie.id == id) {
          movie.like += 1;
        }
      })
    },
    searchMovie(title) {
      //영화 제목이 포함된 데이터를 가져옴
      this.data_temp = this.data.filter(movie => {
        return movie.title.includes(title);
      })
    },
    showAllMovie() {
      this.data_temp = [...this.data];
    }
  },
  components: {
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
    MoviesList: MoviesList,
    SearchBar: SearchBar,
  },
  mounted() {
    console.log('mounted');
    this.interval = setInterval(()=> {
      if(this.eventTextNum == this.text.length - 1) {
        this.eventTextNum = 0;
      } else {
        this.eventTextNum += 1;
      }
    }, 3000);
  },
  unmounted() {
    clearInterval(this.interval);//인터벌 해제
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


<!-- 끝 -->
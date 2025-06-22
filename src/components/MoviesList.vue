<template>
  <div class="container">
    <h1>영화정보</h1>
    <div v-for="(movie, i) in data" :key="i" class="item">
      <figure>
        <img :src="`${movie.imgUrl}`" :alt="movie.title">
      </figure>
      <div class="info">
        <h3 class="bg-yellow" :style="textRed">{{ movie.title }}</h3>
        <p>{{ movie.year }}</p>
        <p>{{ movie.category }}</p>
        <button @click="$emit('increaseLike', i)">좋아요</button>
        <span>{{ movie.like }}</span>
        <p>
          <button @click="$emit('openMdal', i)">상세보기</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesListComponent",
  props : {
    data : Array,
    // isModal : Boolean,
    // selectedMovie : Number,
  }
}
</script>

<style>
 .container { padding: 20px; }

</style>
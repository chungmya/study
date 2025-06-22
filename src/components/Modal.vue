<template>
    <div class="modal" v-if="isModal">
      <div class="inner">
        <h3>{{ data[selectedMovie].title }}</h3>
        <p>영화상세정보</p>
        <button @click="$emit('closeModal')">닫기</button>
        <!-- $emit('이벤트명') 자식이 부모 이벤트 사용할때 -->
      </div>
    </div>
</template>

<script>
export default {
 name : 'ModalComponent',
 props : {
  data: Array,
  isModal : Boolean,
  selectedMovie : Number
 }
}
</script>

<style>
  /* modal */
  .modal {
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal .inner {  
    background: #fff;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
  }
</style>
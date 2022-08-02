<template>
  <div class="main">
    <h1>{{useCount.count}}</h1>
    <button @click="useCount.sum">sum</button>
    <button @click="useCount.minus"  >minus</button>

    <h1>This number is {{useCount.oddOreven}}</h1>

    <childHome />

  </div>



</template>



<script setup>
import {useStore} from "@/store";
import childHome from "@/childHome.vue"

const useCount = useStore()







</script>




<style scoped>
.main{
  text-align: center;
}

button{
  margin: 10px;
}


</style>
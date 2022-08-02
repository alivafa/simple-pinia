<template>


  <div class="main" >
    <button @click="useCount.sum" >{{useCount.count}}</button>
  </div>



</template>



<script setup>
import {useStore} from "@/store";

const useCount = useStore()







</script>




<style scoped>
.main{
  text-align: center;
}



</style>
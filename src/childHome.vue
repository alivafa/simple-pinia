<template>
<div>
<input type="number" v-model="useCount.count">

</div>
</template>



<script setup>
import {useStore} from "@/store";
const useCount = useStore()

</script>



<style scoped>

</style>
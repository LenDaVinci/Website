<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  
</script>

<template>
  <header class="h-12 px-8 align-center inline-flex sticky top-0 bg-white w-full shadow-md">
    <p class="font-bold p-3 mr-12 text-[#8d6f57] ">Pauline 18</p>
    <ul class="inline-flex">
      <li class="mx-6 p-3"><RouterLink to="/">Home</RouterLink></li>  
      <li class="mx-6 p-3"><RouterLink to="/trip">Uitje</RouterLink></li> 
    </ul>
  </header>
  <RouterView />
</template>

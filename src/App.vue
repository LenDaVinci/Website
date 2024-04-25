<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue';
  import mockdata from '../mockdata.json'
  
  const isHidden = ref(true);

  
  document.addEventListener('click', (e) => {
    if (e.target.id === 'dropdownButton') {
      return
    }
    if (!isHidden.value) {

      clickFunction()
    }
  });

  function clickFunction() {
    isHidden.value = !isHidden.value
    document.getElementById('dropdownchevron').classList.toggle('rotate-180')
  }

</script>

<template>
  <header class="h-12 px-8 align-center inline-flex sticky top-0 bg-white w-full shadow-md">
    <p class="font-bold p-3 mr-12 text-[#8d6f57] ">Pauline 18</p>
    <ul class="inline-flex">
      <li class="mx-6 p-3"><RouterLink to="/">Home</RouterLink></li>  
      <li class="mx-6 p-3"><RouterLink to="/trip">Uitje</RouterLink></li> 
      <li class="mx-6 p-3" >  
        <button id="dropdownButton" @mousedown="clickFunction">Berichtjes
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" id="dropdownchevron" class="bi bi-chevron-down inline transition-all" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
        <div id="dropdown" class="absolute z-10 mt-3 max-w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" :class="{hidden : isHidden} ">  
          <ul> 
            <li class="hover:bg-gray-100 px-4 pt-1"><RouterLink to="/messages/1">{{ mockdata[1].naam }}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 "><RouterLink to="/messages/2">{{mockdata[2].naam}}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 "><RouterLink to="/messages/3">{{mockdata[3].naam}}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 "><RouterLink to="/messages/4">{{mockdata[4].naam}}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 "><RouterLink to="/messages/5">{{mockdata[5].naam}}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 "><RouterLink to="/messages/6">{{mockdata[6].naam}}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 "><RouterLink to="/messages/7">{{mockdata[7].naam}}</RouterLink></li>
            <li class="hover:bg-gray-100 px-4 pb-1"><RouterLink to="/messages/8">{{ mockdata[8].naam }}</RouterLink></li> 
          </ul>
        </div>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

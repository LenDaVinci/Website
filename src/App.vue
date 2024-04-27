<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue';
  import data from '../data.json'
  
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
  <header class="m:h-12 px-8 align-center inline-flex sticky top-0 bg-white w-full shadow-md z-10 m:text-md text-xl"> 
    <RouterLink to="/Website">
      <p class="font-bold p-3 mr-12 text-[#8d6f57] ">Pauline 18</p>
    </RouterLink>
    <ul class="inline-flex">
      <li class="mx-6 p-3"><RouterLink to="/Website">Home</RouterLink></li>  
      <li class="mx-6 p-3"><RouterLink to="/Website/trip">Uitje</RouterLink></li> 
      <li class="mx-6 p-3" >  
        <button id="dropdownButton" @mousedown="clickFunction">Berichtjes
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" id="dropdownchevron" class="bi bi-chevron-down inline transition-all" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
        <div id="dropdown" class="absolute z-10 mt-4 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" :class="{hidden : isHidden} ">  
          <ul> 
            <RouterLink className="w-56" to="/Website/messages/1"><li class="hover:bg-gray-100 px-4  pt-1 rounded-t-md">{{ data[1].naam }}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/2"><li class="hover:bg-gray-100 px-4  ">{{data[2].naam}}</li></RouterLink> 
            <RouterLink className="w-56" to="/Website/messages/3"><li class="hover:bg-gray-100 px-4  ">{{data[3].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/4"><li class="hover:bg-gray-100 px-4  ">{{data[4].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/5"><li class="hover:bg-gray-100 px-4  ">{{data[5].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/6"><li class="hover:bg-gray-100 px-4  ">{{data[6].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/7"><li class="hover:bg-gray-100 px-4  ">{{data[7].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/8"><li class="hover:bg-gray-100 px-4 ">{{ data[8].naam }}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/9"><li class="hover:bg-gray-100 px-4  ">{{data[9].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/10"><li class="hover:bg-gray-100 px-4  ">{{data[10].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/11"><li class="hover:bg-gray-100 px-4  ">{{data[11].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/12"><li class="hover:bg-gray-100 px-4  ">{{data[12].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/13"><li class="hover:bg-gray-100 px-4  ">{{data[13].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/14"><li class="hover:bg-gray-100 px-4  ">{{data[14].naam}}</li></RouterLink>
            <RouterLink className="w-56" to="/Website/messages/15"><li class="hover:bg-gray-100 px-4  pb-1 rounded-b-md">{{ data[15].naam }}</li></RouterLink>
          </ul>
        </div>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

<script setup>
    import data from '../../mockdata.json'

    defineProps(['id'])
</script>
<template>
    <div class="w-notew h-noteh p-3 bg-yellow-300 font-glacialIndifference shadow-lg">
        <h2 class="border-b-2 border-yellow-400">{{ data[id]['naam'] }}</h2>
        <p class="">
            {{ data[id]['content'] }}
        </p>
    </div>
</template>
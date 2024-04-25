<script setup>
    import mockdata from '../../mockdata.json'

    const returnDiv = document.createElement('div')


    function getContent(base) {
        returnDiv.innerHTML = ''
        const paragraphArray = base.split('{././}')
        for (let i = 0; i < paragraphArray.length; i++) {
            const paragraph = paragraphArray[i]
            returnDiv.innerHTML += `${paragraph}<br>`
        }
        setTimeout(() => {
            document.getElementById('content').innerHTML = returnDiv.innerHTML
        }, 1)
    }
</script>
<template>
    <h1 class="text-3xl text-black text-center mt-4">Berichtje van {{ mockdata[$route.params.id].naam }}</h1>
    <div id="content" class="mx-48 my-8 text-black leading-relaxed font-glacialIndifference">{{ getContent(mockdata[$route.params.id].content) }}</div>
</template>

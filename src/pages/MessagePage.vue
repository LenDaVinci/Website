<script setup>
    import data from '../../data.json'
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel' 
    import 'vue3-carousel/dist/carousel.css'

    const returnDiv = document.createElement('div')


    function getContent(base) {
        returnDiv.innerHTML = ''
        const paragraphArray = base.split('{././}')
        for (let i = 0; i < paragraphArray.length; i++) {
            const paragraph = paragraphArray[i]
            returnDiv.innerHTML += `${paragraph}<br><br>`
        }
        setTimeout(() => {
            document.getElementById('content').innerHTML = returnDiv.innerHTML
        }, 1)
    }
</script>
<template>
    <h1 class="text-3xl text-black text-center mt-4">Berichtje van {{ data[$route.params.id].naam }}</h1>
    <div id="content" class="mx-48 my-8 text-black leading-relaxed font-glacialIndifference">{{ getContent(data[$route.params.id].content) }}</div>
    <div v-if="data[$route.params.id].fotos.length > 0" >
        <h2 class="text-2xl text-black text-center mt-4 my-16">Foto{{data[$route.params.id].fotos.length > 1 ? '\'s' : ''}}</h2>
        <Carousel title="Klik op een foto om hem groter te tonen!" :items-to-show="data[$route.params.id].fotos.length > 6 ? 5 : data[$route.params.id].fotos.length > 1? data[$route.params.id].fotos.length-1 : 1" :autoplay="5000" :wrap-around="data[$route.params.id].fotos.length > 1 ? true : false" class="mx-48" >  
            <Slide v-for="picture in data[$route.params.id].fotos" :key="picture.id">
                <div  class="carousel__item">
                    <a :href="picture.picturesource" target="_blank"><img class="max-h-96" :src="picture.picturesource" /></a>
                </div>
            </Slide>
            <template #addons>
                <Navigation v-if="data[$route.params.id].fotos.length > 1" />
                <Pagination v-if="data[$route.params.id].fotos.length > 1" />
            </template>
        </Carousel>
    </div>
</template>
<style scoped>
.carousel__slide {
    padding: 0px;
    opacity: 0.9;
    transform: rotateY(20deg) scale(0.9);
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}
.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>

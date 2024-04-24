<script setup>
    import Note from '../components/Note.vue'
</script>
<template>
    <div class="bg-bgimg bg-cover p-8">
    <h1 class="text-3xl text-textcolor text-center">Happy Birthday!</h1>
    <p class="mx-48 text-center my-8 text-textcolor">
      Hier komt dan een beginnend verhaaltje van Lennart, we kunnen bijvoorbeeld verwijzen naar de andere pagina waar het cadeautje te vinden is, komt later allemaal.
      In ieder geval moet dit een beetje lang zijn voor de vorm, dus let op, hier volgt een mini lorem ipsumpje; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet iaculis turpis, sed rutrum turpis egestas a. Nunc in pulvinar neque. 
      Vivamus efficitur lacinia purus ut efficitur. Curabitur auctor tempus augue. Duis placerat erat eget pretium ornare. Aliquam vel lectus sed ligula sagittis posuere. In hac habitasse platea dictumst. 
    </p>
    <h2 class="text-center text-textcolor text-xl">Berichtjes van mensen die je kent</h2>
    <div class="grid grid-cols-3 gap-4 justify-items-center mt-8 mx-24">
      <!-- Sticky note like idea with things people will place in there -->
      <Note v-for="number in [1,2,3,4,5,6,7,8]"
        :key="number"
        :id="number" />
    </div>
  </div>
</template>
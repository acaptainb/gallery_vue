<script setup>
import { computed, onMounted } from 'vue';
import { galleryService } from '../services/GalleryService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import PageChange from '../components/PageChange.vue'

const gallery = computed(()=> AppState.gallery)

onMounted(() =>{
  ShowGallery()
})

async function ShowGallery(){
  try {
    await galleryService.showGallery()
  } catch (error) {
    console.error(error)
    Pop.toast('could not draw gallery.Why?')
  }
}
</script>

<template>

  <div class="grid">
    
    <div v-for="art in gallery" :key="art.id" class="item">
      <img class="img-fluid" :src="art.image" > 
      <!-- <p>{{ art.description }}</p> -->
    </div>
  </div>
  <PageChange/>
</template>

<style scoped lang="scss">
.grid{
  columns: 18rem;
  gap: 0;
  counter-reset: grid;
}
.item{
  break-inside: avoid;
  padding: 0.5rem;
  border-radius: 0.75rem;
  width: 100%;
}
</style>

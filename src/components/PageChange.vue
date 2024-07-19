<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { galleryService } from '../services/GalleryService.js';


const currentPage = computed(() =>AppState.currentPage)
// const currentPage = computed(()=> AppState.currentPage)
async function changePage(pageNumber){
  try {
    console.log(pageNumber);
    await galleryService.changePage(pageNumber)
  } catch (error) {
    console.error(error)
    Pop.toast("Could not change page", 'error')
  }
}
</script>

<template>
<section class="row justify-content-between my-2">
  <div class="col-4">

    <button :disabled="currentPage == 1" class=" btn btn-primary rounded-pill" @click="changePage(currentPage-1)"><i class="mdi mdi-arrow-left"></i> Previous</button>
  </div>
  <div class="col-4 text-center fw-bold">
    <i class="mdi mdi-book"></i>{{currentPage}}

  </div>
  <div class="col-4 text-end">
    <button @click="changePage(currentPage+1)" class="col-3 btn btn-primary rounded-pill">Next<i class="mdi mdi-arrow-right"></i></button>
  </div>
</section>
</template>

<style lang="scss" scoped>

</style>
<template>
  <div class="logo">
    <RouterLink to="/dashboard" aria-label="logo">
      <img :src="imageSrc" alt="Tint Track">
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  const primary = ref('rgb(var(--v-theme-primary))');
  const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
  import imageSrc from '@/assets/images/TintTrack_Logo_Rectangle.png';
</script>

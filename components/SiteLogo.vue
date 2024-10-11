<template>
  <figure class="site-logo">
    <!-- <img src="/logo.svg?inline" alt="Site logo" width="36" height="36" /> -->

    <div v-html="NuxtSvg" class=""></div>
  </figure>
</template>
<script setup lang="js">
import NuxtSvg from '~/public/logo.svg?raw'
</script>

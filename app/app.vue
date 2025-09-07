<script setup lang="ts">
import Options from "./pages/options.vue";
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.preference = "light";
</script>

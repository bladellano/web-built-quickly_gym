<template>
  <div class="min-h-screen">
    <router-view />
    <WhatsAppWidget />
  </div>
</template>

<script setup>
import WhatsAppWidget from './components/WhatsAppWidget.vue'
</script>

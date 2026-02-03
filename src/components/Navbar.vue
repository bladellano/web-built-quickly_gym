<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-orange rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
            </svg>
          </div>
          <span class="font-display font-bold text-xl text-white hidden sm:block">
            MARCELA<span class="text-primary-500">PERSONAL</span>
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            class="text-gray-300 hover:text-primary-400 transition-colors font-medium"
          >
            {{ item.label }}
          </a>
          <a 
            href="#contratar" 
            class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
          >
            Contrate Agora
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden glass-effect border-t border-dark-700"
      >
        <div class="px-4 py-4 space-y-3">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="block text-gray-300 hover:text-primary-400 transition-colors font-medium py-2"
          >
            {{ item.label }}
          </a>
          <a 
            href="#contratar"
            @click="mobileMenuOpen = false"
            class="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold mt-4"
          >
            Contrate Agora
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'FAQ', href: '#faq' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

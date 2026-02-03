<template>
  <section class="py-20 md:py-32 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center glass-effect rounded-3xl p-8 md:p-12 border border-primary-500/30 glow-red animate-on-scroll" ref="urgencyBox">
        <!-- Timer icon -->
        <div class="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 rounded-full mb-6">
          <svg class="w-10 h-10 text-primary-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>

        <span class="inline-block bg-primary-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
          OFERTA POR TEMPO LIMITADO
        </span>

        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Contrate hoje e ganhe
          <span class="gradient-text">avaliação física gratuita!</span>
        </h2>

        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Não perca essa oportunidade única! Comece sua transformação agora e receba uma 
          avaliação física completa + plano alimentar de bônus, totalmente grátis.
        </p>

        <!-- Countdown (visual representation) -->
        <div class="flex justify-center gap-4 mb-8">
          <div class="bg-dark-800 rounded-xl p-4 min-w-[80px]">
            <div class="text-3xl md:text-4xl font-bold text-primary-500">{{ countdown.days }}</div>
            <div class="text-gray-500 text-sm">Dias</div>
          </div>
          <div class="bg-dark-800 rounded-xl p-4 min-w-[80px]">
            <div class="text-3xl md:text-4xl font-bold text-primary-500">{{ countdown.hours }}</div>
            <div class="text-gray-500 text-sm">Horas</div>
          </div>
          <div class="bg-dark-800 rounded-xl p-4 min-w-[80px]">
            <div class="text-3xl md:text-4xl font-bold text-primary-500">{{ countdown.minutes }}</div>
            <div class="text-gray-500 text-sm">Min</div>
          </div>
          <div class="bg-dark-800 rounded-xl p-4 min-w-[80px]">
            <div class="text-3xl md:text-4xl font-bold text-primary-500">{{ countdown.seconds }}</div>
            <div class="text-gray-500 text-sm">Seg</div>
          </div>
        </div>

        <!-- Bonus list -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div class="flex items-center space-x-2 text-accent-lime">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Avaliação Física</span>
          </div>
          <div class="flex items-center space-x-2 text-accent-lime">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Plano Alimentar</span>
          </div>
          <div class="flex items-center space-x-2 text-accent-lime">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Acesso ao App</span>
          </div>
        </div>

        <a 
          href="#contratar"
          class="btn-primary inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
        >
          <span>Garantir Minha Vaga</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>

        <p class="text-gray-500 text-sm mt-4">
          * Vagas limitadas. Promoção válida enquanto durarem os estoques.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref({
  days: '02',
  hours: '14',
  minutes: '32',
  seconds: '45'
})

const urgencyBox = ref(null)

let interval = null

onMounted(() => {
  // Simulated countdown
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 2)
  endDate.setHours(endDate.getHours() + 14)
  
  const updateCountdown = () => {
    const now = new Date()
    const diff = endDate - now
    
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      countdown.value = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      }
    }
  }
  
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)

  // Intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  if (urgencyBox.value) observer.observe(urgencyBox.value)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

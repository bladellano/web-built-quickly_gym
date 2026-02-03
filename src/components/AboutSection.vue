<template>
  <section id="sobre" class="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image Grid -->
        <div class="grid grid-cols-2 gap-4 animate-on-scroll" ref="imageGrid">
          <div class="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80" 
              alt="Treino" 
              class="rounded-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
            >
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" 
              alt="Exercício" 
              class="rounded-2xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
            >
          </div>
          <div class="space-y-4 pt-8">
            <img 
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80" 
              alt="Resultado" 
              class="rounded-2xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
            >
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80" 
              alt="Nutrição" 
              class="rounded-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
            >
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8 animate-on-scroll" ref="content">
          <div>
            <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Sobre o Serviço</span>
            <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
              Seu personal trainer onde você estiver
            </h2>
          </div>

          <p class="text-gray-400 text-lg leading-relaxed">
            Com mais de 5 anos de experiência transformando vidas, oferecemos acompanhamento personalizado 
            que se adapta à sua rotina. Treinos elaborados especificamente para seus objetivos, 
            suporte nutricional e acompanhamento semanal para garantir sua evolução constante.
          </p>

          <div class="space-y-4">
            <div 
              v-for="(item, index) in features" 
              :key="index"
              class="flex items-start space-x-4 p-4 rounded-xl bg-dark-800/50 hover:bg-dark-800 transition-colors group"
            >
              <div class="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                <component :is="item.icon" class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">{{ item.title }}</h3>
                <p class="text-gray-400">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <a 
            href="#contratar"
            class="inline-flex items-center space-x-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors group"
          >
            <span>Quero começar minha transformação</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'

// Icon components
const VideoIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' })
  ])
}

const ChartIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
  ])
}

const ChatIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
  ])
}

const features = ref([
  {
    icon: VideoIcon,
    title: 'Treinos por Vídeo',
    description: 'Vídeos explicativos de cada exercício, feitos exclusivamente para você.'
  },
  {
    icon: ChartIcon,
    title: 'Acompanhamento Semanal',
    description: 'Análise de evolução e ajustes personalizados toda semana.'
  },
  {
    icon: ChatIcon,
    title: 'Suporte via WhatsApp',
    description: 'Tire suas dúvidas diretamente comigo, sempre que precisar.'
  }
])

const imageGrid = ref(null)
const content = ref(null)

onMounted(() => {
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

  if (imageGrid.value) observer.observe(imageGrid.value)
  if (content.value) observer.observe(content.value)
})
</script>

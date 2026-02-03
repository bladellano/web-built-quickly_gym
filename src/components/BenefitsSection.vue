<template>
  <section id="beneficios" class="py-20 md:py-32 bg-dark-950 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full filter blur-[100px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" ref="header">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Benefícios</span>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
          Por que escolher o acompanhamento online?
        </h2>
        <p class="text-gray-400 text-lg">
          Descubra as vantagens de ter um personal trainer dedicado, sem precisar sair de casa.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index"
          class="group relative p-8 rounded-2xl bg-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 animate-on-scroll"
          :ref="el => benefitRefs[index] = el"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          
          <div class="relative z-10">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl">{{ benefit.icon }}</span>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>

      <!-- Modalities -->
      <div class="mt-20 animate-on-scroll" ref="modalities">
        <div class="text-center mb-10">
          <h3 class="font-display text-2xl md:text-3xl font-bold text-white">Modalidades Atendidas</h3>
          <p class="text-gray-400 mt-2">Treinos personalizados para qualquer objetivo</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span 
            v-for="(modality, index) in modalities" 
            :key="index"
            class="px-6 py-3 rounded-full border-2 border-primary-500/30 bg-primary-500/10 text-primary-400 font-medium hover:bg-primary-500 hover:text-white transition-all cursor-default"
          >
            {{ modality }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const benefits = ref([
  {
    icon: '🏠',
    title: 'Treine Onde Quiser',
    description: 'Academia, casa, parque ou hotel. Seu treino vai com você para qualquer lugar.'
  },
  {
    icon: '⏰',
    title: 'Flexibilidade Total',
    description: 'Sem horários fixos. Treine quando sua agenda permitir, no seu ritmo.'
  },
  {
    icon: '📱',
    title: 'App Exclusivo',
    description: 'Acesse seus treinos, vídeos e evolução diretamente no celular.'
  },
  {
    icon: '🥗',
    title: 'Plano Alimentar',
    description: 'Orientação nutricional personalizada para potencializar seus resultados.'
  },
  {
    icon: '📊',
    title: 'Métricas de Evolução',
    description: 'Acompanhe seu progresso com relatórios detalhados e gráficos.'
  },
  {
    icon: '💪',
    title: 'Resultados Reais',
    description: 'Metodologia comprovada com centenas de alunos transformados.'
  }
])

const modalities = ref([
  'Emagrecimento',
  'Hipertrofia',
  'Condicionamento Físico',
  'Saúde e Qualidade de Vida',
  'Treino Funcional',
  'Preparação Física',
  'Reabilitação',
  'Treino para Idosos'
])

const header = ref(null)
const modalities_ref = ref(null)
const benefitRefs = ref([])

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

  if (header.value) observer.observe(header.value)
  benefitRefs.value.forEach(ref => {
    if (ref) observer.observe(ref)
  })
})
</script>

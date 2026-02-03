<template>
  <section id="contratar" class="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full filter blur-[120px]"></div>
    </div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 animate-on-scroll" ref="header">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Contratação</span>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
          Comece sua transformação hoje
        </h2>
        <p class="text-gray-400 text-lg">
          Invista em você. Resultados que valem cada centavo.
        </p>
      </div>

      <!-- Pricing Card -->
      <div class="max-w-lg mx-auto animate-on-scroll" ref="pricingCard">
        <div class="relative">
          <!-- Popular badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <span class="bg-gradient-to-r from-primary-500 to-accent-orange text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              MAIS POPULAR
            </span>
          </div>

          <div class="glass-effect rounded-3xl p-8 md:p-10 border-2 border-primary-500/50 glow-red-intense">
            <!-- Plan name -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Plano Mensal Completo</h3>
              <p class="text-gray-400">Tudo que você precisa para alcançar seus objetivos</p>
            </div>

            <!-- Price -->
            <div class="text-center mb-8">
              <div class="flex items-center justify-center">
                <span class="text-gray-500 text-lg line-through mr-3">R$ 249,90</span>
                <span class="bg-accent-lime/20 text-accent-lime text-sm font-bold px-3 py-1 rounded-full">-40%</span>
              </div>
              <div class="flex items-baseline justify-center mt-2">
                <span class="text-gray-400 text-2xl">R$</span>
                <span class="font-display text-6xl md:text-7xl font-black text-white mx-1">149</span>
                <span class="text-gray-400 text-2xl">,90</span>
              </div>
              <span class="text-gray-500">por mês</span>
            </div>

            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li v-for="(feature, index) in features" :key="index" class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-accent-lime flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>

            <!-- Payment methods -->
            <div class="flex items-center justify-center space-x-4 mb-8 pb-8 border-b border-dark-700">
              <span class="text-gray-500 text-sm">Formas de pagamento:</span>
              <div class="flex space-x-2">
                <div class="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <svg class="w-8 h-4" viewBox="0 0 38 24" fill="none">
                    <rect width="38" height="24" rx="3" fill="#1434CB"/>
                    <path d="M15.5 16.5L17 7.5H19.5L18 16.5H15.5Z" fill="white"/>
                    <path d="M25 7.5L22.5 14L22 11.5C21.5 10 20 8.5 18 7.5L20.5 16.5H23L27.5 7.5H25Z" fill="white"/>
                    <path d="M11 7.5L8 14.5L7.5 12C7 10.5 5.5 8.5 3.5 7.5L6.5 16.5H9L14 7.5H11Z" fill="white"/>
                  </svg>
                </div>
                <div class="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <svg class="w-8 h-4" viewBox="0 0 38 24">
                    <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                    <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                    <path d="M19 7C17.5 8.5 16.5 10 16.5 12C16.5 14 17.5 15.5 19 17C20.5 15.5 21.5 14 21.5 12C21.5 10 20.5 8.5 19 7Z" fill="#FF5F00"/>
                  </svg>
                </div>
                <div class="w-10 h-6 bg-white rounded flex items-center justify-center text-xs font-bold text-green-600">
                  PIX
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <button 
              @click="handlePurchase"
              class="w-full btn-primary bg-gradient-to-r from-primary-500 to-primary-600 text-white py-5 rounded-full font-bold text-xl hover:from-primary-600 hover:to-primary-700 transition-all hover:scale-105 hover:shadow-2xl animate-pulse-glow"
            >
              Quero Começar Agora
            </button>

            <!-- Guarantee -->
            <div class="flex items-center justify-center space-x-2 mt-6">
              <svg class="w-5 h-5 text-accent-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-gray-400 text-sm">Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust badges -->
      <div class="flex flex-wrap justify-center gap-8 mt-12 animate-on-scroll" ref="trustBadges">
        <div class="flex items-center space-x-2 text-gray-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm">Pagamento Seguro</span>
        </div>
        <div class="flex items-center space-x-2 text-gray-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm">Sem Fidelidade</span>
        </div>
        <div class="flex items-center space-x-2 text-gray-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm">Suporte Dedicado</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const features = ref([
  'Treino personalizado com vídeos explicativos',
  'Acompanhamento semanal de evolução',
  'Orientação nutricional completa',
  'Suporte via WhatsApp ilimitado',
  'Acesso ao app exclusivo',
  'Ajustes de treino quando necessário',
  'Avaliação física inicial (BÔNUS)',
  'Planilha de acompanhamento (BÔNUS)'
])

const header = ref(null)
const pricingCard = ref(null)
const trustBadges = ref(null)

const handlePurchase = () => {
  // Simula o processo de compra
  // Em produção, aqui você integraria com gateway de pagamento
  router.push('/obrigado')
}

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
  if (pricingCard.value) observer.observe(pricingCard.value)
  if (trustBadges.value) observer.observe(trustBadges.value)
})
</script>

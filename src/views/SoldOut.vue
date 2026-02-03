<template>
  <div class="min-h-screen bg-dark-950 flex items-center justify-center relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/20 rounded-full filter blur-[100px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
    </div>

    <div class="relative z-10 max-w-2xl mx-auto px-4 text-center">
      <!-- Sold Out Icon -->
      <div class="mb-8 animate-fade-in">
        <div class="w-24 h-24 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Ops! Promoção Esgotada 😢
        </h1>
        
        <h2 class="text-2xl md:text-3xl text-accent-orange font-semibold mb-6">
          Essa oferta especial já encerrou
        </h2>
      </div>

      <!-- Info Card -->
      <div class="glass-effect rounded-3xl p-8 mb-8 animate-slide-up border border-accent-orange/30">
        <p class="text-gray-400 text-lg leading-relaxed mb-6">
          Infelizmente, as vagas promocionais para esta oferta já foram preenchidas. 
          Mas não se preocupe! Você ainda pode contratar nosso serviço pelo valor regular 
          ou entrar na lista de espera para a próxima promoção.
        </p>

        <div class="bg-dark-800 rounded-xl p-6 mb-6">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span class="text-white font-semibold">Quer ser avisado da próxima promoção?</span>
          </div>
          
          <p class="text-gray-500 text-sm mb-4">
            Entre na nossa lista VIP e seja o primeiro a saber quando tivermos novas ofertas especiais.
          </p>

          <form @submit.prevent="handleWaitlist" class="flex flex-col sm:flex-row gap-3">
            <input 
              v-model="email"
              type="email"
              placeholder="Seu melhor e-mail"
              class="flex-1 bg-dark-700 border border-dark-600 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              required
            >
            <button 
              type="submit"
              class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all hover:scale-105"
            >
              Entrar na Lista
            </button>
          </form>
          
          <p v-if="submitted" class="text-accent-lime text-sm mt-3">
            ✓ Pronto! Você será avisado quando tivermos novas promoções.
          </p>
        </div>

        <!-- Alternative CTA -->
        <div class="border-t border-dark-700 pt-6">
          <p class="text-gray-400 mb-4">Ou contrate agora pelo valor regular:</p>
          
          <router-link 
            to="/#contratar"
            class="inline-flex items-center space-x-2 bg-dark-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-600 transition-all"
          >
            <span>Ver Planos Disponíveis</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Back to home -->
      <router-link 
        to="/"
        class="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span>Voltar para a página inicial</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

const handleWaitlist = () => {
  // Simula o envio para lista de espera
  // Em produção, integrar com serviço de e-mail marketing
  console.log('E-mail cadastrado:', email.value)
  submitted.value = true
  email.value = ''
}
</script>

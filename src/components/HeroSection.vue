<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with gradient overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/80"></div>
      
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/20 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left space-y-8 animate-fade-in">
          <div class="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2">
            <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span class="text-primary-400 text-sm font-medium">Vagas Limitadas</span>
          </div>
          
          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span class="text-white">Transforme seu</span>
            <br>
            <span class="gradient-text">corpo</span>
            <span class="text-white"> sem</span>
            <br>
            <span class="text-white">sair de casa</span>
          </h1>
          
          <p class="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
            Treinos personalizados e acompanhamento nutricional com um personal trainer dedicado. 
            <span class="text-white font-semibold">Resultados reais</span>, no seu tempo, onde você estiver.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contratar"
              class="btn-primary bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center space-x-2 animate-pulse-glow"
            >
              <span>Comece Agora</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a 
              href="#sobre"
              class="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center space-x-2 hover:border-primary-500 hover:text-primary-400 transition-all"
            >
              <span>Saiba Mais</span>
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-dark-700">
            <div>
              <div class="font-display text-3xl md:text-4xl font-bold text-primary-500">500+</div>
              <div class="text-gray-500 text-sm">Alunos ativos</div>
            </div>
            <div>
              <div class="font-display text-3xl md:text-4xl font-bold text-primary-500">98%</div>
              <div class="text-gray-500 text-sm">Satisfação</div>
            </div>
            <div>
              <div class="font-display text-3xl md:text-4xl font-bold text-primary-500">5+</div>
              <div class="text-gray-500 text-sm">Anos de exp.</div>
            </div>
          </div>
        </div>

        <!-- Image/Visual -->
        <div class="hidden lg:block relative animate-slide-up">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-orange/30 rounded-3xl blur-3xl"></div>
            <img 
              src="/public/marcela-personal.png" 
              alt="Personal Trainer" 
              class="relative rounded-3xl shadow-2xl border border-dark-700"
            >
            
            <!-- Floating card -->
            <div class="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 flex items-center space-x-3">
              <div class="w-12 h-12 bg-accent-lime/20 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <div class="text-white font-semibold">Resultados Garantidos</div>
                <div class="text-gray-400 text-sm">ou seu dinheiro de volta</div>
              </div>
            </div>

            <!-- Floating stats card -->
            <div class="absolute -top-4 -right-4 glass-effect rounded-2xl p-4">
              <div class="flex items-center space-x-2">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 bg-primary-500 rounded-full border-2 border-dark-900"></div>
                  <div class="w-8 h-8 bg-accent-orange rounded-full border-2 border-dark-900"></div>
                  <div class="w-8 h-8 bg-accent-lime rounded-full border-2 border-dark-900"></div>
                </div>
                <span class="text-white font-medium">+50 esta semana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#sobre" class="text-gray-500 hover:text-primary-400 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
</script>

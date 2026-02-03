<template>
  <section id="faq" class="py-20 md:py-32 bg-dark-950 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 animate-on-scroll" ref="header">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
          Perguntas Frequentes
        </h2>
        <p class="text-gray-400 text-lg">
          Tire suas dúvidas sobre o acompanhamento online
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="bg-dark-900 rounded-2xl border border-dark-700 overflow-hidden hover:border-primary-500/30 transition-colors animate-on-scroll"
          :ref="el => faqRefs[index] = el"
        >
          <button 
            @click="toggleItem(index)"
            class="w-full flex items-center justify-between p-6 text-left"
          >
            <span class="text-white font-semibold text-lg pr-4">{{ item.question }}</span>
            <div 
              class="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': activeIndex === index }"
            >
              <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <div 
            class="faq-answer px-6 text-gray-400"
            :class="{ 'open': activeIndex === index }"
          >
            <p class="pb-6">{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="text-center mt-12 animate-on-scroll" ref="contactCta">
        <p class="text-gray-400 mb-4">Ainda tem dúvidas?</p>
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank"
          class="inline-flex items-center space-x-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Fale conosco no WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeIndex = ref(null)

const faqItems = ref([
  {
    question: 'Como funciona o atendimento online?',
    answer: 'Após a contratação, você receberá acesso ao nosso aplicativo exclusivo onde terá seu treino personalizado com vídeos explicativos de cada exercício. Também terá acesso direto ao personal via WhatsApp para tirar dúvidas e fazer ajustes. Realizamos check-ins semanais para acompanhar sua evolução.'
  },
  {
    question: 'Preciso de equipamentos para treinar?',
    answer: 'Não necessariamente! Os treinos são adaptados de acordo com os equipamentos que você tem disponível. Podemos montar treinos para academia, treinos em casa com halteres, ou até mesmo treinos só com o peso do corpo. Você escolhe o que funciona melhor para sua rotina.'
  },
  {
    question: 'Como funciona o acompanhamento nutricional?',
    answer: 'Você receberá orientações alimentares personalizadas baseadas em seus objetivos e preferências. Não trabalhamos com dietas restritivas, mas sim com reeducação alimentar que se encaixa no seu estilo de vida. Ajustes são feitos conforme sua evolução.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos cartão de crédito (com parcelamento em até 12x), cartão de débito, PIX e boleto bancário. Você pode escolher a forma que for mais conveniente para você no momento da contratação.'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Não temos fidelidade. Você pode cancelar quando quiser, sem multas ou burocracia. Basta enviar uma mensagem solicitando o cancelamento até 5 dias antes da próxima cobrança.'
  },
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'Os resultados variam de pessoa para pessoa, mas a maioria dos nossos alunos já percebe mudanças significativas nas primeiras 4 a 8 semanas. Com consistência e dedicação, a transformação é garantida!'
  }
])

const header = ref(null)
const contactCta = ref(null)
const faqRefs = ref([])

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
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
  if (contactCta.value) observer.observe(contactCta.value)
  faqRefs.value.forEach(ref => {
    if (ref) observer.observe(ref)
  })
})
</script>

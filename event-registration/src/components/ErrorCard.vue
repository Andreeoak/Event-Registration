<template>
  <SectionCard>
    <div class="flex flex-col items-center space-y-6 text-center py-8">
      <div class="flex items-center space-x-3 text-red-600 text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
        <span>Unable to load events</span>
      </div>
      <p class="text-gray-500 max-w-md">
        <slot />
      </p>
      <RoundButton v-if="retry" @click="retry" variant="secondary"> Retry </RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
import SectionCard from './SectionCard.vue'
import RoundButton from './RoundButton.vue'

defineProps({
  retry: {
    type: Function,
    required: false,
  },
})
</script>

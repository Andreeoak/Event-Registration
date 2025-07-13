<template>
  <SectionCard>
    <template #header>
      {{ title }}
    </template>
    {{ when }}
    <template #footer>
      <div class="space-y-4">
        <p class="p-4 font-medium text-xl border-b border-gray-200">
          {{ description }}
        </p>

        <div class="flex justify-end p-4">
          <RoundButton @click="$emit('register')"> Register </RoundButton>
        </div>
      </div>
    </template>
  </SectionCard>
</template>

<script setup>
import RoundButton from '@/components/RoundButton.vue'
import SectionCard from '@/components/SectionCard.vue'
// This is a simple component to display event details.
defineProps({
  title: String,
  when: String,
  description: String,
})

defineEmits(['register'])
</script>

<template>
  <SectionCard>
    <div class="flex justify-between">
      <div class="flec space-x-2">
        <div>{{ title }}</div>
        <div>{{ status }}</div>
      </div>
      <RoundButton variant="danger" @click="$emit('canceled')">cancel</RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue'
import RoundButton from '@/components/RoundButton.vue'

defineProps({
  title: String,
  status: String,
})

defineEmits(['canceled'])
</script>

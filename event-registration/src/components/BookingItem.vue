<template>
  <SectionCard>
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div>{{ title }}</div>
        <div><component :is="icon" :class="{ 'animate-spin': pending }" /></div>
      </div>
      <RoundButton variant="danger" @click="$emit('canceled')">cancel</RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue'
import RoundButton from '@/components/RoundButton.vue'
import { CircleCheck, LoaderCircle } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  status: String,
})

const pending = computed(() => props.status === 'pending')
const icon = computed(() => (pending.value ? LoaderCircle : CircleCheck))
defineEmits(['canceled'])
</script>

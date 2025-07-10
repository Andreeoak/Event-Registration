<template>

<div class="border border-gray-500 bg-white rounded-r-md">
  <h3 class="p-4 font-medium text-xl border-b border-gray-200">{{title}}</h3>
  <p class="p-4 font-medium text-xl border-b border-gray-200">{{when}}</p>
  <p class="p-4 font-medium text-xl border-b border-gray-200">{{description}}</p>

  <section class="flex justify-end p-4">
    <RoundButton  @click="$emit('register')">
      Register
    </RoundButton>
  </section>
</div>

</template>

<script setup>
import RoundButton from '@/components/RoundButton.vue';
// This is a simple component to display event details.
defineProps({
  title: String,
  when: String,
  description: String
});

defineEmits(['register']);
</script>

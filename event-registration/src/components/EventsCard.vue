<template>

<div class="border border-gray-500 bg-white rounded-r-md">
  <h3 class="p-4 font-medium text-xl border-b border-gray-200">{{title}}</h3>
  <p class="p-4 font-medium text-xl border-b border-gray-200">{{when}}</p>
  <p class="p-4 font-medium text-xl border-b border-gray-200">{{description}}</p>
</div>

</template>

<script setup>
// This is a simple component to display event details.
defineProps({
  title: String,
  when: String,
  description: String
})
</script>

<template>
  <button @click="$emit('click')"
    class="text-sm bg-slate-500 text-white px-4 py-2 rounded-4xl hover:bg-amber-500 transition-colors">
    <slot></slot>
    </button>
</template>

<script setup>
defineEmits(['click']); //prevent fallthrough of click event

</script>


<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl fount-medium">Event Booking</h1>
    <h2 class="text-2xl fount-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard v-for="i in 8" :key="i" @register="console.log('Registered!')"/>
    </section>
    <h2 class="text-2xl fount-medium">Your bookings</h2>
  </main>
</template>

<script setup>
import EventCard from '@/components/EventsCard.vue';
</script>

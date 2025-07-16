<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList />
    <h2 class="text-2xl font-medium">Your bookings</h2>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="!loading">
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @canceled="cancelBooking(booking.id)"
        />
      </template>
      <template v-else>
        <LoadingBookingItem v-for="i in 3" :key="i" />
      </template>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import EventList from '@/components/EventList.vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'
import useBookings from '@/composables/useBookings'

const { bookings, loading, fetchBooking, cancelBooking } = useBookings()

onMounted(() => {
  fetchBooking()
})
</script>

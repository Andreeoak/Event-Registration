<template>
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
</template>

<script setup>
import { onMounted } from 'vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'
import useBookings from '@/composables/useBookings'

const { bookings, loading, fetchBooking, cancelBooking } = useBookings()

onMounted(() => {
  fetchBooking()
})
</script>

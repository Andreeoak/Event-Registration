<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl fount-medium">Event Booking</h1>
    <h2 class="text-2xl fount-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <template v-if="!eventsLoading">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :when="event.date"
          :description="event.description"
          @register="handleRegistration(event)"
        />
      </template>
      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </section>
    <h2 class="text-2xl fount-medium">Your bookings</h2>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="!bookingLoading">
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
        />
      </template>
      <template v-else>
        <LoadingBookingItem v-for="i in 3" :key="i" />
      </template>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventsCard.vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'

const events = ref([])
const eventsLoading = ref(false)
const bookingLoading = ref(false)
const bookings = ref([])

const fetchEvents = async () => {
  eventsLoading.value = true
  try {
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
  } finally {
    eventsLoading.value = false
  }
}

const handleRegistration = async (event) => {
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You are already registered for this event!')
    return
  }

  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending',
  }

  bookings.value.push(newBooking)

  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed',
      }),
    })

    if (response.ok) {
      const index = bookings.value.findIndex((b) => b.id === newBooking.id)
      bookings.value[index] = await response.json()
    } else {
      throw new Error('Failed to confirm booking')
    }
  } catch (e) {
    console.error('Failed to register for event: ', e)
    bookings.value = bookings.value.filter((b) => b.id !== newBooking.id)
  }
}

const fetchBooking = async () => {
  try {
    bookingLoading.value = true
    const response = await fetch('http://localhost:3001/bookings?userId=1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    bookings.value = await response.json()
  } finally {
    bookingLoading.value = false
  }
}

onMounted(() => {
  fetchEvents()
  fetchBooking()
})
</script>

<template>
  <section class="grid grid-cols-2 gap-8">
    <template v-if="error">
      <ErrorCard :retry="fetchEvents">
        Something went wrong while trying to load the events. Please check your connection or try
        again in a moment.</ErrorCard
      >
    </template>
    <template v-else>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <template v-if="!loading">
          <template v-if="events.length">
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
            <div class="col-span-2 text-center text-gray-500">No events...</div>
          </template>
        </template>

        <template v-else>
          <LoadingEventCard v-for="i in 4" :key="i" />
        </template>
      </section>
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import EventCard from '@/components/EventsCard.vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import ErrorCard from '@/components/ErrorCard.vue'
import useBookings from '@/composables/useBookings'

const { handleRegistration } = useBookings()

const events = ref([])
const loading = ref(false)
const error = ref(null)

const fetchEvents = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchEvents())
</script>

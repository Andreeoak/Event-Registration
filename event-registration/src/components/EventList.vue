<template>
  <section class="grid grid-cols-2 gap-8">
    <template v-if="error">
      <SectionCard>
        <div class="flex flex-col items-center space-y-6 text-center py-8">
          <div class="flex items-center space-x-3 text-red-600 text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
            <span>Unable to load events</span>
          </div>
          <p class="text-gray-500 max-w-md">
            Something went wrong while trying to load the events. Please check your connection or
            try again in a moment.
          </p>
          <RoundButton @click="fetchEvents" variant="secondary"> Retry </RoundButton>
        </div>
      </SectionCard>
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
import SectionCard from '@/components/SectionCard.vue'
import RoundButton from '@/components/RoundButton.vue'
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

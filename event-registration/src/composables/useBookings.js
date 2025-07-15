import { ref } from 'vue'

const loading = ref(false)
const bookings = ref([])

const fetchBooking = async () => {
  try {
    loading.value = true
    const response = await fetch('http://localhost:3001/bookings?userId=1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    bookings.value = await response.json()
  } finally {
    loading.value = false
  }
}

export default function useBookings() {
  return {
    bookings,
    loading,
    fetchBooking,
  }
}

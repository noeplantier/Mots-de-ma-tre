import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const bookingService = {
  createBooking: (bookingData) => api.post('/bookings', bookingData),
  getAvailableTimes: (date) => api.get(`/bookings/available?date=${date}`)
};

export const blogService = {
  getPosts: (category = '', page = 1) => 
    api.get(`/blog?category=${category}&page=${page}`),
  getPost: (id) => api.get(`/blog/${id}`)
};

export const contactService = {
  sendMessage: (contactData) => api.post('/contact', contactData)
};

export default api;
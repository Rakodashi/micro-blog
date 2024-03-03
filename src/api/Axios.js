import axios from 'axios';

export default axios.create({
  baseURL: 'https://fake-api-neon.vercel.app/users'
});
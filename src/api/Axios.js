import axios from 'axios';

export default axios.create({
  baseURL: 'https://rakodashi-micro-blog.vercel.app/'
});
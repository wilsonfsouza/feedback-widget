import axios from 'axios'

export const api = axios.create({
  baseURL: "http://localhost:3333"
}) // Use your IP address if you are using expo on your phone
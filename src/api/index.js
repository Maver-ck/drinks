import axios from "axios";

const api = axios.create({
  baseURL: "https://mock-api.drinks.test.siliconrhino.io",
});

export const getAllEvents = () => api.get(`/events`);
export const getEventById = (id) => api.get(`/events/${id}`);

const apis = {
  getAllEvents,
  getEventById,
};

export default apis;

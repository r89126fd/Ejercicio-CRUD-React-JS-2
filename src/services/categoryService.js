import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/categories';

export const getCategories = async () => {
  return axios.get(BASE_URL);
};

export const createCategory = async (category) => {
  return axios.post(BASE_URL, category);
};

export const updateCategory = async (id, category) => {
  return axios.put(`${BASE_URL}/${id}`, category);
};

export const deleteCategory = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

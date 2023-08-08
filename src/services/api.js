import axios from 'axios';
import uniqid from 'uniqid';

axios.defaults.baseURL = 'https://64d2167df8d60b1743616ee9.mockapi.io/';

export const createMaterial = async values => {
  const response = await axios.post('materials', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('materials');
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`materials/${id}`);

  return response.data;
};

export const editMaterial = async fields => {
  const response = await axios.put(`materials/${fields.id}`, fields);

  return response.data;
};

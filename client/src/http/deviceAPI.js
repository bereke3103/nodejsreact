import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';
export const createType = async (type) => {
  const { data } = await $host.post('/api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $authHost.get('/api/type');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $host.post('/api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $authHost.get('/api/brand');
  return data;
};

export const createDevice = async () => {
  const { data } = await $authHost.get('/api/brand');
  return data;
};

export const fetchDevice = async () => {
  const { data } = await $authHost.get('/api/device');
  return data.rows;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $authHost.get(`/api/device/${id}`);
  return data;
};

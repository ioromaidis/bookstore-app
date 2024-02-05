import axios from 'axios';

const get = async (url: string, params: any = null) => {
  const { data } = await axios.get(url, { params });
  return data;
};

const post = async (url: string, body: any) => {
  const { data } = await axios.post(url, body);
  return data;
};

export default {
  get,
  post,
};

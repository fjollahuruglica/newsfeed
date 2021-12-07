import { Alert } from 'react-native';
import axios from 'axios';
import { Config } from '../../config';

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    apikey: 'pub_26325a56b09d29f87d04344d03f4957c314c',
  },
  timeout: 3000,
});

interface Error {
  message: string;
  data?: string;
}

export const handleError = ({ message, data }: Error) => {
  return Alert.alert(!data ? message : 'Something went wrong!');
};

instance.interceptors.response.use(
  response => response,
  ({ message, response: { data } }) => {
    return handleError({ message, data });
  },
);

export default instance;

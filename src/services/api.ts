import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export function getFromApi(route: string) {
  const result = api.get(route).then((result) => {
    const data = result.data;
    return data;
  });

  return result;
}

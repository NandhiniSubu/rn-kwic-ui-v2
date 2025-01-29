import http from '@framework/utils/http';
import {useMutation} from '@tanstack/react-query';

export interface LoginInputType {
  username: String;
  auth_type?: String;
  ip_address?: String;
  platform?: String;
}

async function getAuthToken(input: LoginInputType) {
  const {data} = await http.post('/auth/token', input);
  return data;
}

export const useAuthTokentMutation = () => {
  return useMutation({
    mutationFn: (input: LoginInputType) => getAuthToken(input),
    onError(error: any) {
      if (error.response) {
        console.log('LOGN INVALID', error?.response.data);
      }
    },
  });
};

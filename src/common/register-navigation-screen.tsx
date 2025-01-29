import {Navigation} from 'react-native-navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from '@config/ThemeProvider';
import AppToast from '@components/Toast/AppToast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error: any) {
        if (error.response) {
          if (error.response.status == 401) {
            return false;
          } else if (error.response.status == 403) {
            return false;
          }
          return failureCount <= 2;
        } else {
          return failureCount <= 2;
        }
      },
    },
  },
});

export const registerScreen = (screenName: any, ScreenComponent: any) => {
  Navigation.registerComponent(
    screenName,
    () => props =>
      (
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <ScreenComponent {...props} />
            <AppToast />
          </ThemeProvider>
        </QueryClientProvider>
      ),
    () => ScreenComponent,
  );
};

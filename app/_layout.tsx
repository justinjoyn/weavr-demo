import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { initializeUXComponents } from '@weavr-io/secure-components-react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

console.log("Initializing Weavr UX Components");
initializeUXComponents(process.env.EXPO_PUBLIC_WEAVR_ENV, process.env.EXPO_PUBLIC_WEAVR_UI_KEY)
  .then()
  .catch((error) => {
    console.error(error);
  });

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

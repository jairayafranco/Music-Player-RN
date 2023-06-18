import { StatusBar } from 'expo-status-bar';
import { AppContextProvider } from './context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/AppRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <StatusBar style="light" />
        <Routes />
      </AppContextProvider>
    </NavigationContainer>
  );
}

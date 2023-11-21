import { PaperProvider } from 'react-native-paper';
import { RootNavigation } from './src/Navigation/RootNavigation'

export default function App() {
  return (
    <PaperProvider>
      <RootNavigation/>
    </PaperProvider>
  );
}

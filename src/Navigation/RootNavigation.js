import { AuthScreen } from '../Screens/Auth/AuthScreen';
import { AppNavigation } from './AppNavigation';

export function RootNavigation() {
    const user = null;
    
    return user ? <AppNavigation/> : <AuthScreen />;
}
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './src/Authentification/Onboarding';
import { LoadAssets } from './src/Components/LoadAssets';
import { useFonts } from 'expo-font';

const AuthenticationStack = createStackNavigator();


const fonts = {
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
}





const AuthenticationNavigator = () => (
    
    <AuthenticationStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthenticationStack.Screen name='OnBoarding' component={Onboarding} />
    </AuthenticationStack.Navigator>
)

export default function App() {


    const [loaded] = useFonts({
        Regular: require('./assets/fonts/Poppins-Regular.ttf'), // 400
        SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'), // 600
        Bold: require('./assets/fonts/Poppins-Bold.ttf'), // 700
    });
    
    if (!loaded) {
        return null;
    }






    return (
        <LoadAssets {... { fonts }}>
            <AuthenticationNavigator />
        </LoadAssets>
    );
}



import React from "react";
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
    const [fontsLoaded] = useFonts({
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold,
    })

    if (!fontsLoaded) {
        return null; // Enquanto as fontes ainda NÃO estiverem carregadas e tela ficará por um leve tempo em branco
    }

    return (
        <Routes />
    );
}

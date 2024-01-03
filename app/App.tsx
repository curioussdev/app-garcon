import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [isFontLoaded] = useFonts({
        'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
        'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Bold.otf'),
    });

    if(!isFontLoaded){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'GeneralSans-400'}}>HORA DE CODAR</Text>
            <Text style={{ fontFamily: 'GeneralSans-400'}}>HORA DE CODAR</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

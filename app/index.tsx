import { Button, StyleSheet, View } from 'react-native';
import Greetings from '../components/Greetings';
import { useState } from 'react';

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Greetings name={count} />
            <Button
                title='Click me!'
                onPress={() => {
                    setCount(count + 1);
                }}
            />
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

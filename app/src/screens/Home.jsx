import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Telas</Text>

            <View style={styles.buttons}>
                <Button title="Login" onPress={() => navigation.navigate('Login')} />
                <Button title="Cadastro" onPress={() => navigation.navigate('Register')} />
                <Button title="Salas/Eventos" onPress={() => navigation.navigate('Events')} />
                <Button title="Modal de Sala/Eventos" onPress={() => navigation.navigate('ModalEvent')} />
                <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
                <Button title="Perfil de usuário" onPress={() => navigation.navigate('Profile')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    buttons: {
        gap: 10
    }
});
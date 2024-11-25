import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity, Image, ImageBackground, ScrollView, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function welcomePage({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && email) {
      navigation.navigate('Página principal', { name, email });
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.h1}>Olá,</Text>
          <Text style={styles.h1}>Seja <Text style={styles.highlightedBlueText}>bem-vindo!</Text></Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.h2}>Qual o seu nome?</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira aqui seu nome"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.h2}>Nos informe seu e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira aqui seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const handleWhatsAppClick = () => {
  const phoneNumber = '5511957920957';
  const message = 'Olá, podemos conversar?';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  Linking.openURL(url).catch((err) => Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.'));
};

function homePage({ route }) {
  const { name, email } = route.params;

  return (
    <ScrollView>
      <View style={styles.homePageContainer}>
        <ImageBackground
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1664525632908-d0a58b62ced4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={styles.homePageImageBackground}>
          <View style={styles.overlay} />
          <Image style={styles.logo} source={require('./assets/icons8-mão-amiga-100.png')}></Image>
          <View style={styles.headline}>
            <View style={styles.headlineCoracaoAberto}>
              <Text style={[styles.h1, { color: '#FAC155' }]}>Coração</Text>
              <Text style={[styles.h1, { color: '#6E8FBA' }]}>Aberto</Text>
            </View>
            <Text style={styles.paragraph}>
              Somos uma ONG que se concentra em proporcionar a indivíduos de todas as idades e origens o suporte que precisam para lidar com os desafios emocionais e psicológicos.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.section}>
          <Text style={styles.h2Section}>
            Estamos aqui para <Text style={styles.highlightedYellowText}>lhe ajudar</Text>
          </Text>
          <Text style={styles.paragraph}>
            Algumas das características que você pode se identificar e fazem valer o contato conosco:
          </Text>
          <Text style={[styles.paragraph, { paddingLeft: 30 }]}>
            <Text style={[styles.highlightedYellowText, { fontWeight: 'bold' }]}>• Desânimo constante</Text> para tarefas ordinárias como tomar banho, se alimentar e levantar da cama
          </Text>
          <Text style={[styles.paragraph, { paddingLeft: 30 }]}>
            <Text style={[styles.highlightedYellowText, { fontWeight: 'bold' }]}>• Receio de compartilhar dificuldades</Text> para pessoas próximas
          </Text>
          <Text style={[styles.paragraph, { paddingLeft: 30 }]}>
            <Text style={[styles.highlightedYellowText, { fontWeight: 'bold' }]}>• Sentimentos de desesperança</Text> ou pessimismo em relação ao futuro, <Text style={[styles.highlightedYellowText, { fontWeight: 'bold' }]}>culpa excessiva ou inutilidade</Text>
          </Text>
          <Text style={styles.paragraph}>De toda forma queremos conversar com você,
            <Text style={[styles.highlightedYellowText, { fontWeight: 'bold' }]}> clique no botão abaixo</Text> para entrar em contato com nossos profissionais de psicologia
          </Text>
        </View>
        <TouchableOpacity style={styles.homePageButton} onPress={handleWhatsAppClick}>
          <Text style={styles.buttonText}>Entrar em contato</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boas-vindas">
        <Stack.Screen name="Boas-vindas" component={welcomePage} />
        <Stack.Screen name="Página principal" component={homePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'start',
    paddingVertical: 80,
  },
  userInfo: {
    paddingBottom: 100,
  },
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  h2Section: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 4,
  },
  input: {
    textAlign: 'left',
    width: '100%',
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#A9A9A9',
  },
  highlightedBlueText: {
    color: '#6E8FBA',
  },
  highlightedYellowText: {
    color: '#FAC155',
  },
  button: {
    backgroundColor: '#6E8FBA',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  homePageContainer: {
    alignItems: 'start',
    backgroundColor: '#f5f5f5',
  },
  homePageImageBackground: {
    justifyContent: 'space-around',
    height: 300,
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 60,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 30,
    top: 80,
  },
  headlineCoracaoAberto: {

    marginBottom: 20,
  },
  section: {
    backgroundColor: '#6E8FBA',
    padding: 20,
    marginBottom: 30,
  },
  homePageButton: {
    backgroundColor: '#6E8FBA',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    margin: 20,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
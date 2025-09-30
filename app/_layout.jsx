import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

// Importa os componentes das duas telas
import BatSignalButton from './src/components/BatSignalButton';
import ContactForm from './src/components/ContactForm';

// Importa o componente do Logo (Crie a pasta 'assets' e coloque a imagem do logo lá)
const batLogo = require('./assets/batman-logo.png'); 

export default function App() {
  // Estado para controlar a visibilidade: false = Tela 1; true = Tela 2 (Formulário)
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Função chamada ao clicar no botão "activate bat signal"
  const handleActivateSignal = () => {
    setMostrarFormulario(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />

      {/* Renderização Condicional */}
      {mostrarFormulario ? (
        // TELA 2: Formulário de Contato
        <ContactForm />
      ) : (
        // TELA 1: Logo e Botão de Ativação
        <BatSignalButton 
          logoSource={batLogo} 
          onActivate={handleActivateSignal} 
        />
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030', // Fundo escuro para combinar com o tema Batman
  },
});


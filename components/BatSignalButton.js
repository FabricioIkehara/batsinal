import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BatSignalButton = ({ logoSource, onActivate }) => {
  return (
    <View style={styles.container}>
      
      {/* O Logo do Batman */}
      <Image 
        source={logoSource} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* O Botão de Ativação */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={onActivate}
      >
        <Text style={styles.buttonText}>activate bat signal</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Fundo da tela 1
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 80,
    tintColor: 'white', // Faz o logo ficar branco, estilo "sinal"
  },
  button: {
    backgroundColor: 'red', // Cor que chama a atenção
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default BatSignalButton;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const ContactForm = () => {
    // Estados para armazenar os dados digitados
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [observacao, setObservacao] = useState('');

    const handleSubmit = () => {
        // Lógica de envio: aqui você faria a chamada a uma API
        if (!nome || !telefone || !localizacao) {
            Alert.alert("Erro", "Por favor, preencha nome, telefone e localização.");
            return;
        }

        // Simulação de envio
        Alert.alert(
            "Chamado Enviado!",
            `O Bat-Sinal foi atendido. Nome: ${nome}, Localização: ${localizacao}`
        );

        // Limpa o formulário após o "envio"
        setNome('');
        setTelefone('');
        setLocalizacao('');
        setObservacao('');
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sistema de Gerenciamento de Emergências</Text>
            <Text style={styles.subtitle}>Relate a sua situação. A ajuda está a caminho.</Text>

            {/* Campo NOME */}
            <Text style={styles.label}>Nome:</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={setNome} 
                value={nome} 
                placeholder="Nome Completo"
                placeholderTextColor="#999"
            />
            
            {/* Campo TELEFONE */}
            <Text style={styles.label}>Telefone para Contato:</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={setTelefone} 
                value={telefone} 
                keyboardType="phone-pad"
                placeholder="(XX) XXXXX-XXXX"
                placeholderTextColor="#999"
            />
            
            {/* Campo LOCALIZAÇÃO */}
            <Text style={styles.label}>Localização Atual:</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={setLocalizacao} 
                value={localizacao} 
                placeholder="Ex: Rua Gotham, N° 100"
                placeholderTextColor="#999"
            />

            {/* Campo OBSERVAÇÃO */}
            <Text style={styles.label}>Observação (detalhes da ocorrência):</Text>
            <TextInput 
                style={[styles.input, styles.textArea]} 
                onChangeText={setObservacao} 
                value={observacao} 
                placeholder="Descreva a situação em detalhes..."
                placeholderTextColor="#999"
                multiline={true}
                numberOfLines={4}
            />
            
            {/* Botão ENVIAR */}
            <TouchableOpacity 
                style={styles.submitButton} 
                onPress={handleSubmit}
            >
                <Text style={styles.submitButtonText}>Enviar Pedido de Ajuda</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#303030', // Fundo do formulário
    },
    container: {
        padding: 20,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700', // Dourado
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#DDD',
        textAlign: 'center',
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#202020',
        color: 'white',
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#444',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#007BFF', // Azul vibrante
        padding: 15,
        borderRadius: 8,
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ContactForm;
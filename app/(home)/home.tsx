import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { themes } from '@/global/themes';

export default function HomeScreen() {
  const [scannedCodes, setScannedCodes] = useState([
    { id: '1', code: '123456789012', description: 'Produto A' },
    { id: '2', code: '987654321098', description: 'Produto B' },
    // Adicione mais itens conforme necessário
  ]);

  const handleScan = () => {
    // Lógica para iniciar o escaneamento de código de barras
    console.log('Iniciar escaneamento');
  };

  const handleLogout = () => {
    // Lógica para realizar o logout
    console.log('Logout');
  };

  const handleEdit = (id) => {
    // Lógica para editar o item com o id fornecido
    console.log(`Editar item com id: ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para excluir o item com o id fornecido
    setScannedCodes((prevCodes) => prevCodes.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.code}</Text>
        <Text style={styles.itemText}>{item.description}</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => handleEdit(item.id)}>
          <FontAwesome name="edit" size={20} style={{color: themes.colors.secondary}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.scanButtonContainer}>
          <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
            <FontAwesome name="camera" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.scanButtonLabel}>Escanear código de barras</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="sign-out" size={30} style={{color: themes.colors.secondary}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Códigos escaneados</Text>
      <FlatList
        data={scannedCodes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  scanButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scanButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: themes.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  scanButtonLabel: {
    fontSize: 16,
    color:  themes.colors.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 60,
  },
});

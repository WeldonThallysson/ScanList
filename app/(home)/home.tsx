import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { themes } from "@/global/themes";
import { useHandleBarcodes } from "@/hooks/useHandleBarcode";
import { IResponseBarcodes } from "@/interfaces/services/interface.barcode";
 
import { useHandleAuth } from "@/hooks/useHandleAuth";
import { BarcodeScanningResult, Camera } from "expo-camera";
import { styles } from "../../global/styles/home/styles";
import { ModalScanner } from "@/components/ModalScanner";

export default function HomeScreen() {
  const [filterCode, setFilterCode] = useState("");
  const [filterDescription, setFilterDescription] = useState("");
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [newDescription, setNewDescription] = useState("");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    dataBarcodes,
    detailsBarcode,
    handleDeleteBarCode,
    handleSearchAllBarCode,
    handleRegisterBarcode,
    handleSearchDetailsBarCode,
    handleUpdateBarCode,
    loading
  } = useHandleBarcodes();

  const { handleLogout } = useHandleAuth();

  const handleScan = () => {
    setIsModalVisible(true); 
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); 
    setScanned(false); 
  };

  const handleEdit = (id: number) => {
    setEditingItemId(id);
    handleSearchDetailsBarCode({id})
  };

  const handleSave = (id: number) => {
    const data = {
      id: id,
      description: newDescription,
    };
    handleUpdateBarCode(data);
    handleSearchAllBarCode({
     ...(filterCode && { code: filterCode}),
     ...(filterDescription && { description: filterDescription})
    });
    setEditingItemId(null);
  };

  const handleDelete = (id: number) => {
    handleDeleteBarCode({ id });
  };

  const handleBarCodeScanned = (scanning: BarcodeScanningResult) => {
    setScanned(true);
    handleRegisterBarcode({ code: scanning.data });
    handleSearchAllBarCode({
      ...(filterCode && { code: filterCode}),
      ...(filterDescription && { description: filterDescription})
     });
    handleCloseModal();
   
  };

  const renderItem = ({ item }: { item: IResponseBarcodes }) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>Código: {item.code}</Text>
        {editingItemId === item.id ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.inputEdit}
              value={newDescription}
              onChangeText={(values) => setNewDescription(values)}
            />
          </View>
        ) : (
          <>
            {item.description && (
              <Text style={styles.itemText}>{item.description}</Text>
            )}
          </>
        )}
      </View>

      <View style={styles.itemActions}>
        {editingItemId !== item.id ? (
          <TouchableOpacity
            onPress={() => handleEdit(item.id)}
          >
            <FontAwesome
              name="edit"
              size={20}
              style={{ color: themes.colors.secondary }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleSave(item.id)}>
            <FontAwesome
              name="check"
              size={20}
              style={{ color: themes.colors.primary }}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    handleSearchAllBarCode({})
  }, []);

  useEffect(() => {
    if(detailsBarcode){
      setNewDescription(detailsBarcode.description)
    }
  },[detailsBarcode])


  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.scanButtonContainer}>
            <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
              <FontAwesome name="camera" size={30} color="white" />
            </TouchableOpacity>

            <Text style={styles.scanButtonLabel}>
              Escanear código de barras
            </Text>
          </View>

          <TouchableOpacity onPress={handleLogout}>
            <FontAwesome
              name="sign-out"
              size={30}
              style={{ color: themes.colors.secondary }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.filterContainer}>
          <TextInput
            style={styles.input}
            placeholder="Filtrar por código"
            value={filterCode}
            onChangeText={setFilterCode}
          />

          <TextInput
            style={styles.input}
            placeholder="Filtrar por descrição"
            value={filterDescription}
            onChangeText={setFilterDescription}
          />

          <Button
            title="Aplicar Filtro"
            onPress={() => {
              handleSearchAllBarCode({
                ...(filterCode && { code: filterCode}),
                ...(filterDescription && { description: filterDescription})
               });
            }}
          />
        </View>

        {!loading ? (
          <View>
            {dataBarcodes.length !== 0 ? (
              <View>
                    <Text style={styles.title}>Códigos Escaneados</Text>
                    <FlatList
                    data={dataBarcodes}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={renderItem}
             />
                </View>
            ) : (
              <Text style={styles.titleEmpty}>Nenhum Código Encontrado</Text>
            )}
        
          </View>
        ) : (
          <View style={styles.container_loading}>
            <ActivityIndicator size={"large"}/>
            <Text style={styles.loading_text}>Carregando Códigos Escaneados...</Text>
          </View>
        )}
        
      </View>

      <ModalScanner
        scanned={scanned}
        handleBarCodeScanned={handleBarCodeScanned}
        handleCloseModal={handleCloseModal}
        isModalVisible={isModalVisible}
       />
    </>
  );
}

import { styles } from "@/global/styles/home/styles"
import { FontAwesome } from "@expo/vector-icons"
import { BarcodeScanningResult, CameraView } from "expo-camera"
import { Modal, Text, TouchableOpacity, View } from "react-native"



type ModalScannerProps = {
    scanned: boolean,
    isModalVisible: boolean,
    handleCloseModal: () => void
    handleBarCodeScanned: (scanningResult: BarcodeScanningResult) => void
   
}

export const ModalScanner = ({
    scanned,
    isModalVisible,
    handleCloseModal,
    handleBarCodeScanned 
}: ModalScannerProps) => {


    return (
        <Modal
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
        animationType="slide"
      >
        <CameraView
          style={styles.camera}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: [
              "qr",
              "ean13",
              "ean8",
              "upc_e",
              "code39",
              "code93",
              "code128",
              "pdf417",
              "aztec",
              "datamatrix",
              "itf14",
              "codabar",
              "upc_a",
            ],
          }}
        >
          <View style={styles.overlay}>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.closeButton}
            >
              <FontAwesome name="close" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.text}>Escaneie um código de barras</Text>
          </View>
        </CameraView>
      </Modal>
    )
}
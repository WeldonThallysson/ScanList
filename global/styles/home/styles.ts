import { themes } from "@/global/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  containerCamera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container_loading: {
    marginVertical: 165,
    gap: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },

  container_empty: {
    marginVertical: 165,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },

  loading_text: {
    fontSize: 18,

  },

  text_empty: {
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  scanButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scanButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: themes.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  scanButtonLabel: {
    fontSize: 16,
    color: themes.colors.primary,
  },
  filterContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  inputEdit: {
    width: 250,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  titleEmpty: {
    fontSize: 18,
    textAlign:"center",
    
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemContent: {
    flex: 1,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 16,
  },
  itemActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 60,
  },
  editContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  toast: {
    zIndex: 9999, // Valor alto para garantir que o toast fique acima de outros componentes
  },

  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

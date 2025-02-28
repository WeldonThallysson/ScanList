import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
    },
  
    containerImage: {
      marginVertical: 15,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    container_btns: {
      gap: 15
    },
  
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  
    title: {
      marginTop: -15,
      fontSize: 25,
      fontWeight: "bold",
    },
  
    input: {
      height: 50,
      borderColor: "#7e7c7c",
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 12,
      paddingHorizontal: 12,
    },
  
  
    btn_sub_action: {
        width: "100%",
        alignItems:"center",
        justifyContent:"center"
    },
  
    logo: {
      width: 150,  
      height: 150,  
      resizeMode: "contain", 
    },
    toast: {
      zIndex: 9999,  
    },
  });
  
import { TextInput, Button, View, StyleSheet } from 'react-native';

export default function Page() {
  
  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

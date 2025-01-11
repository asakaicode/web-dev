import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo 中級課題</Text>
      <Text style={styles.count}>カウント: {count}</Text>
      <Button title="インクリメント" onPress={increment} />
      <Button title="デクリメント" onPress={decrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  count: {
    fontSize: 18,
    marginBottom: 10,
  },
});

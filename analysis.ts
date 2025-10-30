
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
} from 'react-native';

const UserProfile = () => {
  const [allergies, setAllergies] = useState('');
  const [healthPriorities, setHealthPriorities] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const handleSave = () => {
    // In a real app, you'd save this to AsyncStorage or a backend.
    console.log({ allergies, healthPriorities, isVegetarian, isVegan });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Allergies (comma-separated):</Text>
      <TextInput
        style={styles.input}
        value={allergies}
        onChangeText={setAllergies}
        placeholder="e.g., peanuts, gluten, dairy"
      />

      <Text style={styles.label}>Health Priorities (comma-separated):</Text>
      <TextInput
        style={styles.input}
        value={healthPriorities}
        onChangeText={setHealthPriorities}
        placeholder="e.g., low sugar, high protein"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Vegetarian</Text>
        <Switch value={isVegetarian} onValueChange={setIsVegetarian} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Vegan</Text>
        <Switch value={isVegan} onValueChange={setIsVegan} />
      </View>

      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default UserProfile;

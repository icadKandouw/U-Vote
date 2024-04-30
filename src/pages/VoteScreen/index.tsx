import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native-animatable';


const VoteScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [numOfCheckboxes, setNumOfCheckboxes] = useState(2); // Default jumlah checkbox

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Fungsi untuk menyesuaikan tinggi header dengan jumlah checkbox
  const calculateHeaderHeight = () => {
    const checkboxHeight = 30; // Tinggi rata-rata satu checkbox
    const headerHeight = 100 + numOfCheckboxes * checkboxHeight; // Tinggi minimum header ditambah tinggi checkbox
    return headerHeight;
  };

  return (
    <View style={[styles.container, { height: calculateHeaderHeight() }]}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image
            source={require('../../assets/icons/backleft.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { textAlign: 'center', color: '#2F86A6' }]}>Unklab Votes</Text>
        
      </View>

      {/* Content */}
      <View style={[styles.content, { backgroundColor: '#fff', alignItems: 'flex-start' }]}>
        {/* Checkbox Options */}
        <Text style={[styles.headerTitle, { color: '#000' }]}>Project or Final Test</Text>
        <Text style={[styles.headerDescription, { color: '#000' }]}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet libero ac felis porta tincidunt. Duis in ex eu est facilisis dictum. Donec nec ultricies eros, id scelerisque urna. Nulla ac dui vestibulum, luctus lorem vitae, pellentesque velit.</Text>

        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleOptionSelect('Project')}
        >
          <View style={[styles.checkboxContainer, selectedOption === 'Project' && styles.checked]}>
            {selectedOption === 'Project' && <Text style={styles.checkboxText}>✓</Text>}
          </View>
          <Text style={{ color: '#000' }}>Project</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleOptionSelect('Final Test')}
        >
          <View style={[styles.checkboxContainer, selectedOption === 'Final Test' && styles.checked]}>
            {selectedOption === 'Final Test' && <Text style={styles.checkboxText}>✓</Text>}
          </View>
          <Text style={{ color: '#000' }}>Final Test</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}   onPress={() => navigation.navigate('SplashSuccess')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e9f3ff',
      flex: 1,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center', // Center the text
      flex: 1, // Take up remaining space
      color: '#2F86A6', // Change text color
    },
    headerDescription: {
      marginBottom: 20,
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius: 8,
      color: '#000', // Change text color
    },
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkboxContainer: {
      width: 20,
      height: 20,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    checked: {
      backgroundColor: '#2F86A6',
    },
    checkboxText: {
      color: '#fff',
    },
    submitButton: {
      backgroundColor: '#161B90',
      width: 200,
      height: 50,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      alignSelf: 'center', // Menempatkan tombol di tengah
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 18,
    },
  });
  

export default VoteScreen;

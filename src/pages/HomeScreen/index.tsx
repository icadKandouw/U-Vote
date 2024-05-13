import React from 'react';
import { firestore } from '../../config';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Animatable.Text animation="fadeIn" style={styles.headerText}>
          Welcome back{' '}
          <Text style={[styles.usernameText, styles.boldText]}>user!</Text>
        </Animatable.Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SeeScreen')}>
            <Text style={styles.buttonText}>See Votes Response</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginLeft: 10 }]}  onPress={() => navigation.navigate('CreateScreen')}>
            <Text style={styles.buttonText}>Create Vote</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Vote 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('VoteScreen')} style={[styles.voteContainer, { backgroundColor: '#fff' }]}>
          <Text style={[styles.voteInfo, { color: '#3379ff', textAlign: 'right' }]}>Expire in: 2 days</Text>
          <Text style={[styles.voteTitle, { color: '#3379ff' }]}>Project or Final Test</Text>
          <Text style={[styles.voteInfo, { color: '#3379ff' }]}>Class: Artificial Intelligence</Text>
          <Text style={[styles.voteInfo, { color: '#3379ff' }]}>Vote Description</Text>
        </TouchableOpacity>

        {/* Vote 2 */}
        <TouchableOpacity style={[styles.voteContainer, { backgroundColor: '#fff' }]}>
          <Text style={[styles.voteInfo, { color: '#3379ff', textAlign: 'right' }]}>Expire in: 3 days</Text>
          <Text style={[styles.voteTitle, { color: '#3379ff' }]}>Project or Final Test</Text>
          <Text style={[styles.voteInfo, { color: '#3379ff' }]}>Class: Mobile Aplication Development</Text>
          <Text style={[styles.voteInfo, { color: '#3379ff' }]}>Vote Description</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f3ff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: 170,
    height: 85,
    backgroundColor: '#2F86A6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  voteContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  voteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  voteInfo: {
    fontSize: 14,
    marginBottom: 3,
  },
  usernameText: {
    color: '#2F86A6',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;

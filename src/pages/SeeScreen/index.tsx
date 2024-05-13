import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const SeeVotesScreen = () => {
  // Dummy data for demonstration
  const voteResults = [
    { id: 1, className: 'Mobile App Developer', votes: 25 },
    { id: 2, className: 'AI', votes: 30 },
    { id: 3, className: 'Computer Programming', votes: 20 },
    // Add more data as needed
  ];

  // Render item function for FlatList
  const renderVoteItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.className}>{item.className}</Text>
      <Text style={styles.votes}>{item.votes} votes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>See Votes</Text>
      <FlatList
        data={voteResults}
        renderItem={renderVoteItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SeeVotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  className: {
    fontSize: 18,
  },
  votes: {
    fontSize: 16,
    color: '#555',
  },
});

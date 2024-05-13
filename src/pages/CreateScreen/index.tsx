import React, {useState} from 'react';
import {firestore} from '../../config';
import {doc, setDoc} from 'firebase/firestore';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  DatePickerAndroid,
} from 'react-native';

const CreateVoteScreen = ({navigation}) => {
  const [voteName, setVoteName] = useState('');
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [expireDate, setExpireDate] = useState('');

  const handleDateSelection = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setExpireDate(selectedDate.toDateString());
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  const handleSubmit = async () => {
    const id = Math.floor(Math.random() * 90000) + 10000;
   await setDoc(doc(firestore, 'votes', id.toString()), {
      voteName,
      className,
      description,
    }).then((res: any)=> {
      console.log(res)
      navigation.navigate('HomeScreen')
    }).catch((err: Error) => {
      console.error(err)
    })

    // Handle form submission here
    console.log('Vote Name:', voteName);
    console.log('Class Name:', className);
    console.log('Description:', description);
    console.log('Expire Date:', expireDate);
    // You can add your logic to send this data to backend or do any other operations
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vote Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setVoteName}
        value={voteName}
        placeholder="Enter vote name"
      />
      <Text style={styles.label}>Class Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setClassName}
        value={className}
        placeholder="Enter class name"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Enter description"
        multiline
      />
      <View style={styles.dateContainer}>
        <Text style={styles.label}>Expire Date:</Text>
        <Text style={styles.dateText} onPress={handleDateSelection}>
          {expireDate || 'Select Date'}
        </Text>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateText: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  },
});

export default CreateVoteScreen;

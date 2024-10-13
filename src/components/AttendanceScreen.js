import React, { useState } from 'react';
import { View, Text, Button, CheckBox, FlatList, StyleSheet } from 'react-native';

const AttendanceScreen = () => {
  const [students, setStudents] = useState([
    { id: '1', name: 'John Doe', present: false },
    { id: '2', name: 'Jane Doe', present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const submitAttendance = () => {
    console.log('Attendance:', students);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentRow}>
            <Text>{item.name}</Text>
            <CheckBox value={item.present} onValueChange={() => toggleAttendance(item.id)} />
          </View>
        )}
      />
      <Button title="Submit Attendance" onPress={submitAttendance} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default AttendanceScreen;

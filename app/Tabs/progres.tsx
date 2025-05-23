import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { resetProgress } from '../../store/progressSlice';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Progress = () => {
  const dispatch = useDispatch();
  const { score, correctAnswers, totalQuestions, totalTopicsRead } = useSelector(
    (state: RootState) => state.progress
  );

  const percentageScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const correctAnswersOutOf10 = Math.min(correctAnswers, 10);

  const handleReset = () => {
    Alert.alert('Reset Progress', 'Apakah kamu yakin ingin mereset semua progress?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: () => dispatch(resetProgress()),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      <View style={styles.card}>
      <Image source={require('../../assets/images/react-logo.png')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.courseTitle}>React Animations</Text>

          <View style={styles.row}>
            <Ionicons name="book-outline" size={20} color="#8E2DE2" />
            <Text style={styles.label}>Materi Dibaca</Text>
            <Text style={styles.value}>{totalTopicsRead}/5</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="checkmark-circle-outline" size={20} color="#4A00E0" />
            <Text style={styles.label}>Quiz Benar</Text>
            <Text style={styles.value}>{correctAnswersOutOf10}/10</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="trophy-outline" size={20} color="#FFD700" />
            <Text style={styles.label}>Skor Total</Text>
            <Text style={styles.value}>{percentageScore}%</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={handleReset} style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#e53935', '#d32f2f']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Reset Progress</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F4F6FC',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 20,
  },
  image: {
    width: 90,
    height: 130,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: '#e0e0e0',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 15,
    color: '#666',
    marginLeft: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Progress;

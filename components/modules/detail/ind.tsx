import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Index: React.FC = () => {
  const materiList = [
    'Pengenalan Animasi di React',
    'Jenis-Jenis Animasi di React Native',
    'Menggunakan API Animated',
    'Teknik Animasi Lanjutan',
    'Praktik Terbaik dan Pertimbangan Kinerja'
  ];

  const handleNavigate = (topic: string) => {
    router.push({
      pathname: '/Materi',
      params: { title: topic },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Topik</Text>
      {materiList.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleNavigate(item)} style={styles.materiItem}>
          <Ionicons name="book-outline" size={20} color="#265e9e" style={styles.icon} />
          <Text style={styles.materiText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#265e9e',
    marginBottom: 20,
  },
  materiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  materiText: {
    fontSize: 15,
    color: '#333',
    flexShrink: 1,
  },
});

export default Index;

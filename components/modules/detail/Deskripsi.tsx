import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const Deskripsi: React.FC = () => {
  const goToTopic = () => {
    router.push('/Materi')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.image} />
      <Text style={styles.title}>React Animations</Text>
      <Text style={styles.description}>
        React Animations adalah salah satu fitur powerful dalam React Native yang memungkinkan pengembang untuk menciptakan antarmuka pengguna yang dinamis dan interaktif. 
        Animasi di React Native dapat meningkatkan pengalaman pengguna dengan memberikan transisi yang halus dan interaktif, 
        yang membantu aplikasi merasa lebih responsif dan hidup. 
      </Text>
      <Text style={styles.subtitle}>Fitur Unggulan:</Text>
      <Text style={styles.feature}>- API Animated yang Fleksibel</Text>
      <Text style={styles.feature}>- Native Driver</Text>
      <Text style={styles.feature}>- Interaktivitas dengan Gestur</Text>
      <Text style={styles.feature}>- Chaining dan Paralel Animasi</Text>
      <Text style={styles.feature}>- Pengaturan Easing yang Menarik</Text>

      <TouchableOpacity style={styles.buttonWrapper} onPress={goToTopic}>
        <LinearGradient colors={['#1a23ab', '#265e9e']} style={styles.button}>
          <Text style={styles.buttonText}>Mulai Belajar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#265e9e',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  feature: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
  },
  buttonWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Deskripsi;

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, updatePhoto } from '../store/profileSlice';
import { RootState } from '../store/store';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function ProfileEdit() {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const [name, setName] = useState(profile.name);
  const [nim, setNim] = useState(profile.nim);
  const [email, setEmail] = useState(profile.email);
  const [photo, setPhoto] = useState(profile.photo);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });
    if (!result.canceled) {
      const newPhotoUri = result.assets[0].uri;
      setPhoto(newPhotoUri);
      dispatch(updatePhoto(newPhotoUri));
    }
  };

  const handleSave = () => {
    dispatch(updateProfile({ name, nim, email, photo }));
    router.back(); 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          <Image
            source={photo ? { uri: photo } : require('../assets/images/Anime_pp.png')}
            style={styles.profileImage}
          />
          <Text style={styles.changePhoto}>Change Photo</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Full Name"
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          value={nim}
          onChangeText={setNim}
          placeholder="NIM"
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          placeholderTextColor="#bbb"
        />
        <LinearGradient
          colors={['#4169E1', '#191970']}
          style={styles.saveButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={styles.saveTouchable} onPress={handleSave}>
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ccc',
  },
  changePhoto: {
    color: '#0066cc',
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
    height: 40,
    color: '#333',
  },
  saveButton: {
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },  
  saveTouchable: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
  },  
  saveText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

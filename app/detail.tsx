import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, FlatList, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { ButtonTabs } from '../components/ButtonTabs';
import Deskripsi from '../components/modules/detail/Deskripsi';
import Index from '../components/modules/detail/ind'; 
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const Detail = () => {
  const [activeTabs, setActiveTabs] = useState('deskripsi');
  const [description, setDescription] = useState('');
  const {id} = useLocalSearchParams();
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  const onGetData = async () => {
        try {
            const response = await axios.get('https://elearning-api-gold.vercel.app/api/kursus');
            (setDescription(response.data.data));
        } catch (error) {
                const message = error?.message || 'Gagal mengambil data';

                ToastAndroid.showWithGravity(
                    message,
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
            }
        }
        
        const UIActiveTabs = () => {
        if (activeTabs == 'deskripsi') return <Deskripsi description={description} />
        if (activeTabs == 'ind') return <Index />
        return <Deskripsi description={description} />
      }

        const onStartCourse = () => {
          router.push('/course');
        };

    useEffect (() => {
        onGetData();
    }, []);

  const handleTabPress = (tab: string, position: number) => {
    setActiveTabs(tab);
    Animated.spring(indicatorPosition, {
      toValue: position,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ButtonTabs
          title="Deskripsi"
          isActive={activeTabs === 'deskripsi'}
          customeStyle={styles.tabButton}
          onPress={() => handleTabPress('deskripsi', 0)}
        />
        <ButtonTabs
          title="Index"
          isActive={activeTabs === 'index'}
          customeStyle={styles.tabButton}
          onPress={() => handleTabPress('index', 1)}
        />
        <Animated.View
          style={[
            styles.indicator,
            {
              left: indicatorPosition.interpolate({
                inputRange: [0, 1],
                outputRange: ['15%', '65%'],
              }),
            },
          ]}
        />
      </View>

      <View style={styles.contentContainer}>
        {activeTabs === 'deskripsi' ? <Deskripsi /> : <Index />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 20,
    width: '90%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: '20%',
    height: 3,
    backgroundColor: '#265e9e',
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    elevation: 4,
  },
});

export default Detail;

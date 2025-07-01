import { FlatList, Text, TextInput, View, StyleSheet, Image, TouchableOpacity, ToastAndroid, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setKursus } from "@/store/kursusSlice";
import { CourseCard } from "@/components/CourseCard";
const Home = () => {
  const dispatch = useDispatch();
  const kursusList = useSelector(state => state.kursus.data);
  const [searchQuery, setSearchQuery] = useState('');
  const onGoToDetail = (itemId: string) => router.push(`/detail?id=${itemId}`);
  const onStartCourse = () => router.push('/Materi');

  const onGetData = async () => {
        try {
            dispatch(setKursus([]))
            const params={
                filter: searchQuery,
            }
            const response = await axios.get('https://elearning-api-gold.vercel.app/api/kursus', 
                { params }
            );
            dispatch(setKursus(response.data.data))
        } catch (error) {
            dispatch(setKursus([]));
            const message = error?.message || 'Gagal mengambil data';
            
            ToastAndroid.showWithGravity(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    }

  useEffect(() => {
    onGetData();
  }, []);

    return (
    <SafeAreaProvider>
      <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Search..."
                    value={searchQuery} 
                    onChangeText={setSearchQuery}
                />
                <View style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        title="Submit"
                        onPress={()=>onGetData()}
                    />
                </View>
            </View>

      <FlatList
        onRefresh={() => onGetData()}
        refreshing={false}
        data={kursusList}
        renderItem={({ item }) => (
          <CourseCard
            category={item.category}
            title={item.title}
            deskription={item.description}
            image={item.img_url}
            tanggal={item.tgl}
            // isComingSoon={item.isComingSoon}
            onGoToDetail={() => onGoToDetail(item._id)}
            onStartCourse={onStartCourse}
          />
        )}
        keyExtractor={item => item._id}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 15,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    grayscaleImage: {
        opacity: 0.5,
    },
    cardInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chip: {
        backgroundColor: '#e6e4e1',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontSize: 12,
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: '#666',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    buttonWrapper: {
        marginRight: 10,
    },
    buttonGradient: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default Home;

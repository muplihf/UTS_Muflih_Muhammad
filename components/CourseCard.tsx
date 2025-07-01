import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button} from "react-native";
import { router } from "expo-router";

interface CourseCardType {
    onGoToDetail?: (value:any) => void;
    onStartCourse?: (value:any) => void;
    title: String;
    deskription: String;
    category: String;
    tanggal: String;
    image: String;
}

export const CourseCard=(props:CourseCardType)=>{
    return (
        <View style={styles.cardContainer}>
            {/* <View key={course.id} style={styles.cardContainer}> */}
                            <Image 
                                source={{ uri: props.image }}
                                style={[styles.image]}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.infoHeader}>
                                    <Text style={styles.chip}>{props.category}</Text>
                                    <Text style={styles.date}>May 2025</Text>
                                </View>
                                <Text style={styles.title}>{props.title}</Text>
                                <Text style={styles.description}>{props.deskription}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={props.onGoToDetail} style={styles.buttonWrapper}>
                                                <LinearGradient
                                                    colors={['#6a1b9a', '#8e24aa']}
                                                    style={styles.buttonGradient}
                                                >
                                                    <Text style={styles.buttonText}>Preview</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={props.onStartCourse} style={styles.buttonWrapper}>
                                                <LinearGradient
                                                    colors={['#1a23ab', '#265e9e']}
                                                    style={styles.buttonGradient}
                                                >
                                                    <Text style={styles.buttonText}>Start</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                </View>
                        </View>
        </View>
    )
}
                                {/* </View> */}
                                {/* <View style={styles.buttonContainer}>
                                    {!course.isComingSoon ? (
                                        <>
                                            <TouchableOpacity onPress={onGoToDetail} style={styles.buttonWrapper}>
                                                <LinearGradient
                                                    colors={['#6a1b9a', '#8e24aa']}
                                                    style={styles.buttonGradient}
                                                >
                                                    <Text style={styles.buttonText}>Preview</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={onStartCourse} style={styles.buttonWrapper}>
                                                <LinearGradient
                                                    colors={['#1a23ab', '#265e9e']}
                                                    style={styles.buttonGradient}
                                                >
                                                    <Text style={styles.buttonText}>Start</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        <View style={styles.buttonWrapper}>
                                            <LinearGradient
                                                colors={['#999999', '#bbbbbb']}
                                                style={styles.buttonGradient}
                                            >
                                                <Text style={styles.buttonText}>Coming Soon</Text>
                                            </LinearGradient>
                                        </View>
                                    )}
                                </View> */}
                            

// const courses = [
//     {
//         id: 1,
//         category: 'React Animations',
//         title: 'React Animations',
//         description:
//             'React Native allows you to create smooth, dynamic user interfaces by utilizing animations, making the app more interactive and engaging.',
//         image: 'https://reactjs.org/logo-og.png',
//         isComingSoon: false,
//     },
//     {
//         id: 2,
//         category: 'Flutter',
//         title: 'Flutter Mastery',
//         description:
//             'Coming Soon: Learn how to build beautiful, high-performance apps with Flutter for both iOS and Android.',
//         image: 'https://reactjs.org/logo-og.png',
//         isComingSoon: true,
//     },
// ];

//     const onGoToDetail = () => router.push('/detail');
//     const onStartCourse = () => router.push('/Materi');
//     export const CourseCard=(props:CourseCardType)=>{
//     return (
//     <View style={styles.container}>
//                     {courses.map((course) => (
//                         <View key={course.id} style={styles.cardContainer}>
//                             <Image 
//                                 source={{ uri: course.isComingSoon ? course.image : 'https://reactjs.org/logo-og.png' }}
//                                 style={[styles.image, course.isComingSoon && styles.grayscaleImage]}
//                             />
//                             <View style={styles.cardInfo}>
//                                 <View style={styles.infoHeader}>
//                                     <Text style={styles.chip}>{course.category}</Text>
//                                     <Text style={styles.date}>May 2025</Text>
//                                 </View>
//                                 <Text style={styles.title}>{course.title}</Text>
//                                 <Text style={styles.description}>{course.description}</Text>
//                                 <View style={styles.buttonContainer}>
//                                     {!course.isComingSoon ? (
//                                         <>
//                                             <TouchableOpacity onPress={onGoToDetail} style={styles.buttonWrapper}>
//                                                 <LinearGradient
//                                                     colors={['#6a1b9a', '#8e24aa']}
//                                                     style={styles.buttonGradient}
//                                                 >
//                                                     <Text style={styles.buttonText}>Preview</Text>
//                                                 </LinearGradient>
//                                             </TouchableOpacity>
//                                             <TouchableOpacity onPress={onStartCourse} style={styles.buttonWrapper}>
//                                                 <LinearGradient
//                                                     colors={['#1a23ab', '#265e9e']}
//                                                     style={styles.buttonGradient}
//                                                 >
//                                                     <Text style={styles.buttonText}>Start</Text>
//                                                 </LinearGradient>
//                                             </TouchableOpacity>
//                                         </>
//                                     ) : (
//                                         <View style={styles.buttonWrapper}>
//                                             <LinearGradient
//                                                 colors={['#999999', '#bbbbbb']}
//                                                 style={styles.buttonGradient}
//                                             >
//                                                 <Text style={styles.buttonText}>Coming Soon</Text>
//                                             </LinearGradient>
//                                         </View>
//                                     )}
//                                 </View>
//                             </View>
//                         </View>
//                     ))}
//                 </View>
//     )
// };

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: '#f0f0f0',
            flex: 1,
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
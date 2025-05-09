import { SafeAreaProvider } from 'react-native-safe-area-context';
import CourseTopic from '../components/modules/course/Topic';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { incrementTotalTopicsRead } from '../store/progressSlice';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

const materiContent = [
  {
    type: 'materi',
    ilustration: 'https://reactjs.org/logo-og.png',
    title: 'Pengenalan Animasi di React',
    value: [
      { id: 1, description: 'Animasi dalam React Native digunakan untuk meningkatkan pengalaman pengguna dengan memberikan transisi visual yang halus.' },
      { id: 2, description: 'React Native menyediakan beberapa cara untuk membuat animasi, termasuk Animated API dan LayoutAnimation.' },
      { id: 3, description: 'Penggunaan animasi dapat memperjelas hubungan antar-elemen UI dan membantu pengguna memahami alur aplikasi.' },
      { id: 4, description: 'React Native menangani animasi dengan menggunakan native driver untuk performa yang lebih baik.' },
      { id: 5, description: 'Dengan memahami dasar animasi, developer dapat membuat aplikasi yang terasa lebih profesional dan menyenangkan.' },
    ],
  },
  {
    type: 'materi',
    ilustration: 'https://reactnative.dev/img/header_logo.svg',
    title: 'Jenis-Jenis Animasi di React Native',
    value: [
      { id: 1, description: 'Animated Timing: digunakan untuk membuat animasi berdasarkan durasi waktu tertentu.' },
      { id: 2, description: 'Animated Spring: digunakan untuk membuat animasi dengan efek pegas atau per bouncing.' },
      { id: 3, description: 'Animated Decay: digunakan untuk animasi yang melambat secara natural hingga berhenti.' },
      { id: 4, description: 'LayoutAnimation: animasi yang diterapkan saat komponen ditambahkan atau dihapus dari layout.' },
      { id: 5, description: 'Reanimated dan Moti: adalah library pihak ketiga yang memberikan kontrol lebih terhadap animasi kompleks.' },
    ],
  },
  {
    type: 'materi',
    ilustration: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Menggunakan API Animated',
    value: [
      { id: 1, description: 'Animated adalah API bawaan di React Native untuk membuat animasi yang halus dan responsif.' },
      { id: 2, description: 'Animated.Value digunakan untuk menyimpan nilai numerik yang akan dianimasikan.' },
      { id: 3, description: 'Animated.timing() digunakan untuk memulai animasi berdasarkan waktu.' },
      { id: 4, description: 'Animated.spring() digunakan untuk animasi pegas dengan parameter seperti friction dan tension.' },
      { id: 5, description: 'Komponen seperti View atau Text dapat dibungkus dengan Animated.View atau Animated.Text agar bisa dianimasikan.' },
    ],
  },
  {
    type: 'materi',
    ilustration: 'https://reactnative.dev/img/oss_logo.png',
    title: 'Teknik Animasi Lanjutan',
    value: [
      { id: 1, description: 'Interpolasi digunakan untuk memetakan satu nilai Animated ke nilai lain, seperti opacity, scale, atau translate.' },
      { id: 2, description: 'Sequence dan parallel memungkinkan penggabungan beberapa animasi yang berjalan secara berurutan atau bersamaan.' },
      { id: 3, description: 'Loop digunakan untuk menjalankan animasi secara berulang tanpa henti.' },
      { id: 4, description: 'Gesture-based animation dapat dibuat dengan menghubungkan Animated dengan PanResponder.' },
      { id: 5, description: 'Dengan teknik lanjutan, kamu bisa membuat animasi kompleks seperti menu geser, parallax effect, dan loader interaktif.' },
    ],
  },
  {
    type: 'materi',
    ilustration: 'https://reactnative.dev/img/favicon.ico',
    title: 'Praktik Terbaik dan Pertimbangan Kinerja',
    value: [
      { id: 1, description: 'Gunakan native driver (`useNativeDriver: true`) untuk meningkatkan performa animasi.' },
      { id: 2, description: 'Hindari terlalu banyak animasi yang berjalan bersamaan karena bisa memperlambat performa aplikasi.' },
      { id: 3, description: 'Optimalkan penggunaan Animated.Value agar tidak menyebabkan re-render yang tidak perlu.' },
      { id: 4, description: 'Gunakan memoization dan batasi area render pada komponen yang memiliki animasi.' },
      { id: 5, description: 'Uji performa animasi di perangkat nyata untuk memastikan pengalaman pengguna tetap lancar.' },
    ],
  },
];

export default function Materi() {
  const { title } = useLocalSearchParams<{ title: string }>();
  const dispatch = useDispatch();

  const startIndex = useMemo(() => {
    return materiContent.findIndex((item) => item.title === title);
  }, [title]);

  const [active, setActive] = useState(startIndex >= 0 ? startIndex : 0);
  const isLastTopic = active === materiContent.length - 1;

  const nextTopic = () => {
    if (active < materiContent.length - 1) {
      setActive((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(incrementTotalTopicsRead());
  }, [active]);

  return (
    <SafeAreaProvider>
      <CourseTopic
        onNextContent={nextTopic}
        topic={materiContent[active].value}
        title={materiContent[active].title}
        isLastTopic={isLastTopic}
      />
    </SafeAreaProvider>
  );
}

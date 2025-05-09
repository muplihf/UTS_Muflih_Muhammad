import { SafeAreaProvider } from 'react-native-safe-area-context';
import CourseQuiz from '../components/modules/course/Quiz';
import { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Added Modal
import { useDispatch } from 'react-redux';
import { incrementCorrectAnswers, incrementTotalQuestions, setScore } from '../store/progressSlice';
import { router } from 'expo-router';

const quizContent = [
  {
    question: 'Apa tujuan utama dari animasi di React Native?',
    options: [
      { value: 1, label: 'Untuk memperbaiki layout aplikasi' },
      { value: 2, label: 'Untuk membuat aplikasi lebih interaktif dan menarik' },
      { value: 3, label: 'Untuk membuat aplikasi lebih cepat' },
      { value: 4, label: 'Untuk menambahkan lebih banyak fungsionalitas pada aplikasi' },
    ],
    answer: 2,
  },
  {
    question: 'Jenis animasi mana yang paling baik digunakan untuk membuat elemen memudar masuk atau keluar?',
    options: [
      { value: 1, label: 'Animasi Slide' },
      { value: 2, label: 'Animasi Skala' },
      { value: 3, label: 'Animasi Rotasi' },
      { value: 4, label: 'Animasi Fade In/Out' },
    ],
    answer: 4,
  },
  {
    question: 'Metode apa yang digunakan untuk membuat transisi yang tepat waktu di React Native?',
    options: [
      { value: 1, label: 'Animated.spring()' },
      { value: 2, label: 'Animated.timing()' },
      { value: 3, label: 'Animated.decay()' },
      { value: 4, label: 'Animated.parallel()' },
    ],
    answer: 2,
  },
  {
    question: 'Apa tujuan dari interpolasi dalam animasi React Native?',
    options: [
      { value: 1, label: 'Untuk memberikan penundaan pada animasi' },
      { value: 2, label: 'Untuk membuat transisi lebih halus dengan memetakan nilai' },
      { value: 3, label: 'Untuk mengontrol kecepatan animasi' },
      { value: 4, label: 'Untuk menjalankan animasi secara paralel' },
    ],
    answer: 2,
  },
  {
    question: 'Pustaka mana yang biasa digunakan untuk animasi berbasis gestur di React Native?',
    options: [
      { value: 1, label: 'React Navigation' },
      { value: 2, label: 'Gesture Handler' },
      { value: 3, label: 'React Native Animations' },
      { value: 4, label: 'React Native Reanimated' },
    ],
    answer: 2,
  },
  {
    question: 'Jenis animasi mana yang TIDAK tersedia di React Native?',
    options: [
      { value: 1, label: 'Animasi Slide' },
      { value: 2, label: 'Animasi Fade' },
      { value: 3, label: 'Animasi Parallax' },
      { value: 4, label: 'Animasi Rotasi' },
    ],
    answer: 3,
  },
  {
    question: 'Bagaimana cara mengoptimalkan kinerja saat bekerja dengan animasi di React Native?',
    options: [
      { value: 1, label: 'Dengan menggunakan native driver' },
      { value: 2, label: 'Dengan meningkatkan durasi animasi' },
      { value: 3, label: 'Dengan menambahkan lebih banyak animasi' },
      { value: 4, label: 'Dengan menonaktifkan re-render' },
    ],
    answer: 1,
  },
  {
    question: 'Apa tujuan dari modul Easing dalam React Native?',
    options: [
      { value: 1, label: 'Untuk membuat transisi waktu' },
      { value: 2, label: 'Untuk mengontrol durasi animasi' },
      { value: 3, label: 'Untuk mengontrol waktu dan kecepatan animasi' },
      { value: 4, label: 'Untuk membuat animasi berbasis pegas' },
    ],
    answer: 3,
  },
  {
    question: 'Teknik animasi mana yang digunakan untuk menganimasikan komponen sepanjang jalur tertentu?',
    options: [
      { value: 1, label: 'Animasi Jalur' },
      { value: 2, label: 'Animasi Gestur' },
      { value: 3, label: 'Animasi Rotasi' },
      { value: 4, label: 'Animasi Fade' },
    ],
    answer: 1,
  },
  {
    question: 'Apa manfaat menggunakan React.memo() untuk komponen animasi?',
    options: [
      { value: 1, label: 'Mempercepat animasi' },
      { value: 2, label: 'Mencegah re-render yang tidak perlu' },
      { value: 3, label: 'Membuat animasi lebih kompleks' },
      { value: 4, label: 'Menyinkronkan animasi' },
    ],
    answer: 2,
  },
];

export default function Soal() {
  const [active, setActive] = useState(0);
  const [score, setScoreState] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Track selected answer
  const dispatch = useDispatch();

  const onAnswer = (isCorrect: boolean, selected: number) => {
    setSelectedAnswer(selected); // Set selected answer
    if (isCorrect) {
      dispatch(incrementCorrectAnswers());
      setScoreState((prev) => prev + 1);
    }

    dispatch(incrementTotalQuestions());

    if (active < quizContent.length - 1) {
      setActive((prev) => prev + 1);
    } else {
      const finalScore = score + (isCorrect ? 1 : 0);
      setFinalScore(finalScore);
      dispatch(setScore(finalScore));
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaProvider>
      <CourseQuiz
        content={quizContent[active]}
        updateProgress={onAnswer}
        isLastQuestion={active === quizContent.length - 1}
        selectedAnswer={selectedAnswer} // Pass selected answer to CourseQuiz
      />

      {/* Custom Modal for Quiz Result */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Quiz Selesai!</Text>
            <Text style={styles.modalText}>Skor akhir kamu: {finalScore} dari {quizContent.length}</Text>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#7A5AFF' }]} // Change to purple color
              onPress={() => {
                setModalVisible(false);
                router.replace("/Tabs/progres");
              }}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  answerButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#ddd', // Default color for the buttons
    alignItems: 'center',
  },
  selectedAnswerButton: {
    backgroundColor: '#7A5AFF', // Color when answer is selected
  },
  nextButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#7A5AFF', // Custom color for the Next Question button
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";

interface CourseQuizProps {
  content: { 
    question: string; 
    options: Array<{ value: number; label: string }>; 
    answer: number;
  };
  updateProgress: (isCorrect: boolean) => void;
  isLastQuestion: boolean;
}

export default function QuizTopic({ content, updateProgress, isLastQuestion }: CourseQuizProps) {
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const router = useRouter();

  const checkAnswer = () => {
    if (userAnswer === null) return;
    const isCorrect = userAnswer === content.answer;
    updateProgress(isCorrect);
    setUserAnswer(null);
    setSelectedIndex(null);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [content]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <ScrollView>
          <Text style={styles.question}>{content.question}</Text>
          {content.options.map((option, index) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.optionButton,
                selectedIndex === index && styles.selectedOption, // Selected answer style
                userAnswer !== null && userAnswer !== option.value && styles.deselectedOption, // Deselect others
              ]}
              onPress={() => {
                setUserAnswer(option.value);
                setSelectedIndex(index);
              }}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          { backgroundColor: userAnswer === null ? "#ccc" : "#7A5AFF" }, // Button color changes to #7A5AFF
        ]}
        disabled={userAnswer === null}
        onPress={checkAnswer}
      >
        <Text style={styles.submitButtonText}>
          {isLastQuestion ? "Submit Quiz" : "Next Question"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 16,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  optionButton: {
    padding: 14,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#7A5AFF", // Selected option color
  },
  deselectedOption: {
    backgroundColor: "#ddd", // Default color for deselected answers
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  submitButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

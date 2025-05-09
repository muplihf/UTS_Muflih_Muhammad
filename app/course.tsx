  import { SafeAreaProvider } from 'react-native-safe-area-context';
  import CourseTopic from '../components/modules/course/Topic';
  import CourseQuiz from '../components/modules/course/Quiz';
  import { useState } from 'react';
  import { Alert } from "react-native";
  import { router } from 'expo-router';

  const courseData = {
    content: [
      {
        type: 'materi',
        ilustration: 'https://reactjs.org/logo-og.png',
        value: [
          { id: 1, description: 'React Native is a framework for building mobile applications using JavaScript and React. It allows developers to create cross-platform mobile apps with a single codebase.' },
          { id: 2, description: 'React Native uses native components, which means it renders components directly using platform-specific APIs, giving it a high performance comparable to native apps.' },
          { id: 3, description: 'React Native allows you to create mobile apps for iOS and Android using the same codebase, reducing development time and effort.' },
          { id: 4, description: 'The core components of React Native include View, Text, Image, ScrollView, TextInput, TouchableOpacity, and more. These components are used to build the UI of the app.' },
          { id: 5, description: 'React Native supports hot reloading, which means changes made to the code can be seen immediately on the mobile device without rebuilding the entire app.' },
        ],
      },
      {
        type: 'materi',
        ilustration: 'https://reactjs.org/logo-og.png',
        value: [
          { id: 1, description: 'The first step to using React Native is to set up the development environment. You need Node.js, npm, and the React Native CLI installed on your machine.' },
          { id: 2, description: 'Once your environment is set up, you can use React Native CLI to initialize a new project by running the command `react-native init ProjectName`.' },
          { id: 3, description: 'React Native uses Expo for simplified development. You can install Expo CLI with `npm install -g expo-cli`, which allows you to quickly run and test your app on your mobile device.' },
          { id: 4, description: 'To test your app, you can use an emulator or physical device. Expo provides a QR code scanner to scan and preview your app directly on your device.' },
          { id: 5, description: 'Setting up your project correctly is crucial. You need to configure platforms like iOS and Android using their respective tools, such as Xcode for iOS and Android Studio for Android.' },
        ],
      },
      {
        type: 'materi',
        ilustration: 'https://reactjs.org/logo-og.png',
        value: [
          { id: 1, description: 'One of the key components of React Native is navigation. It allows you to create an app with multiple screens and enables users to move between them.' },
          { id: 2, description: 'React Navigation is the most widely used navigation library for React Native. It provides various navigators such as stack, tab, and drawer for different navigation patterns.' },
          { id: 3, description: 'A Stack Navigator is used for screen transitions, while a Tab Navigator is for navigation using tabbed icons. A Drawer Navigator provides a slide-in menu for app navigation.' },
          { id: 4, description: 'In React Navigation, you can pass parameters between screens to maintain the state of your app, such as passing user data between the login and profile screens.' },
          { id: 5, description: 'React Navigation supports deep linking, which allows users to navigate directly to a specific screen within your app using URLs or custom schemes.' },
        ],
      },
      {
        type: 'materi',
        ilustration: 'https://reactjs.org/logo-og.png',
        value: [
          { id: 1, description: 'Styling in React Native is done using a similar approach to CSS, but with some differences. React Native uses its own `StyleSheet` API to define styles for components.' },
          { id: 2, description: 'Flexbox is the layout model used in React Native for building responsive designs. It allows components to adjust their sizes and positions based on available space.' },
          { id: 3, description: 'You can style components by using properties such as `flexDirection`, `justifyContent`, `alignItems`, and more to control the layout and positioning of elements.' },
          { id: 4, description: 'React Native supports both absolute and relative positioning of components, giving developers flexibility in laying out their UI according to their design needs.' },
          { id: 5, description: 'React Native also allows the use of external styling libraries, such as styled-components, for managing styles in a more flexible and reusable manner.' },
        ],
      },
      {
        type: 'materi',
        ilustration: 'https://reactjs.org/logo-og.png',
        value: [
          { id: 1, description: 'To make a functional app, you need to manage the app\'s state effectively. React Native uses state management using hooks like `useState`, `useEffect`, and `useContext`.' },
          { id: 2, description: 'State management in React Native can be done locally within components using `useState`, or globally using external state management libraries like Redux.' },
          { id: 3, description: 'The `useEffect` hook is used to handle side-effects in functional components, such as fetching data from an API or handling subscriptions.' },
          { id: 4, description: 'Context API in React Native allows you to share global state across the app, making it easy to manage data like authentication status or user preferences.' },
          { id: 5, description: 'For more complex applications, Redux can be used to manage global state. It uses actions and reducers to update the state based on user interactions or data changes.' },
        ],
      },
      {
        type: 'quiz',
        ilustration: null,
        value: {
          question: 'What is the capital of France?',
          options: [
            { value: 1, label: 'Berlin' },
            { value: 2, label: 'Madrid' },
            { value: 3, label: 'Paris' },
            { value: 4, label: 'Lisbon' },
          ],
          answer: 3,
        },
      },
      {
        type: 'quiz',
        ilustration: null,
        value: {
          question: 'What is the largest planet in our solar system?',
          options: [
            { value: 1, label: 'Earth' },
            { value: 2, label: 'Jupiter' },
            { value: 3, label: 'Mars' },
            { value: 4, label: 'Saturn' },
          ],
          answer: 2,
        },
      },
      {
        type: 'quiz',
        ilustration: null,
        value: {
          question: 'Which planet is known as the Red Planet?',
          options: [
            { value: 1, label: 'Venus' },
            { value: 2, label: 'Earth' },
            { value: 3, label: 'Mars' },
            { value: 4, label: 'Jupiter' },
          ],
          answer: 3,
        },
      },
      {
        type: 'quiz',
        ilustration: null,
        value: {
          question: 'What is the capital of Japan?',
          options: [
            { value: 1, label: 'Beijing' },
            { value: 2, label: 'Seoul' },
            { value: 3, label: 'Tokyo' },
            { value: 4, label: 'Bangkok' },
          ],
          answer: 3,
        },
      },
      {
        type: 'quiz',
        ilustration: null,
        value: {
          question: 'Which of the following is a prime number?',
          options: [
            { value: 1, label: '9' },
            { value: 2, label: '12' },
            { value: 3, label: '17' },
            { value: 4, label: '21' },
          ],
          answer: 3,
        },
      },
    ],
  };

  export default function Course() {
    const [activeContent, setActiveContent] = useState(0);
    const [score, setScore] = useState(0);
    const [completedQuizzes, setCompletedQuizzes] = useState(0);

    const onNextContent = () => {
      if (activeContent < courseData.content.length - 1) {
        setActiveContent(prev => prev + 1);
      } else {
        Alert.alert(
          "Course Completed!",
          `You scored ${score} out of ${completedQuizzes}`,
          [{ text: "OK", onPress: () => router.replace("./(tabs)") }],
          { cancelable: false }
        );
      }
    };

    const updateProgress = (isCorrect: boolean) => {
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
      setCompletedQuizzes(prev => prev + 1);
      onNextContent();
    };

    const CourseController = () => {
      if (courseData.content[activeContent].type === 'materi') {
        return (
          <CourseTopic
            onNextContent={onNextContent}
            topic={courseData.content[activeContent].value}
          />
        );
      }

      if (courseData.content[activeContent].type === 'quiz') {
        return (
          <CourseQuiz
            onNextContent={onNextContent}
            content={courseData.content[activeContent].value}
            updateProgress={updateProgress}
          />
        );
      }
      return null;
    };

    return (
      <SafeAreaProvider>
        <CourseController />
      </SafeAreaProvider>
    );
  }
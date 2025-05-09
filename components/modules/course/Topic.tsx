import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import { router } from 'expo-router';

interface TopicProps {
  onNextContent: () => void;
  topic: Array<{ id: number; description: string }>;
  isLastTopic: boolean;
  title: string;
}

const Topic: React.FC<TopicProps> = ({ onNextContent, topic, isLastTopic, title }) => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const isShowNext = activeTopic === topic.length - 1;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [activeTopic]);

  const onContinue = () => {
    if (!isShowNext) {
      setActiveTopic(prev => prev + 1);
    } else {
      if (isLastTopic) {
        router.push('/Soal');
      } else {
        onNextContent();
        setActiveTopic(0);
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F3F6F9' }}>
      <ScrollView>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.image}
        />

        <View style={styles.indicatorContainer}>
          {[...Array(topic.length)].map((_, index) => (
            <View
              key={index}
              style={[styles.indicator, { backgroundColor: index <= activeTopic ? '#7A5AFF' : '#ddd' }]}
            />
          ))}
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <Animated.View style={{ padding: 15, opacity: fadeAnim }}>
          {topic.map((item, index) => (
            index <= activeTopic && (
              <Text key={item.id} style={styles.courseItem}>{item.description}</Text>
            )
          ))}
        </Animated.View>
      </ScrollView>

      <View style={{ padding: 15 }}>
        <Button
          title={isShowNext ? (isLastTopic ? "Quiz Time" : "Next Topic") : "Tap to Continue"}
          color={isShowNext ? "#7A5AFF" : "#1919FF"}
          onPress={onContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 30,
    height: 5,
    margin: 3,
    borderRadius: 10,
  },
  titleContainer: {
    backgroundColor: '#7A5AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  courseItem: {
    paddingTop: 15,
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});

export default Topic;

import { Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const splashTimer = () => {
    setTimeout(() => {
      router.replace("./Tabs");
    }, 3000);
  };

  useEffect(() => {
    splashTimer();
  }, []);

  return (
    <LinearGradient
      colors={['#4169E1', '#191970']}
      style={styles.container}
    >
      <Text style={styles.textLogo}>Elearning</Text>
      <Text style={styles.textSubLogo}>Belajar Programming Semakin Mudah</Text>
      
      <View style={styles.footer}>
        <Text style={styles.nameText}>Muflih Muhammad Fadhli</Text>
        <Text style={styles.copyRight}>© 2025 All Rights Reserved</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogo: {
    fontSize: 85,
    fontWeight: "900",
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  textSubLogo: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 5,
    maxWidth: "80%",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
    marginBottom: 10,
  },
  copyRight: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
    opacity: 0.7,
  },
});

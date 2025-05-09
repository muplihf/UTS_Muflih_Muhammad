import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      {icon}
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={24} color="#999" />
  </TouchableOpacity>
);

export default function SettingsTab() {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <LinearGradient colors={['#4169E1', '#191970']} style={styles.header}>
          <Image
            source={profile.photo ? { uri: profile.photo } : require('../../assets/images/Anime_pp.png')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.nim}>NIM: {profile.nim}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <LinearGradient
            colors={['#6a1b9a', '#8e24aa']}
            style={styles.editButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity style={styles.editTouchable} onPress={() => router.push('/profile')}>
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>

        <View style={styles.menu}>
          <MenuItem icon={<Feather name="heart" size={22} color="#333" />} label="Favourites" />
          <MenuItem icon={<Feather name="download" size={22} color="#333" />} label="Downloads" />
          <View style={styles.separator} />
          <MenuItem icon={<Feather name="globe" size={22} color="#333" />} label="Language" />
          <MenuItem icon={<Feather name="map-pin" size={22} color="#333" />} label="Location" />
          <MenuItem icon={<Feather name="monitor" size={22} color="#333" />} label="Display" />
          <MenuItem icon={<Feather name="rss" size={22} color="#333" />} label="Feed preference" />
          <MenuItem icon={<Feather name="credit-card" size={22} color="#333" />} label="Subscription" />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAF9',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginTop: 20,
  },
  nim: {
    fontSize: 14,
    color: '#f2f2f2',
    marginTop: 5,
  },
  email: {
    fontSize: 14,
    color: '#f2f2f2',
    marginTop: 5,
  },
  editButton: {
    marginTop: 15,
    backgroundColor: '#9A21EE',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  editTouchable: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  menu: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    borderRadius: 12,
    marginVertical: 6,
    backgroundColor: '#f9f9f9',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 14,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
});

import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData<T>(key: string): Promise<T | undefined> {
  try {
    const raw =
      Platform.OS === 'web' ? await AsyncStorage.getItem(key) : await SecureStore.getItemAsync(key);

    return raw != null ? (JSON.parse(raw) as T) : undefined;
  } catch (err) {
    console.error('Error getting data:', err);
    return undefined;
  }
}

export async function setData<T>(key: string, value: T) {
  try {
    const raw = typeof value === "string" ? value : JSON.stringify(value);
    if (Platform.OS === 'web') {
      await AsyncStorage.setItem(key, raw);
    } else {
      await SecureStore.setItemAsync(key, raw);
    }
  } catch (err) {
    console.error('Error setting data:', err);
  }
}

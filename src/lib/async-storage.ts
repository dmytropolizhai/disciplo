/** @file Wrappers for saving and getting from storage */

import NativeAsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from "expo-secure-store"

import { Platform } from "react-native";

export class AsyncStorage {
  /**
   * Async wrapper to handle saving to storage on web and mobile
   * @param key sets item for
   * @param value specific value for the key
   */
  static async save<V extends string>(key: string, value: V) {
    try {
      if (Platform.OS == 'web') {
        await NativeAsyncStorage.setItem(key, value);
      } else {
        await SecureStore.setItemAsync(key, value);
      }
    } catch (err) {
      console.error('Error saving data: ', err);
    }
  }

  /**
   * Async wrapper to handle loading to storage on web and mobile
   * @param key key to get item
   */
  static async get<T extends string>(key: string) {
    try {
      if (Platform.OS == "web") {
        return await NativeAsyncStorage.getItem(key) as T;
      } else {
        return await SecureStore.getItemAsync(key) as T;
      }
    } catch (err) {
      console.error("Error getting data: ", err);
    }
  }
}

export default AsyncStorage;


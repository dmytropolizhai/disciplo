/** @file Wrappers for saving and getting from storage */

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from "expo-secure-store"

import { Platform } from "react-native";

/**
 * Async wrapper to handle saving to storage on web and mobile
 * @param key sets item for
 * @param value specific value for the key
 */
export async function saveToStorage<V extends string>(key: string, value: V) {
    try {
        if (Platform.OS == "web") {
            await AsyncStorage.setItem(key, value);
        } else {
            await SecureStore.setItemAsync(key, value);
        }
    } catch (err) {
        console.error("Error saving data: ", err);
    }
}

/**
 * Async wrapper to handle loading to storage on web and mobile
 * @param key sets item for
 * @param value specific value for the key
 */
export async function getFromStorage<T extends string>(key: string) {
    try {
        if (Platform.OS == "web") {
            return AsyncStorage.getItem(key) as Promise<T>;
        } else {
            return SecureStore.getItemAsync(key) as Promise<T>;
        }
    } catch (err) {
        console.error("Error getting data: ", err);
    }
}
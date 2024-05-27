import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveData(key, value) {
  const data = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, data);
  } catch (err) {
    console.log("failure", err);
  }
}

export async function loadData(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    return false;
  } catch (err) {
    console.log("Failed to fetch data:", err);
    return [];
  }
}

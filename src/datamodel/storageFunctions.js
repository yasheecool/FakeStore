import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "todoTasks";
export async function saveData(todoArray) {
  const data = JSON.stringify(todoArray);

  try {
    await AsyncStorage.setItem(key, data);
  } catch (err) {
    console.log("failure", err);
  }
}

export async function loadData() {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    return [];
  } catch (err) {
    console.log("Failed to fetch data:", err);
    return [];
  }
}

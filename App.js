import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Alert,
  Button,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  StatusBar as Bar,
  Dimensions,
} from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"))
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>hello react native</Text>
      <TouchableHighlight onPress={() => console.log('tapped')}>
        <Image
          style={styles.image}
          source={{
            width: 400,
            height: 200,
            uri: 'https://loremflickr.com/640/360',
          }}
          fadeDuration={1000}
          blurRadius={2}
          resizeMode="contain"
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 100, backgroundColor: 'tomato' }}
        ></View>
      </TouchableNativeFeedback>
      <Button
        title="Click me"
        onPress={() => Alert.alert("Notification", "Get this notification", [
          { text: "Yes", onPress: () => console.log("YES") },
          { text: "No", onPress: () => console.log("NO") }
        ])}
        // onPress={() =>
        //   Alert.prompt('Notification', 'Get this notification', text  =>
        //     console.log(text)
        //   )
        // }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? Bar.currentHeight : 0,
  },
  text: {
    color: '#f00',
    backgroundColor: '#333',
  },
});

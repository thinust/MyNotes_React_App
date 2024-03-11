import { useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Noteview } from "./noteview";

export function SigninUi({ navigation }) {
  function signIn() {
    const loginDetails = {
      mobile: getMobile,
      password: password,
    };

    fetch("http://192.168.1.30/php_mynotes/signIn.php", {
      method: "POST",
      body: JSON.stringify(loginDetails),
    })
      .then(r)

      .then(q)

      .catch(p);
  }

  function r(response) {
    return response.text();
  }

  function q(text) {
    Alert.alert("Message", text);
    if (text == "Success") {
      navigation.navigate("noteview");
      id = 2;
    }
  }

  function p(error) {
    Alert.alert("Error", error);
  }

  const [getMobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  var id = 1;

  // const ui = (<SafeAreaView></SafeAreaView>);

  if (id == 1) {
    const ui = (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text2}>LogIn My-Notes App</Text>
        <View style={styles.view1}>
          <TextInput style={styles.input1} onChangeText={setMobile} />
          <Text style={styles.text1}>Mobile</Text>
        </View>
        <View style={styles.view1}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={true}
            style={styles.input1}
          />
          <Text style={styles.text1}>Password</Text>
        </View>

        <Pressable style={styles.signupButton}>
          <Text style={styles.btntext} onPress={signIn}>
            SIGN UP
          </Text>
        </Pressable>
        <View style={styles.view2}>
          <Text style={{ color: "white", fontSize: 18 }}>New ? | </Text>
          <Button title="Sign Up" onPress={goTosignup} />
          <Text style={{ color: "white", fontSize: 18 }}>here</Text>
        </View>
      </SafeAreaView>
    );
    return ui;
  } else if (id == 2) {
    const ui = (
      <SafeAreaView style={styles.container}>
        <Noteview />
      </SafeAreaView>
    );
    return ui;
  }

  function goTosignup() {
    
    navigation.navigate("signup");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36393B",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    // flexDirection: "row",
    // alignItems: 'center',
    justifyContent: "center",
  },
  text1: {
    fontSize: 15,
    color: "white",
    marginLeft: 15,
  },
  text2: {
    fontSize: 30,
    color: "white",
    alignSelf: "center",
  },
  input1: {
    height: 45,
    borderWidth: 1,
    width: 200,
    marginTop: 20,
    padding: 5,
    borderColor: "#9D5858",
    borderRadius: 20,
    color: "white",
    fontSize: 15,
  },
  btntext: {
    color: "white",
  },
  signupButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#9D5858",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

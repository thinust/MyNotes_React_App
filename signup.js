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
import DropDownPicker from "react-native-dropdown-picker";

export function SignupUi({ navigation }) {
  function signUp() {
    const loginDetails = {
      mobile: getMobile,
      firsName: getfname,
      lastName: getlname,
      useType: getusertype,
      password: password,
    };

    fetch("http://192.168.1.30/php_mynotes/signUp.php", {
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

    if(text=="Success"){
        navigation.navigate("signin");
    }
    // setResponse(text);
  }

  function p(error) {
    Alert.alert("Error", error);
  }

  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Employee", value: "employee" },
    { label: "Student", value: "student" },
  ]);

  const [getMobile, setMobile] = useState("");
  const [getfname, setfname] = useState("");
  const [getlname, setlname] = useState("");
  const [getusertype, setusertype] = useState("");
  //   const [getpassword, setpassword] = useState("");

  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text2}>SignUp My-Notes App</Text>
      <View style={styles.view1}>
        <TextInput style={styles.input1} onChangeText={setMobile} />
        <Text style={styles.text1}>Mobile</Text>
      </View>
      <View style={styles.view1}>
        <TextInput style={styles.input1} onChangeText={setfname} />
        <Text style={styles.text1}>First Name</Text>
      </View>
      <View style={styles.view1}>
        <TextInput style={styles.input1} onChangeText={setlname} />
        <Text style={styles.text1}>Last Name</Text>
      </View>
      <View style={styles.view1}>
        <DropDownPicker
          onChangeValue={setusertype}
          theme="DARK"
          dropDownDirection="TOP"
          containerStyle={{ width: 200 }}
          style={styles.dropdown1}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Text style={styles.text1}>User Type</Text>
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

      <Pressable style={styles.signupButton} onPress={signUp}>
        <Text style={styles.btntext}>SIGN UP</Text>
      </Pressable>
      <View style={styles.view2}>
        <Text style={{ color: "white", fontSize: 18 }}>Alredy member ? | </Text>
        <Button title="Sign In" onPress={goTosignin} />
        <Text style={{ color: "white", fontSize: 18 }}>here</Text>
      </View>
    </SafeAreaView>
  );
  return ui;

  function goTosignin() {
    navigation.navigate("signin");
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
  dropdown1: {
    height: 50,
    borderWidth: 1,
    width: 200,
    marginTop: 20,
    padding: 5,
    borderColor: "#9D5858",
    borderRadius: 20,
    fontSize: 15,
    backgroundColor: null,
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

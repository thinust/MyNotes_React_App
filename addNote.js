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
import { Noteview } from "./noteview";

export function Addnote({ navigation }) {
  function addnewNote() {
    const noteDetails = {
      title: getTitle,
      category: getcate,
      description: getdesc,
    };

    fetch("http://192.168.1.30/php_mynotes/addNote.php", {
      method: "POST",
      body: JSON.stringify(noteDetails),
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
    }
  }

  function p(error) {
    Alert.alert("Error", error);
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Study", value: "1" },
    { label: "Work", value: "2" },
    { label: "Travel", value: "3" },
  ]);

  const [getTitle, setTitle] = useState("");
  const [getcate, setcate] = useState("");
  const [getdesc, setdesc] = useState("");

  const [password, setPassword] = useState("");
  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text2}>New Note</Text>
      <View style={styles.view1}>
        <Text style={styles.text1}>Title</Text>
        <TextInput style={styles.input1} onChangeText={setTitle} />
      </View>
      <View style={styles.view1}>
        <Text style={styles.text1}>User Type</Text>
        <DropDownPicker
          onChangeValue={setcate}
          theme="DARK"
          dropDownDirection="TOP"
          containerStyle={{ width: 300 }}
          style={styles.dropdown1}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View style={styles.view1}>
        <Text style={styles.text1}>Description</Text>
        <TextInput style={styles.input2} onChangeText={setdesc} />
      </View>

      <Pressable style={styles.addButton} onPress={addnewNote}>
        <Text style={styles.btntext}>Add New Note</Text>
      </Pressable>
    </SafeAreaView>
  );
  return ui;
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
    marginTop: 30,
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
    width: 300,
    padding: 5,
    borderColor: "#9D5858",
    borderRadius: 20,
    color: "white",
    fontSize: 15,
  },
  input2: {
    height: 200,
    borderWidth: 1,
    width: 300,
    padding: 5,
    borderColor: "#9D5858",
    borderRadius: 20,
    color: "white",
    fontSize: 15,
  },
  btntext: {
    color: "white",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    width: 300,
    backgroundColor: "#9D5858",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  dropdown1: {
    height: 50,
    borderWidth: 1,
    width: 300,
    // marginTop: 20,
    padding: 5,
    borderColor: "#9D5858",
    borderRadius: 20,
    fontSize: 15,
    backgroundColor: null,
  },
});

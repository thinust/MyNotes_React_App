import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Noteview({ navigation }) {
  const [getTitle, setTitle] = useState();
  const [getdate, setdate] = useState();
  const [getdesc, setdesc] = useState();
  const [getcat, setcat] = useState();

  {
    fetch("http://192.168.1.30/php_mynotes/notes.php", {
      method: "POST",
    })
      .then(r)

      .then(q)

      .catch(p);
  }

  function r(response) {
    return response.json();
  }

  function q(object) {
    setTitle(object.title);
    setdate(object.datetime);
    setdesc(object.desc);
    setcat(object.category);
    // console.log(object);
  }

  function p(error) {
    Alert.alert("Error", error);
  }

  const ui = (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.addnewbtn} onPress={adnewnote}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./plusicon.png")}
        />
        <Text style={styles.text1}>New Note</Text>
      </Pressable>
      <ScrollView>
        <View style={styles.view1}>
          <Image style={styles.noteimg} source={require("./travel_icon.png")} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", marginTop: 2 }}>
              <Text style={styles.notetitle}>{getTitle}</Text>
              <Text style={styles.notedate}>{getdate}</Text>
            </View>
            <ScrollView>
              <Text style={{ color: "white", width: 200, height: 75 }}>
                {getdesc}
              </Text>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  return ui;

  function adnewnote() {
    navigation.navigate("addNote");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#36393B",
    alignItems: "center",
    // justifyContent: "center",
  },
  text1: {
    color: "#9D5858",
    fontSize: 25,
  },
  addnewbtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -170,
    marginTop: 20,
    marginBottom: 50,
  },
  noteimg: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  view1: {
    borderWidth: 3,
    width: 300,
    height: 100,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "#888888",
    borderLeftColor: "#9D5858",
  },
  notetitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  notedate: {
    fontSize: 10,
    marginLeft: 30,
  },
});

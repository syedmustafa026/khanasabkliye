import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import { auth, signInWithEmailAndPassword, db, getDoc, doc } from "../../config/Firebase";
import { useState } from 'react';
export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  function Signin() {
    
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let { type } = docSnap.data();
          alert("Sign In Successfully!");
          if (type == 'user') {
            setTimeout(() => navigation.navigate('Maps'), 1000);
          } else {
            setTimeout(() => navigation.navigate('Login'), 1000);
          }
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.text}>Add Your details to login</Text>
      <TextInput autoComplete='password-new' placeholder="Enter Your Email" onChangeText={(text) => setEmail(text)} style={styles.input} />
      <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} placeholder="Enter Your Password" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}
          onPress={Signin()}
        >Login</Text>
      </TouchableOpacity>
      <Text style={styles.text, styles.mb_20}>Forget Your Password? </Text>
      <Text style={styles.text}>Dont Have an Account? <Text style={styles.green} onPress={() => navigation.navigate('Signup')}>Signup</Text></Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 10,
    marginBottom: 30
  },
  input: {
    marginBottom: 20,
    height: 50,
    width: 250,
    margin: 12,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 25,
    marginTop: 20
  },
  buttontext: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'monospace'
  },
  green: {
    fontWeight: "bold",
    color: "green"
  },
  mb_20: {
    marginVertical: 20,
  }
});

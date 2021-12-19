import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, TextInputBase, TouchableOpacity, Text, View, Image } from 'react-native';
import Images from '../../../assets/logo.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, setDoc, doc } from "../../config/Firebase";
import { useState } from 'react';
export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <View style={{ display: "flex" }}>
        <Image style={{ width: '100', height: '100' }} source={require('../../../assets/logo.png')} />
      </View>
      <Text style={styles.heading}>Signup</Text>
      <Text style={styles.text}>Add Your details to Signup</Text>
      <TextInput
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
        style={styles.input} />
      <TextInput
        autoComplete='password-new'
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        style={styles.input} />
      <TextInput
        secureTextEntry={true}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}
      onPress={() => navigation.navigate('Login')}
        >Signup</Text>
      </TouchableOpacity>
      <Text style={styles.text, styles.mb_20}>Forget Your Password? </Text>
      <Text style={styles.text}>Already Have an Account? <Text style={styles.green} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
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
// if (email != '' && email != null) {
  //   const validateEmail = email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  //   if (validateEmail) {
  //     if (password != '' && password != null) {
  //       const validatePassword = password.match(/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/);
  //       if (validatePassword) {
  // }
  // }
  // }
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log("user resistered",user)
  //   })
  //   .catch((error) => {
  //     const errorMessage = error.message;
  //   console.log("error agaya",errorMessage)
  //   });

  //   function CreateAccount() {
  // createUserWithEmailAndPassword(auth, email, password)
  //     .then(async (userCredential) => {
  //       const user = userCredential.user;
  //       const uid = user.uid;
  //       await setDoc(doc(db, "users", uid), {
  //         name,
  //         email,
  //         uid,
  //         type: "user"
  //       });
  //       alert("Sign Up Successfully!");
  //       setTimeout(() => navigation.navigate('Login'), 1000);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       alert("Something went wrong! \n" + errorMessage);
  //     });

  //   }

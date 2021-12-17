import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Pressable, Text, View } from 'react-native';

export default function Login ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.text}>Add Your details to login</Text>
      <TextInput autoComplete='password-new' placeholder="Enter Your Email" style={styles.input} />
      <TextInput placeholder="Enter Your Password" style={styles.input} />
      <Pressable style={styles.button} >
        <Text style={styles.buttontext}>Login</Text>
      </Pressable>
      <Text style={styles.text,styles.mb_20} onPress={()=>{navigation.navigate('Forget')}} >Forget Your Password? </Text>
      <Text style={styles.text}>Don't Have an Account?  <Text style={styles.green} onPress={() => navigation.navigate('Signup')}>Signup</Text></Text> 
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
    backgroundColor: "blue",
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
    color: "blue"
  },
  mb_20: {
    marginVertical:20,
  }
});

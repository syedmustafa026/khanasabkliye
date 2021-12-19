import React, { useState, useEffect } from 'react';
import Butn from '../../components/button';
import {
    View,
    ScrollView,
    Text,
    TextInput ,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import {
    auth,
    onAuthStateChanged,
    db,
    collection,
    doc,
    getDoc}
    from '../../config/Firebase'
import logo from '../../../assets/logo.png';

const Application = () => {
    const [uid, setUid] = useState(null);
    const [application, setApplication] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            await setUid(user.uid)
        })

    }, [])
    useEffect(() => {
        if (uid) {
            getApplication()
        }
    }, [uid])
    const getApplication = async () => {
        const docRef = doc(db, "applications", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setApplication(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }
    return (
        <View>
         <Image source={logo} style={styles.logo} />
         <View style={styles.textView}>
           <Text style={styles.text}>Name: {application?.name}</Text>
           <TextInput style={styles.input} placeholder='Enter Name'/>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text}>Father Name: {application?.fatherName}</Text>
           <TextInput style={styles.input}  placeholder='Enter Father Name'/>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text} >CNIC No: {application?.cnic}</Text>
           <TextInput style={styles.input} placeholder='Enter CNIC Number'/>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text} >Number Of Family Members: {application?.members}</Text>
           <TextInput style={styles.input} placeholder='Enter here'/>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text} >Food Requirement: {application?.food}</Text>
           <TextInput style={styles.input} placeholder='Enter here'/>
         </View>
         <Butn touch={()=> navigation.navigate("Form")} title={"Submit form"} />
        </View>
    )
}

const styles = StyleSheet.create({
  textView: {
    justifyContent: 'space-around',
      textAlign: 'center',
      marginBottom: "10px"
  },
  logo: {
    marginTop:60,
    width: 140,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
},
  text: {
    fontWeight: "800",
    fontSize: 16, 
  },
  input:{
    alignItems: "center",
    justifyContent: "center",
    border: 2,
    marginBottom: 12,
    marginLeft: 20
    
  }
})

export default Application;
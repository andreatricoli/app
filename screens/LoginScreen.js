import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking, CheckBox } from 'react-native';

export default function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(

        <View style={styles.content}>    
            <View style={styles.login}>
                <Text style={[styles.txtLogin, {fontSize:30, marginBottom:30}]}>Accedi</Text>
                <Text style={styles.txtLogin}>E-mail</Text>
                <TextInput 
                    placeholder="@"
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    style={styles.txtInputLog}
                    onChangeText={text => setEmail(text)} 
                />         
                <Text style={styles.txtLogin}>Password</Text>
                <TextInput
                    placeholder="******"
                    secureTextEntry={true}
                    textContentType="password"
                    maxLength={20} 
                    style={[styles.txtInputLog, {marginBottom:50}]}
                    onChangeText={text => setPassword(text)} 
                />
                <Button 
                    title="Accedi"
                    onPress= {()=>{

                        postData("https://www.mocky.io/v2/5eb02edc3300006932c68c67", {email: email, password: password}).then(
                            data => console.log(data)
                        );


                    }}
                    color="#342ecd"
                />
                <Text 
                    onPress={ ()=> Linking.openURL('https://google.com') }
                    style={[styles.txtLogin, {marginTop:20, textAlign:"center", fontSize:16}]}
                >
                    Ho dimenticato la password
                </Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex:1,
        backgroundColor:"white",
    },

    login:{  
        padding:30,
        flex:1,
        alignSelf:'stretch'
    },

    txtLogin:{
        fontSize:12,
        color: "#578ad6",
        
    },

    row:{
        flexDirection:'row',
    },

    wrap: {
        flexWrap: 'wrap'
    },

    txtInputLog:{
        borderBottomWidth: 1,
        fontSize:16,
        borderBottomColor:"#578ad6",
        marginBottom:20,
        color:"black"
    },

  });

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
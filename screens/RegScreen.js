import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, CheckBox } from 'react-native';

export default function RegForm(){

    const [privacy, setPrivacy] = useState(false);

    return(

        <View style={styles.content}>    
            <View style={styles.register}>
                <Text style={[styles.txtReg, {fontSize:30, marginBottom:30}]}>Entra a far parte di progetto X!</Text>
                <Text style={styles.txtReg}>E-mail</Text>
                <TextInput 
                    placeholder="@"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    style={styles.txtInputReg} 
                />
                <Text style={styles.txtReg}>Nome</Text>
                <TextInput
                    placeholder="Mario"
                    textContentType="name"
                    autoCapitalize="words" 
                    style={styles.txtInputReg} 
                />
                <Text style={styles.txtReg}>Cognome</Text>
                <TextInput
                    placeholder="Rossi"
                    textContentType="familyName"
                    autoCapitalize="words" 
                    style={styles.txtInputReg} 
                />
                <Text style={styles.txtReg}>Username</Text>
                <TextInput 
                    placeholder="mario.rossi"
                    textContentType="username"
                    style={styles.txtInputReg} 
                />
                <Text style={styles.txtReg}>Password</Text>
                <TextInput 
                    placeholder="******"
                    textContentType="newPassword"
                    secureTextEntry={true}
                    style={styles.txtInputReg} 
                />
                <Text style={styles.txtReg}>Conferma password</Text>
                <TextInput 
                    placeholder="******"
                    textContentType="password"
                    secureTextEntry={true}
                    style={styles.txtInputReg} 
                />
                <View style={[styles.row, styles.checkbox]}>
                    <CheckBox label="Privacy Checkbox"
                        value={privacy}
                        onValueChange={setPrivacy}/>
                    <Text style={[styles.txtReg, {flex:1, marginLeft:10}]}>Accetto il trattamento dei dati in base alla normativa sulla privacy</Text>
                </View>
                <Button 
                    title="Registrati"
                    onPress= {()=>{}}
                    color="#342ecd"
                />
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

    register:{  
        padding:30,
        flex:2,
        alignSelf:'stretch'
    },

    txtReg:{
        fontSize:12,
        color: "#578ad6"
    },

    row:{
        flexDirection:'row',
    },

    wrap: {
        flexWrap: 'wrap'
    },

    checkbox:{
        marginBottom:30
    },

    txtInputReg:{
        borderBottomWidth: 1,
        borderBottomColor:"#578ad6",
        marginBottom:20,
        color:"black",
        fontSize:16,
    },

  });
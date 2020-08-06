import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button,Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Entrar({route,navigation}){

    [getEmail,setEmail] = useState();
    [getSenha,setSenha] = useState();

    [getAlterar,setAlterar] = useState();
 
  
    function inserirDados(){

        if(getSenha && getEmail != 0){

        axios.post('http://professornilson.com/testeservico/login',{
         email:getEmail,
         senha:getSenha, 
        }
        )
        .then(function (response) {
            setNome('')
            setTelefone('')
            setCpf('')
            showMessage({
                message: "Registro cadastrado com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
          console.log(error);
        });

        navigation.navigate('Home');
        } else {
            showMessage({
                message: "Preencha todos os campos",
                backgroundColor: "red",
                type: "info",
              });
        }

    }

 

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

          

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          <Image
            source={{ uri: 'https://pt.seaicons.com/wp-content/uploads/2015/11/Mobile-Smartphone-icon.png' }}
            style={{ width: 200, height: 200 }}
          />

          <FlashMessage position="top" /> 

            <ScrollView >

            <Text style={styles.titulo}>Login</Text>
            <TextInput
            style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setEmail(text)}
            value={getEmail}
            /> 

            <Text style={styles.titulo}>Senha</Text>
            <TextInput
            style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSenha(text)}
            value={getSenha}
            />        
 

            <Text></Text>

            
            <Button style={{paddingTop:20}}
            title="Entrar"
            linearGradientProps={{
              colors: ['#00bfff','#00bfff', '#00bfff'],
              }}
            style={styles.botao}
            onPress={() => inserirDados()}
            />    

            <Text></Text>

            <Button
                title="Não tem cadastro?"
                type="clear"
                onPress={()=>navigation.navigate('Login')}
            />
        

             
             </ScrollView>                  
        </View>
    )
}

const styles = StyleSheet.create({

    botao:{
      paddingTop:20,
      width:300
    },
    botaoExcluir:{
        paddingTop:20,
        width:300,
        
      },
  
    titulo:{
      paddingTop:20,
      fontSize:18
    },
  
    Screen:{
      paddingTop:20,
      fontSize:28
    }
  
  })

  
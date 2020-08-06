import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button,Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";


export default function Login({route,navigation}){

    [getEmailCadastro,setEmailCadastro] = useState();
    [getSenhaCadastro,setSenhaCadastro] = useState();
    
    [getAlterar,setAlterar] = useState();


 
  
    async function inserirDados(){

        if(getSenha && getEmail != 0){

        await axios.post('http://professornilson.com/testeservico/usuarios',{
         email:getEmailCadastro,
         senha:getSenhaCadastro,  
        }
        )
        .then(function (response) {
            setEmail('')
            setSenha('')
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

        navigation.navigate('Entrar');

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

        <FlashMessage position="top" /> 

        <Header
             leftComponent={
            <Button  
            title="< Voltar"
            onPress={()=>navigation.navigate('Entrar')}
            ></Button>}
            centerComponent={{ text: 'Tela de Cadastro de Usuario', style: { color: '#fff' } }}
        />

          

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          
            <ScrollView >

            <Text style={styles.titulo}>Email</Text>
            <TextInput
            style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setEmailCadastro(text)}
            value={getEmailCadastro}
            /> 

            <Text style={styles.titulo}>Senha</Text>
            <TextInput
            style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSenhaCadastro(text)}
            value={getSenhaCadastro}
            />        
 

            <Text></Text>

            
            <Button style={{paddingTop:20}}
            title="Cadastrar"
            linearGradientProps={{
              colors: ['#00bfff','#00bfff', '#00bfff'],
              }}
            style={styles.botao}
            onPress={() => inserirDados()}
            />    

            <Text></Text>

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
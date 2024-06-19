import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';
import Icon from 'react-native-vector-icons/FontAwesome';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleLogin = () => {
    if (name === '' || email === '') {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
   
    
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome Back👋</Text>
      <Text style={styles.loginText}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignItems: 'center'}}> 

      <View style={{flex: 1, height: 1, backgroundColor: '#AFB0B6'}} /> 
      <View> <Text style={{width: 99, textAlign: 'center', fontSize: 13, color: '#AFB0B6'}}>or continue with</Text> </View>
      <View style={{flex: 1, height: 1, backgroundColor: '#AFB0B6'}} />

  </View>
      
      
      <View style={styles.socialContainer}>
        <TouchableOpacity> 
          <Text  style={styles.icon}  >
          <Icon  name="apple" size={20} color="black"  />
          </Text>
          </TouchableOpacity>

        <TouchableOpacity>
          <Text  style={styles.icon}  >
          <Icon  name="google" size={30} color="#fff"  />
          </Text>
          </TouchableOpacity>
        <TouchableOpacity>
          <Text  style={styles.icon1}  >
          <Icon  name="facebook" size={20} color="#fff"   />
          </Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Haven't an account? Register</Text>
      </TouchableOpacity>
    </View>

    

    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text1: {
    fontSize: 30,
    color: '#356899',
    top: -190,
    right: 142,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 10,
    top: -190,
    right: 90,
    fontWeight: 'bold'
  },
  loginText: {
    fontSize: 16,
    marginBottom: 20,
    top: -190,
    right: 90,
    color: '#AFB0B6'
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    top: -150,
  },
  button: {
    backgroundColor: '#356899',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width:'100%',
    top: -150,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
    padding: 10,
    
  },
  socialContainer1: {
    flexDirection: 'row',
   justifyContent: 'center',
  },

  text2: {
    fontSize: 20,
    color: '#AFB0B6',
    top: -50,
  },
 line: {
    backgroundColor: '#AFB0B6',
   top: -50,
   paddingVertical:10,
   paddingTop:-2,
   marginHorizontal:10 ,
   alignItems: 'center'
  },
  icon:{
   width: 20,
   alignItems: 'center',
   
  },
  icon1:{
    backgroundColor:'#356899',
    width: 20,
    alignItems: 'center',
    
   },

});

export default LoginScreen;

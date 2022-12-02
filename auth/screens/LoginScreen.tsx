import { StatusBar, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { BetochLogo, BetochTitle, Container, FormAreaView, InnerContainer, LeftIcon, SubTitle } from '../components/styles'
import { Formik } from 'formik'

const LoginScreen = () => {
  return (
    <Container>
      <StatusBar style="dark"/>
      <InnerContainer>
        <BetochLogo resizeMode="cover"
         source={require('/home/tinsae/Desktop/Betoch/assets/lellibella.jpg')}/>        
        <BetochTitle>Cushite Betoch</BetochTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues={{email:'',password:''}}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {
            ({handleChange,handleBlur,handleSubmit,values}) =>( <FormAreaView>
              <Input />
            </FormAreaView>)
          }

        </Formik>
      </InnerContainer>
    </Container>
    
  )
}

const Input = () => {

  return (
    <View>
      <LeftIcon />
    </View>
  )
}

export default LoginScreen

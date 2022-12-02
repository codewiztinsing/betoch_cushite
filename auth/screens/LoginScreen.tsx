import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react'
import { BetochLogo, BetochTitle, ButtonText, Colors, Container, FormAreaView, InnerContainer, LeftIcon, RightIcon, StyledButton, StyledInputLabel, StyledTextInput, SubTitle } from '../components/styles'
import { Formik } from 'formik'
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../src/componets/Buttons';

const LoginScreen = () => {
  const [hidePassword,setHidePassword] = useState(true);
  return (
    <Container>
      <StatusBar style="dark" />
      <InnerContainer>
        <BetochLogo resizeMode="cover"
          source={require('/home/tinsae/Desktop/Betoch/assets/lellibella.jpg')} />
        <BetochTitle>Cushite Betoch</BetochTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {
            ({ handleChange, handleBlur, handleSubmit, values }) => (<FormAreaView>
              <Input label="Email"
                icon="email"
                placeholder="ourgroupemail@gmail.com"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />


              <Input label="Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword={hidePassword}
                setHidePassword= {setHidePassword}
              />

              <StyledButton onPress = {handleSubmit}>
                <ButtonText>
                  Login
                </ButtonText>
              </StyledButton>

            </FormAreaView>)
          }
        </Formik>
      </InnerContainer>
    </Container>

  )
}

const Input = ({ label, icon,isPassword,hidePassword,setHidePassword, ...props }) => {
 

  
  return (
    <ScrollView>
      <LeftIcon>
        <Entypo name={icon} size={30} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {
        isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Entypo name = {hidePassword ? 'eye-with-line':'eye'} size={30} />
          </RightIcon>
        )
      }
    </ScrollView>
  )
}




export default LoginScreen

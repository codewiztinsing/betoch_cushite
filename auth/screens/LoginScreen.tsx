import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react'
import { 
  BetochLogo,
   BetochTitle,
    ButtonText,
     Colors,
      Container,
       ExtraText,
       ExtraView,
       FormAreaView,
        InnerContainer, 
        LeftIcon,
         Line,
          MsgBox,
           RightIcon,
            StyledButton, 
            StyledInputLabel,
             StyledTextInput,
              SubTitle, 
              TextLink,
              TextLinkContent} from '../components/styles'
import { Formik } from 'formik'
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../src/componets/Buttons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [hidePassword,setHidePassword] = useState(true);
  const navigation = useNavigation()

  return (
    <Container>
      <StatusBar style="dark" />
      <InnerContainer>
        {/* <BetochLogo resizeMode="cover"
          source={require('/home/tinsae/Desktop/Betoch/assets/lellibella.jpg')} /> */}
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
            <MsgBox>...</MsgBox>
              <StyledButton onPress = {() => navigation.navigate("Home")}>

                <ButtonText>
                  Login
                </ButtonText>
              </StyledButton>  
              <Line/>

              <StyledButton social={true} onPress={handleSubmit}>
                <AntDesign name='google' size={22} />
                <ButtonText social={true}>
                  Signin with Google
                </ButtonText>
              </StyledButton>  
              <ExtraView>
                <ExtraText>Don't hava an account ?
                  <TextLink onPress={() => navigation.navigate("Register")}>
                    <TextLinkContent>Signin here</TextLinkContent>
                  </TextLink>
                </ExtraText>
              </ExtraView>
              <Line />
              <Line />
              <Line />
              <Line />
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

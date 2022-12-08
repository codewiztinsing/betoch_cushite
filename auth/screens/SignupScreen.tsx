import { ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
  TextLinkContent
} from '../components/styles'
import { Formik } from 'formik'
import { ScrollView, } from 'react-native-gesture-handler';
import Button from '../../src/componets/Buttons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import KeyboardAvoidingViewWrapper from '../components/KeyboardAvoidingView';

//API client

import axios from 'axios';


const SignupScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  // date picker related setters and getters
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1))


  // messaging related setters and getters
  const [message, setMessage] = useState("idiots");
  const [messageType, setmessageType] = useState()

//handleDebug
const handleDebug = (values) => {
  const url = 'http://localhost:8000/api/auth/register'
 axios.post(url,values)
 .then((response) => {
  console.log("Debug",response)
 })
 .catch((error) => {
   console.error(error)
 })
  
}
  // handle register
  const handleRegister = (crendentials,setSubmitting) => {

    const url = "http://localhost:8000/api/auth/register";
    axios.post(url, crendentials)
      .then((response) => {
        const { message, status, _doc } = response;
        console.log(message)
        if (status != 'success') {
          handleMessage(message, status)
        
        } else {
          navigation.navigate("Login", { ..._doc })
         
        }
        setSubmitting(false)
      })
      .catch(error => {
        handleMessage("An error occured please check your internet connection")
      })
  }
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessage(messageType)
  }

  const navigation = useNavigation()

  // actual date of birth
  const [dob, setDob] = useState()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate)
    setDob(currentDate)
  }

  const showDatePicker = () => {
    setShow(true)
  }

  return (
    <KeyboardAvoidingViewWrapper>
      <Container>
        <InnerContainer>

          <SubTitle>Create an account</SubTitle>
          {
            show &&

            <DateTimePicker
              testID='datetimepicker'
              value={date}
              mode='date'
              is24Hour={true}
              display='default'
              onChange={onChange}
            />}
          <Formik initialValues={{ 
            username: '', 
            email: '',
             dateOfBirth: '',
              password: '',
               confrimPassword: '' 
              }}
            onSubmit={
              (values,{setSubmitting})=> handleDebug(values)//handleRegister(values,setSubmitting)
            }
          
          >
            {
              ({ values,handleChange, handleBlur, handleSubmit,isSubmitting }) => (<FormAreaView>
                <Input 
                  label="User name"
                  icon="user"
                  placeholder="Operah Winfery"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />


                <Input 
                  label="Email"
                  icon="email"
                  placeholder="ourgroupemail@gmail.com"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />



                <Input 
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}

                />


                <Input 
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * *"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />


                <Input 
                  label="Confrim Password"
                  icon="lock"
                  placeholder="* * * * * * *"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("confrimPassword")}
                  onBlur={handleBlur("confrimPassword")}
                  value={values.confrimPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && <StyledButton onPress={handleSubmit}>

                  <ButtonText>
                    Register
                  </ButtonText>
                </StyledButton>
                }

                {isSubmitting && <StyledButton disabled={true}>

                  <ActivityIndicator size="large" color={Colors.primary} />
                </StyledButton>
                }
              


                <ExtraView>
                  <ExtraText>Already have an account  ?
                    <TextLink onPress = {() => navigation.navigate("Login")}>
                      <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                  </ExtraText>
                </ExtraView>

              </FormAreaView>)
            }
          </Formik>
        </InnerContainer>
      </Container>
    </KeyboardAvoidingViewWrapper>

  )
}

const Input = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props }) => {



  return (
    <ScrollView>
      <LeftIcon>
        <Entypo name={icon} size={20} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && <TouchableOpacity onPress={showDatePicker}>
        <StyledTextInput {...props} />
      </TouchableOpacity>}

      {
        isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={30} />
          </RightIcon>
        )
      }
    </ScrollView>
  )
}




export default SignupScreen

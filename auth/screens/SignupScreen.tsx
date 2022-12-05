import { StatusBar, StyleSheet, Text,TouchableOpacity, View } from 'react-native'
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
import { ScrollView, } from 'react-native-gesture-handler';
import Button from '../../src/componets/Buttons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'


const SignupScreen = () => {
  const [hidePassword,setHidePassword] = useState(true);
  const [show,setShow] = useState(false);
  const [date,setDate] = useState(new Date(2000,0,1));
  const navigation = useNavigation()

  // actual date of birth
  const [dob,setDob] = useState()

  const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate)
    setDob(currentDate)
  }

  const showDatePicker = () => {
    setShow(true)
  }

  return (
    <Container>
      <StatusBar style="dark" />
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
        <Formik initialValues={{ username:'',email: '',dateOfBirth:'', password: '',confrimPassword:'' }}
          onSubmit={(values) => console.log(values)}
        >
          {
            ({ handleChange, handleBlur, handleSubmit, values }) => (<FormAreaView>       
              <Input label="User name"
                icon="user"
                placeholder="Operah Winfery"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />


              <Input label="Email"
                icon="email"
                placeholder="ourgroupemail@gmail.com"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />



              <Input label="Date of Birth"
                icon="calendar"
                placeholder="YYYY-MM-DD"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={dob ? dob.toDateString():''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
          
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


              <Input label="Confrim Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("confrimPassword")}
                onBlur={handleBlur("confrimPassword")}
                value={values.confrimPassword}
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword={hidePassword}
                setHidePassword= {setHidePassword}
              />
            <MsgBox>...</MsgBox>
              <StyledButton onPress = {() => navigation.navigate("Home")}>

                <ButtonText>
                  Register
                </ButtonText>
              </StyledButton>  
              <Line/>

          
              <ExtraView>
                <ExtraText>Already have an account  ?
                  <TextLink onPress={() => navigation.navigate("Login")}>
                    <TextLinkContent>Login</TextLinkContent>
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
        <Entypo name={icon} size={30} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} /> }
      {isDate && <TouchableOpacity onPress={showDatePicker}>
        <StyledTextInput {...props} />
      </TouchableOpacity> }
      
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




export default SignupScreen

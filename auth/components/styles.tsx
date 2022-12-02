import { StatusBar, View,ScrollView,Text,Image ,TextInput,TouchableOpacity} from 'react-native';
import styled from 'styled-components';



const  statusBarHeight = 10

//color

export const Colors = {
    primary:'#ffffff',
    secondary:'#E5E7EB',
    tertiary:'#1F2937',
    darklight:'#9CA3AF',
    brand:'#6D28D9',
    green:'#10B981',
    red:'#EF4444'
}

const {primary,secondary,tertiary,brand,darklight,green,red} = Colors;

export const Container = styled.ScrollView`
flex:1;
padding:25px;
padding-top:20px;
background-color:${primary};
`
export const InnerContainer = styled.View`
flex:1;
width:100%;
align-items:center;
`


export const BetochLogo = styled.Image`
width:250px;
height:100px;
`


export const BetochTitle = styled.Text`
font-size:30px;
text-align:center;
font-weight:bold;
color:${brand};
padding:10px
`


export const SubTitle = styled.Text`
font-size:18px;
margin-top:20px;
letter-spacing:1px;
font-weight:bold
color:${tertiary}
`


export const FormAreaView = styled.View`
width:90%;
`


export const StyledTextInput = styled.TextInput`
background-color:${secondary};
padding:15px;
padding-left:55px;
border-radius:5px;
font-size:16px;
height:60px;
margin-vertical:3px;
margin-bottom:10px;
color:${tertiary}

`

export const StyledInputLabel = styled.Text`
text-align:left;
font-size:13px;
color:${tertiary}
`

export const LeftIcon = styled.View`
z-index:1;
position:absolute;
left:15px;
top:38px;
`


export const RightIcon = styled.TouchableOpacity`
z-index:1;
position:absolute;
right:15px;
top:38px;
`

export const StyledButton = styled.TouchableOpacity`
padding:15px;
background-color:${brand};
justify-contetn:center;
align-items:center;
border-radius:5px;
margin-vertical:5px;
height:60px;
`

export const ButtonText = styled.Text`
color:${primary};
font-size:16px;
`

export const MsgBox = styled.Text`
text-align:center;
font-size:13px;
`

export const Line = styled.View`
height:1px;
widht:100%;
background-color:${darklight};
margin-vertical:10px;
`
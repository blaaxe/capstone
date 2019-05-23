import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View  } from 'react-native';
import { Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Left,
  Right,
  Text,
  Fab,
  Icon,
  Button} from 'native-base';
import Reactotron from 'reactotron-react-native'
import StepIndicator from 'react-native-step-indicator';

const PureSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [test, setTest] = useState(false);

  const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 15,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#004A94',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#004A94',
    stepStrokeUnFinishedColor: '#004A94',
    separatorFinishedColor: '#004A94',
    separatorUnFinishedColor: '#004A94',
    stepIndicatorFinishedColor: '#004A94',
    stepIndicatorUnFinishedColor: '#0575E6',
    stepIndicatorCurrentColor: '#004A94',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
  }

  Reactotron.log('hello rendering world')

  function handleEmailChange(e) {
    const {name} = e.target;
    setEmail(name);
  }

  function handlePasswordChange(e) {
    const {name} = e.target;
    setPassword(name);
  }

  function handleVerifyPasswordChange(e) {
    const {name} = e.target;
    setVerifyPassword(name);
  }

  return (
    <Container style={styles.container}>
    <Header transparent>
          <Left>
            <Button transparent onPress={() => props.navigation.navigate('LoginPage')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Right>
              <Text style={{color: "#ffffff"}}>CGU</Text>
          </Right>
        </Header>
      <Content>
        <Text style={styles.logo}>AYUDIAB</Text>
        <StepIndicator
          stepCount={4}
          customStyles={customStyles}
          currentPosition={0}
        />
        <Form style={styles.form}>
          <Text style={styles.text}>Register</Text>

          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Email</Label>
            <Input style={styles.textWhite} />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Password</Label>
            <Input secureTextEntry={true} style={styles.textWhite} />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Password</Label>
            <Input secureTextEntry={true} style={styles.textWhite} />
          </Item>
        </Form>
      </Content>
      <Fab
        containerStyle={{ }}
        style={{ backgroundColor: "#ffffff" }}
        onPress={() => props.navigation.navigate('SignupStepTwo')}>
         <Text style={{color: "#000"}}> {'\>'} </Text>
      </Fab>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0575E6"
  },
  logo: {
    marginLeft: 95,
    marginTop:  60,
    fontFamily: 'HelveticaNeueCondensedBlack',
    fontSize: 65,
    opacity: 0.9,
    letterSpacing: -1,
    color: "#ffffff",
  },
  form:{
    marginTop: 50,
  },
  input: {
    width: 250,
    left: 50
  },
  textWhite: {
    color: "#ffffff",
  },
  login: {
    left: 135,
    marginTop: 50
  },
  text: {
    fontSize: 30,
    marginLeft: 60,
    color: "#ffffff",
    fontFamily: 'HelveticaNeueLight',
  },
});

export const Signup = (PureSignup);

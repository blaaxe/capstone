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
  Picker,
  Text,
  Fab,
  Icon,
  Button} from 'native-base';
import Reactotron from 'reactotron-react-native'
import StepIndicator from 'react-native-step-indicator';

const PureSignupEmergency = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [years, setYears] = useState(0);
  const [diabetType, setDiabeteType] = useState(undefined);
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

  return (
    <Container style={styles.container}>
    <Header transparent>
          <Left>
            <Button transparent onPress={() => props.navigation.navigate('SignupStepThree')}>
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
          currentPosition={3}
        />
        <Form style={styles.form}>
          <Text style={styles.text}>Emergency Contact</Text>

          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Lastname</Label>
            <Input style={styles.textWhite} />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Firstname</Label>
            <Input style={styles.textWhite} />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Phone</Label>
            <Input style={styles.textWhite} />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Relationship</Label>
            <Input style={styles.textWhite} />
          </Item>
        </Form>
      </Content>
      <Fab
        containerStyle={{ }}
        style={{ backgroundColor: "#ffffff" }}
        onPress={() => props.navigation.navigate('Home')}>
        <Icon type="MaterialIcons" name="navigate-next" style={{fontSize: 50, color: '#004A94'}}/>
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
  picker: {
    width: 250,
    left: 65,
    marginTop: 20
  },
  textWhite: {
    color: "#ffffff",
  },
  login: {
    left: 135,
    marginTop: 50
  },
  loginText: {
    fontSize: 30,
    color: "#ffffff",
    fontFamily: 'HelveticaNeueCondensedBlack',
  },
  signup: {
    left: 105,
    marginTop: 50
  },
  signupText: {
    fontSize: 20,
    color: "#004A94",
    fontFamily: 'HelveticaNeueCondensedBlack',
  },
  text: {
    fontSize: 30,
    marginLeft: 60,
    color: "#ffffff",
    fontFamily: 'HelveticaNeueLight',
  },
});

export const SignupEmergency = (PureSignupEmergency);

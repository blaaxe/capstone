import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Button} from 'native-base';
  import Reactotron from 'reactotron-react-native'

console.disableYellowBox = true;

const PureSignin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [test, setTest] = useState(false);

  Reactotron.log(props);

  function handleEmailChange(e) {
    const {name} = e.target;
    setEmail(name);
  }

  function handlePasswordChange(e) {
    const {name} = e.target;
    setPassword(name);
  }

  return (
    <Container style={styles.container}>
          <ImageBackground source={require('./login_background.png')}
 style={{flex: 1, width: '100%', height: '100%'}}>
      <Content>
        <Text style={styles.logo}>AYUDIAB</Text>
        <Text style={styles.hello}>
          Hello,{'\n'}
          Log in to your account
        </Text>
        <Form style={styles.form}>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Email</Label>
            <Input style={styles.textWhite} />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.textWhite}>Password</Label>
            <Input secureTextEntry={true} style={styles.textWhite} />
          </Item>
            <Button transparent style={styles.login}
                    onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.loginText}>Log In</Text>
            </Button>
            <Button transparent light style={styles.signup}
                                  onPress={() => props.navigation.navigate('SignupStepOne')}>
              <Text style={styles.signupText}>Create account</Text>
            </Button>
        </Form>
      </Content>
      </ImageBackground>
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
  hello: {
    fontFamily: 'HelveticaNeueCondensedBlack',
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 25
  },
  form: {
    marginTop: 20,
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
  wave: {
    //backgroundImage: "url(wave.svg) repeat-x",
    position: "absolute",
    top: 522,
    width: 6400,
    height: 198,
  }
});

export const Signin = (PureSignin);

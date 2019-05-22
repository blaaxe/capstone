import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View  } from 'react-native';
import {CurrentUserManager} from "../../manager/CurrentUserManager";
import {compose} from 'redux';
import { Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Fab,
  Icon,
  Button} from 'native-base';
import Reactotron from 'reactotron-react-native'

const PureSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [test, setTest] = useState(false);

  Reactotron.log('hello rendering world')

  useEffect(() =>  {
    //tokenManager.deleteToken();
    //currentUserManager.deleteCurrentUser();
  }, []);

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
      <Content>
        <Text style={styles.logo}>AYUDIAB</Text>
        <Form style={styles.form}>
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

        {
          test === true && <Text>Test onPress</Text>
        }
      </Content>
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
    opacity: 0.6,
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

export const Signup = (PureSignup);

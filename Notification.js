import React, { Component } from 'react';
import { ScrollView, StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import {Searchbar} from 'react-native-paper';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Notifications extends Component {

  constructor(props) {

    super(props);


  }

  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (

      <View style={styles.MainContainer}>

            <View style={styles.date}>
                <View>
                    <Text style={styles.chevrons}> {'\<'} </Text>
                </View>
                <View>
                    <Text style={styles.date_text}> Thursday, 23 May 2019 </Text>
                </View>
                <View>
                    <Text style={styles.chevrons}>{'\>'} </Text>
                </View>
            </View>
            <Searchbar
              style={{marginLeft: 60, marginRight: 60, marginTop: 20}}
              placeholder="Search"
              onChangeText={query => { this.setState({ firstQuery: query }); }}
              value={firstQuery}
            />
            <ScrollView style={{ marginTop: 10}}>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 7mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>8:45 pm</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 7.7mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>8:25 pm</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 9.2mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>7:57 pm</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 5.7mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>7:03 pm</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 5.5mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>5:21 pm</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 8.2mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>2:07 pm</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', borderWidth: 1, borderRadius: 4, borderColor: '#dddddd', marginLeft: 20, marginRight: 20}}>

                    <View style={{flex: 3, alignItems: 'flex-end'}}>

                        <Image
                          style={{width: 138, height: 105, marginLeft: 20}}
                          source={require('./freestylepatch.jpg')}
                        />
                    </View>
                    <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black'}}>Glucose Level</Text>
                        <Text style={{marginLeft: 12, marginTop: 5, color: 'black'}}>Your Glucose Level is 5.3mg/L</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 2, marginLeft: 10}}>
                                <Text>11:44 am</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <Image
                                  style={{width: 20, height: 20, marginRight: 5}}
                                  source={require('./add.png')}
                                />
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
  }
}

export default Notifications;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#FFF'

  },
  chevrons: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
  date_text: {
    fontSize: 15,
    color: '#000'
  },
  date: {
   fontSize: 25,
    flexDirection: 'row',
       textAlign: "center",
     alignItems: 'center',
    justifyContent: 'center'
  },

});

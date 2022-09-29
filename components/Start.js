import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';


export default class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '#B9C6AE',
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground source={require('../assets/Background-Image.png')} style={styles.image}>
          <View style={{ height: '44%', paddingTop: '20%', }}>
            <Text style={styles.title}>Chat App</Text>
          </View>

          <View style={[styles.box1]}>
            <TextInput
              style={{ height: 60, width: '88%', borderColor: 'gray', borderWidth: 2, padding: 10, borderRadius: 2 }}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder='Your Name'
            />
            <View style={[styles.colorWrapper]}>
              <Text style={[styles.text, styles.label]}>Choose Background Color:</Text>
              <View style={styles.colors}>
                {/* A wrapper for making views respond properly to touches. */}
                <TouchableOpacity
                  style={[styles.color, styles.firstColor]}
                  onPress={() => this.setState({ color: '#090C08' })}
                  accessible={true}
                  accessibilityLabel="color option: black"
                  accessibilityHint="Let's you choose this color to be the background color of your chat screen"
                  accessibilityRole="button"
                />
                <TouchableOpacity
                  style={[styles.color, styles.secondColor]}
                  onPress={() => this.setState({ color: '#474056' })}
                  accessible={true}
                  accessibilityLabel="color option: purple"
                  accessibilityHint="Let's you choose this color to be the background color of your chat screen"
                  accessibilityRole="button"
                />
                <TouchableOpacity
                  style={[styles.color, styles.thirdColor]}
                  onPress={() => this.setState({ color: '#8A95A5' })}
                  accessible={true}
                  accessibilityLabel="color option: blue"
                  accessibilityHint="Let's you choose this color to be the background color of your chat screen"
                  accessibilityRole="button"
                />
                <TouchableOpacity
                  style={[styles.color, styles.forthColor]}
                  onPress={() => this.setState({ color: '#B9C6AE' })}
                  accessible={true}
                  accessibilityLabel="color option: green (default)"
                  accessibilityHint="Let's you choose this color to be the background color of your chat screen"
                  accessibilityRole="button"
                />

              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color })
                }
                accessible={true}
                accessibilityRole="button" >
                <Text style={styles.buttonText}>Start Chatting</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  box1: {
    flex: 50,
    width: '88%',
    height: '44%',
    backgroundColor: '#FFFFFF',
    marginBottom: '10%',
    paddingTop: '6%',
    paddingBottom: '6%',
    alignItems: 'center',
  },
  colorWrapper: {
    width: '88%',
    height: '40%',
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: '50%',
  },
  colors: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 5,
  },
  color: {
    borderRadius: '50%',
    width: 50,
    height: 50,
    marginRight: 30,
  },
  firstColor: {
    backgroundColor: '#090C08',
  },
  secondColor: {
    backgroundColor: '#474056',
  },
  thirdColor: {
    backgroundColor: '#8A95A5',
  },
  forthColor: {
    backgroundColor: '#B9C6AE',
  },
  buttonWrapper: {
    width: '88%',
    flex: 1,
    justifyContent: 'end',
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: '#757083',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
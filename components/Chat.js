import React from 'react';
import {
  View, Text, StyleSheet, Platform, KeyboardAvoidingView
} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [
        // Every message must have Id, createdAt, and user object
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
        },
      ],
    })
  }

  //This function is called when a user sends a message
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  // The renderBubble prop allows you to alter how message bubbles are displayed
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  render() {
    let { color } = this.props.route.params;

    return (
      <View style={[styles.container, { backgroundColor: color }]} >
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}

        />
        {/* Prevent Keyboard from overlaping text input on older Andriod models */}
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
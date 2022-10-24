# Chat App

![Chat app](assets/chat-app.jpg)

## Description
This is a native mobile app built using React Native that allows users to enter a chat room, then send messages, images, and their location.

## Objective

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their
location.

## Tech used  
- React Native
- Expo App
- An Iphone device

## User Stories

1. As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
2. As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
3. As a user, I want to send images to my friends to show them what I’m currently doing.
4. As a user, I want to share my location with my friends to show them where I am
5. As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
6. As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface

### Challenges faced during development
* Visualizing the App on Expo wasn't possible with recent versions of Firebase, so had to degrade to a version below 8.

* The React Native Button component only supports a minimal level of customization. To customize buttons, use Pressable or Touchable components.

* I couldn't find enough enough examples cases for Gifted Chat props to apply all features i would have love to.

* I had issues with the Firebase Security Rules for Cloud Storage when trying to upload images to firebase storage and had to resort to documentation. This wasn't explained in the CF course. (See documentation for more details - https://firebase.google.com/docs/storage/security)

* The expo-permissions library used by CF is depreated. Should use expo-media-library instead in future projects, see this documentation: https://docs.expo.dev/versions/latest/sdk/media-library/

## Development Process

### Setup Expo as Development Environment

1. Install Expo CLI

```
npm install expo-cli --global
```

2. Create a new expo project

```
npx create-expo-app [project-name]
```

3. Navigate to the project

```
cd [project-name]
```

4. Start expo project

```
npm start or expo start
```

### Install React Navigation library to navigate between screens

1. Navigate to project folder and run

```
npm install react-navigation
```

2. Install necessary dependencies

```
npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### Set up Android Studio as Android Emulator
1. Download Android Studio
2. Make sure 'Android Virtual Device' is installed
3. Check that 'Android SDK Build-Tools' is installed under SDK Manager/SDK Tools
4. Depending on your device CPU, check if necessary components are installed
5. Create virtual device (via more actions > Virtual Device Manager) and click play to start
6. Select 'Run app on Android' in Expo to run app on virtual device
7. Press Command + Shift + R to start a screen recording.

### Integreat Gifted Chat library to create chat UI
1. Install Gifted Chat
```bash
npm install react-native-gifted-chat
```

2. Integrate Gifted Chat into application
```bash
import { GiftedChat } from 'react-native-gifted-chat';
```
3. Follow instructions to set up chat: https://github.com/FaridSafi/react-native-gifted-chat 
### Set up Cloud Firestore as data storage platform
1. Install Firestore via Firebase
```bash
npm install firebase
```
2. Import Firestore in application (e.g, in Chat.js)
```bash
import firebase from 'firebase';
import 'firebase/firestore';
```
3. Register App in Firebase settings
4. Copy config code to application
5. Initialize app
```bash
// Initialize Firebase
if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
// Initialize Cloud Firestore and get a reference to the service
this.referenceCollection = firebase.firestore().collection("collectionName");
```
6. Set up anonymous authentication in firebase console
### Set up Async Storage for offline functionalities
1. Install package
```bash
expo install @react-native-community/async-storage
```
2. Import AsyncStorage into app
```bash
import AsyncStorage from '@react-native-community/async-storage';
```
3. Store and retrieve state from Async Storage
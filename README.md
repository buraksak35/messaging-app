# Messaging App

### These can also be added

- Now nicknames are not unique so two user can take same nickname and if user log out and login again with same nickname, previous messages will not belong to him/her. It can be updated with minor changes.

### How can you start the app?

- run `npm install`
- run `cd ios && pod install`
- run `cd .. && npm run launch-ios` and app will run on IOS emulator (iPhone 6), if you want, you can use any simulator with `react-native run-ios --simulator="iPhone X`.

### Others

- if you get error like "SDK location not found" in android, you should add .local.properties file to your project and put "sdk.dir = /Users/USERNAME/Library/Android/sdk" to this file. source : https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found
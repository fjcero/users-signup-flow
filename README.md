# Upstack

## Requirements

Create a simple app with the following features:

1. Register with a username and email _ONLY_
2. After registration, send a verification link to the user’s mail address.
   a. Mark user as verified only after the link is clicked.

To send verification links use this mailbox:

> **Note**: PLEASE NOTE THAT THIS MAILBOX IS FOR SENDING NOT RECEIVING

```
zonamailbox@gmail.com
Password: Bb123456!
Recovery Email (in case you try to log in and cannot): oran@upstack.co
```

- This is a backend challenge, so I don’t really care about the frontend. However, a 5 line HTML would be nice, just to have something to work with.
- You are free and even encouraged to use Google, or any other resource for this challenge. However you should NOT consult any person.
- You can login to the provided email account, if you need to.
- If you need to go get water or use the toilet it is completely fine as well.
- For any question you have I’m here.
- If you need some extra time it’s OK, just make sure to zip and send the source code with clear instructions on how to run it.
- If you tend to sing or make weird noises while developing, it’s cool, but please mute your mic while you do that.
- Keep it simple.
- Copy this text, it’ll get lost if the call disconnects.

## Instructions

To get all running:

```
nvm use (optional, node version use 10)
yarn install
yarn start
```

You can use Insomnia collection placed on `/docs/`

## Endpoints

### User signup

> **POST** /users/signup

```
{ username: 'test', email: 'test@test.com' }
```

### User verification

> **GET** /users/verify/{code}

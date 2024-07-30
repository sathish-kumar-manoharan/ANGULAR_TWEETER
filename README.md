# Tweeter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Pre-requisite

Please make sure the `proxy.config.json` file has the right server URL for the tweeter rest service including the port number sicne this parameter helps us to talk to the web service from the local machine.

## Overview of the application
This is a twitter inspired application just for developed for coding exercise. Please feel free to have a look at this and share your thoughts for any improvements. I have come up with a very basic UI work flow that is good enough to get us keep moving. This document will explain the work flow that I have developed for tweeter app.

The screenshot for the tweeter app looks like below,

![alt text](/screenshots/AgnularUI.PNG "Tweeter App")

## User creation

The first and foremost thing is to create an user to do some operations related to users. We can create an user by passing in the user info and click `create User` button on the very top of the app just like shown below,

![alt text](/screenshots/createUser.PNG "create User feature")

## User look-up

User look up will be the first thing since we don’t have a login page in this application. In order to view the user's info, messages, follower’s info, following info & most popular follower details.

The user's profile info pops up after entering the `username` and click `Search User` button which is shown below,

![alt text](/screenshots/lookupUser.PNG "lookup User feature")

## Post Messages

Now that we have grabbed a user's profile. we can now go ahead post messages for him. so please go ahead and try typing in a message and click `post` as shown below. we should be seeing a successful/failure message posted up on service call.

we can also view the messages that are posted by the `searched user` under messages tab. so please click on messages tab to see all the messages that the user posted and the messages posted by `his/her followers as well`.

The `latest messages are shown first`. Hence the user gets to see always the latest messages in the top of the list.

![alt text](/screenshots/postAndGetMessage.PNG "User's message feature")

## following

A screenshot is shown below for following users. By clicking on following tab, you get to see the following user's Info listed.

![alt text](/screenshots/following.PNG "following user's feature")

## followers

A screenshot is shown below for followers. By clicking on follower tab, you get to see the follower user's Info listed.

![alt text](/screenshots/followers.PNG "followers feature")

## users Paired with their most popular follower

This tab is going to display the list of users who are paired with `their most popular follower`.
If we want to find the most popular follower for a particular user, then we determine which follower has the maximum number of followers.

![alt text](/screenshots/usersPairedWithPopular.PNG "followers feature")


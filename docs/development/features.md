---
id: features
title: Features
sidebar_label: Features
---

Features mainly describe what services we provide to `HackaTalk` users. We generally provide **one-to-one** as well as **group** chats. We like to provide and try out things that can be done modern chat app.

## Creating Channel

<img src="images/create-channel.png" width="200"/>

Creating `channel` is like creating `chatroom`. If the user creates the channel selecting others users whom user wants to invite to chat, this will also be a `private` channel as well as `1-1 chat`. We have another channel type `public` and this is used for public messaging. To create a `public` channel, user will type on the `name` of channel and get unique id for the `channel`. Then the user can invite other users to the `public` channel. To list of the senario there are 3 types in general.

<br/>

```graphql
createChannel(channel: ChannelCreateInput): Channel
```

1. 1-1 private chat
   * User select one user when creating `Channel`.
2. M-M private chat
   * User create channel with multiple users.
     > Note that the private channel will not be created again if the same list of users already exists in the `Channel`.
3. M-M public chat
   * User create channel with only the name of channel.
     > Note that this can be duplicated (name, list of users ...).

<br/>

When `User` creates `Channel`, he or she will create `Membership`. This will manage the `role` of each user in the `Channel` as well as `alertMode`. The `alertMode` allows you to `mute` specific channel or change the sound mode to `vibrate`. Their relationship as in [RDBMS](https://techterms.com/definition/rdbms) looks like below.

<img src="images/channel-membership-user-rds.png" width="400"/>
<br/>

### Updating or deleting Channel

Only the `Role` with the `owner` can update the channels. We follow the [soft delete](https://guides.cfwheels.org/docs/soft-delete) senario for main models which are `User` and `Channel`. Other sub models that can be refered as `cascade` will not follow the `soft deletion`.

<br/>

## Adding friends to your chat app

`HacakTalk` allows users to search all users who've signed up.

<img src="images/search-users.png" width="200"/>

From above screen which is `SearchUser`, you can add user to the friend list or chat directly.

## Start messaging

<img src="images/chat.png" width="200"/>

When user tries to chat to new user and the `Channel` doesn't exists, it will automatically creates one internally. This flow follows [Creating channel](#creating-channel) flow described above.

Currently we provide 3 types of messages.
1. Text
2. Photo
3. File
---
layout: post
title: iOS Slide menu
---

So, I've worked in a couple of projects which have had side menus, and even though they are falling out of use and being changed to TabBar (like Instagram, LinkedIn, Facebook, Twitter, etc.) many people are still designing apps with side menus, many times just to match it's Android counterparts to keep the same "experience".

## Libraries

There are libraries that already give you a side menu, but why overload your project with third party libraries when it's something really simple that you can do yourself? It will give you more control and understanding of what goes on in your app. And leave the 3rd party **[pods | carts | packages]** for the important stuff, like Alamofire, or SDKs from Google, Facebook, etc.

## Implementing

This is in no way a tutorial, this is me sharing my code and opinions.

I created a project based on a tutorial by Ray Wenderlich, if you have not seen it, go ahead you can find it by clicking: [How to Create Your Own Slide-Out Navigation Panel in Swift](https://www.raywenderlich.com/177353/create-slide-navigation-panel-swift).

However, in my Github you will find that I created a project based on the one created there with some differences. If you are interested you can find it here: [edc0der/EMSlideMenu](https://github.com/edc0der/EMSlideMenu). 

The README file explains the differences and the reasons for the most important adjustments, such as constraining movements in order to prevent weird user experience where exposing the right side will display the left side menu (and viceversa), and also to prevent the pan gesture movement to expose beyond the width of the side menu.

## That's it

Go ahead and check the code, download/clone it, fork it, create an issue so you can share with me ways I can improve it, either in functionality, performance and code clarity.

Sharing is good, code reviews even better, it makes us all better coders.


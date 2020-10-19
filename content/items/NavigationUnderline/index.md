---
posttype: 'product'
slug: navigation-underline
title: Navigation Underline
date: 2019-06-19
id: 001
guid: 26fea416-8835-4907-a4d1-94e8cb2ed647
price: 5
image: ./desert.jpg
description: Animate your Squarespace Navigation bar links! Available for both Squarespace 7.0 & 7.1 official templates.

video: ./NavigationUnderlineSquarepatch.mp4
---
## version - 7.0
```css
@spcolor3: #333; //change me! (replace #fff with #888 or any color hex)
@width: 100%; //change me! (any percentage)

#topNav a::after {
  content: '';
  display: block;
  position: absolute;
  width: @width;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: @spcolor3;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.2s ease-in-out 0s;
}

#topNav a:hover::after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
```
## version - 7.1
```css
@spcolor3: #333; //change me! (replace #333 with #fff or any color hex)
@width: 100%; //change me! (any percentage)

.header-nav-list a::after {
  content: '';
  display: block;
  height: 1px;
  width: @width;
  bottom: 0;
  left: 0;
  background-color: @spcolor3;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.2s ease-in-out 0s;
}

.header-nav-list a:hover::after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
```
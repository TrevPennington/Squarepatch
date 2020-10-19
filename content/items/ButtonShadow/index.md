---
posttype: 'product'
slug: button-shadow
title: Button Shadow
date: 2020-03-23
id: 014
guid: 4636a76e-319c-4b83-ae43-4f47a1e1c27d
price: 5
image: ./mongoose.jpg
description: Button shadow for all Squarespace buttons (small, medium, large). Customize the shadow color to anything you'd like and customize the button color like normal in the Squarespace style editor! Available for both Squarespace 7.0 & 7.1 official templates.

video: ./ButtonShadowSquarepatch.mp4

---
## - version 7.0 & 7.1
```css
@spcolor1: #FFDFD3; //change me! any hex or rgb color will do. leave the semi colon!

.sqs-block-button-element {
  box-shadow: 10px 15px @spcolor1;
  transition: all 0.3s !important;
}

.sqs-block-button-element:hover {
  box-shadow: 5px 10px @spcolor1;
  opacity: 1!important;
  transition: all 0.3s !important;
  color: @spcolor1!important;
}
```
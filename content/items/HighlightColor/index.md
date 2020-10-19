---
posttype: 'product'
slug: highlight-color
title: Highlight Color
date: 2020-03-19
id: 015
guid: 75cd2675-446f-4738-bf14-7db4cf8cb31e
price: 5
image: ./mongoose.jpg
description: Change the highlight color of all text on your website to match your brand's theme. Any hex color will work! Available for both Squarespace 7.0 & 7.1 official templates.

video: ./HighlightColorSquarepatch.mp4

---
## - version 7.0 & 7.1
```css
@highlightColor: #ffdb58; //change this hex to anything you'd like. Keep the semi colon afterwards.

h1::selection, h2::selection, h3::selection, h4::selection, p::selection, a::selection { 
    background-color: @highlightColor; 
}
```
---
posttype: 'product'
slug: modern-links
title: Modern Links
date: 2020-03-30
id: 020
guid: 51d90bc9-30ea-4256-87f1-f26f72b64ab7
price: 0
image: ./mongoose.jpg
description: Change all links within text on your website to underlines and animate up on hover. Change the color to match your brand's theme. Any hex color will work! Available for both Squarespace 7.0 & 7.1 official templates.

video: ./LinkHoverSquarepatch.mp4

---
#For both 7.0 & 7.1 templates
<br />
@color: #FFA500; //change this hex to anything you'd like. Keep the semi colon at the end.

\#page p > a {
      transition: box-shadow .5s ;
    box-shadow: inset 0 -7px 0 0 @color;
}

\#page p > a:hover {
  box-shadow: inset 0 -40px 0 0 @color;
  transition: box-shadow .2s cubic-bezier(1,.05,.75,.25);
}
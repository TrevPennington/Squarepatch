---
posttype: 'product'
slug: polaroid-blog
title: Polaroid Blog
date: 2020-03-19
id: 011
guid: df9963c7-cf57-4685-87c8-20a395c54302
price: 5
image: ./mongoose.jpg
description: Polaroid style for blog collections. Customize the background color to anything you'd like! Available for both Squarespace 7.0 & 7.1 official templates. Summary layout > grid style for best performance.

video: ./slowPolaroid.mp4

---
## version - 7.0
```css
@color: rgba(250,235,215,0.4); //change the rgba value!

.summary-item {
    background-color: @color;
    padding: 20px;
    transition-duration: .3s;
  }
  
  .summary-content .summary-title {
    text-align: center;
  }
  
  .summary-item > .summary-content {
    text-align: center;
  }
  
  .summary-item:hover {
    box-shadow: 1px 1px 30px rgba(0,0,0,0.1);
    transform: scale(1.02);
    transition-duration: .3s;
  }
```
## version - 7.1
```css
@spcolor4: rgba(250,235,215,0.4); //change the rgba value!

.blog-item {
  background-color: @spcolor4;
  padding: 20px;
  transition-duration: .3s;
}

.blog-content .summary-title {
  text-align: center;
}

.blog-item > .summary-content {
  text-align: center;
}

.blog-item:hover {
  box-shadow: 1px 1px 30px rgba(0,0,0,0.1);
  transform: scale(1.02)!important;
  transition-duration: .3s;
}
```
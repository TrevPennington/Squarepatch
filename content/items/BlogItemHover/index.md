---
posttype: 'product'
slug: blog-item-hover
title: Blog Item Hover
date: 2019-06-19
id: 002
guid: 7ca321c1-0b05-4b93-9174-86420529983e
price: 5
image: ./image1.jpg
description: Interactive scale for blog items on hover. Available for both Squarespace 7.0 & 7.1 official templates.

video: ./BlogScale.mp4
---
## - version 7.0
```css
.summary-item:hover {
    transform: scale(1.01);
    transition-duration: 0.2s;
}

.summary-item {
  transition-duration: 0.2s;
}
```

## - version 7.0
```css
.blog-item:hover {
  transform: scale(1.01)!important;
  transition-duration: 0.2s;
}

.blog-item {
transition-duration: 0.2s;
}
```
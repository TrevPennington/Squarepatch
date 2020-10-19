---
posttype: 'product'
slug: blog-image-hover
title: Blog Image Hover
date: 2019-06-19
id: 003
guid: 4b0dc149-3f9e-4693-b8d3-4314ce42fe71
price: 5
image: ./mongoose.jpg
description: Interactive scale for blog images on hover. Available for both Squarespace 7.0 & 7.1 official templates.

video: ./blogImageHover.mp4

---
## - version 7.0
```css
.summary-thumbnail-image:hover {
  transform: scale(1.02);
  transition: transform .2s cubic-bezier(.235,0,.05,.1)!important;
}

.summary-thumbnail-image {
  transition: transform .2s cubic-bezier(.235,0,.05,.1)!important;
}
```

## - version 7.0
```css
.blog-item .image:hover {
  transform: scale(1.02);
  transition: transform .2s cubic-bezier(.235,0,.05,.1)!important;
}

.blog-item .image {
  transition: transform .2s cubic-bezier(.235,0,.05,.1)!important;
}
```
---
posttype: 'product'
slug: newsletter-pill
title: Newsletter Pill
date: 2019-06-19
id: 006
guid: 99ab02a0-26a8-4f6e-8372-6f4006264b44
price: 5
image: ./mongoose.jpg
description: Modern rounded border newsletter signup option. Available for Squarespace 7.0 official templates only.

video: ./newsletter.mp4

---
## version - 7.0 & 7.1
```css
.newsletter-block .newsletter-form-field-element {
  border: none;
  border: 2px solid black;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-bottom: 14px;
}

.newsletter-block .newsletter-form-button-wrapper {
  border: none;
}

body:not(.button-style-default).button-style-outline .newsletter-block .newsletter-form-button {
  margin-left: -12px;
  border-top-right-radius: 20px;border-bottom-right-radius: 20px;
  padding-top: 16px;
  border-left: none!important;
}
```
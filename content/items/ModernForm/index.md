---
posttype: 'product'
slug: modern-form
title: Modern Form
date: 2019-06-19
id: 004
guid: 186b704d-1ca1-4a7b-9299-e3191772599d
price: 5
image: ./mongoose.jpg
description: Modern styling and interactive hover for user-built Squarespace forms. Available for both Squarespace 7.0 & 7.1 official templates.

video: ./minimalForm.mp4

---
## version - 7.0 & 7.1
```css
.form-block {
  background-color: transparent;
}

.form-wrapper .field-list .field .field-element {
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 27px!important;

  
  text-align: left;
  height: 30px;
  padding: 8px;
  padding-left: 11px;
  padding-bottom: 8px;
  margin-top: 9px;
  
}

.form-item {
  text-align: left;
  padding-bottom: 20px;
}

.form-wrapper .field-list .field .field-element:focus {
  background: white;
  border: 1px solid #dcdcdc;
  border-radius: 27px;
}

.form-wrapper .field-list .field .field-element:hover {
  background: white;
  border: 1px solid #dcdcdc;
  border-radius: 27px;
}

#page .form-wrapper input[type="submit"] {
    -moz-border-radius: 27px!important;
    border-radius: 27px!important;
    text-shadow: none;
    background: #f5f5f5;
    border: 2px solid #f5f5f5!important;
    padding: 5px 20px;
    box-shadow: none;
  	color: black;
}


body:not(.button-style-default).button-corner-style-square .sqs-editable-button, body:not(.button-style-default).button-corner-style-square .sqs-editable-button-shape {
  	border: 2px solid #f5f5f5!important;
    border-radius: 27px!important;
  	background-color: #f5f5f5!important;
  	color: black;
}

body:not(.button-style-default).button-style-outline .sqs-editable-button:hover, body:not(.button-style-default).button-style-outline .sqs-editable-button-color:hover {
    border: 2px solid #f5f5f5;
  	border-radius: 27px;
    background-color: white!important;
    color: black;
}


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none!important;
  -webkit-text-fill-color: #333!important;
  -webkit-box-shadow: 0 0 0px 1000px #f5f5f5 inset!important;
}
```
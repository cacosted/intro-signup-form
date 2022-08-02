# Frontend Mentor - Intro component with sign up form solution
![Demo screenshot](https://user-images.githubusercontent.com/57645180/182428793-3f661005-07c5-45c9-927f-0762074346cd.png)

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Links

- Live Site URL: [Live Demo](https://cacosted.github.io/intro-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- BEM convention
- Media Queries
- JavaScript ES6+
- Mobile-first workflow
- DOM

### What I learned
This challenge was a good place to practice how to handle a form.

In order to place the error icon on top of the form I used a cool trick, I wrapped the `input` and the icon image with a `label` tag, and then I positioned the icon with `position: absolute`

```html
  <label for="input" class="wrapper">
      <input id="input" class="input" type="text" placeholder="Input..."/>
      <img class="icon" src="./icon.svg" alt="icon" />
  </label>
```
```css
  .wrapper {
    position: relative;
  }
  
  .input {
    padding: 1.5em 2em;
    border-radius: 5px;
  }

  .icon {
    position: absolute;
    right: 0;
  }
```

I learned how to place the error signs on the form in every input, independently, I created this function:

```js
const handleErrorOnEmpty = (inputs) => {
  const containers = document.querySelectorAll('.intro__inputContainer')
  const helperText = document.querySelectorAll('.intro__helper')

  inputs.forEach(input => {
    if(isEmpty(input)){
      // Add error logic
    }
    else {
      // Remove error logic
    }
  })
}
``` 
I want it to push forward this challenge giving a post-submit feedback to the user, the way that I did it was this:

```js
//If the form was send successfully then it shows the thanks div 
const sendForm = () => {
  const thanksTitle = document.createElement('div')
  
  thanksTitle.classList.add('intro__thanks')
  
  thanksTitle.innerHTML = `Div content`
  
  form.innerHTML = ''
  
  form.append(thanksTitle)
}
```

### Useful resources

- [MDN web docs](https://developer.mozilla.org/en-US/) - This is a great source of knowledge in terms on web technologies such as HTML, CSS and JavaScript.
- [Inner shadow](https://designshack.net/articles/css/inner-shadows-in-css-images-text-and-beyond/) - This article was really helpful to understand how to place an inner shadow with css.

## Author

- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)


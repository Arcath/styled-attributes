# Styled Attributes

Styled Attributes provides functions & classes that allow for better values in styled components.

## Install

```
npm install --save styled-attributes
```

## Usage

Using a width

```ts
import {px} from 'styled-attributes'

let siteWidth = px(980)

let css = `
  width:${siteWidth}; // returns 980px
  padding:${px(+siteWidth * 0.01)}; // Note the +, this is required for typescript to allow the Unit class is maths.
`
```
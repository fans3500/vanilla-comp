## Introduction
A vanillajs component framework
Template: art-template
CSS-preprocessor: less + postcss(autoprefixer,cssnano,postcss-px-to-viewport)
webpack + babel + eslint

## Get Start
```
  npm install
  npm run dev
  npm run build
```

## Use
```
  <!-- <script src="./vanilla-comp.js"></script> -->
  import VanillaComp from 'vanilla-comp'
  const { Toast } = VanillaComp
  const tDiv = document.createElement('div')
  const toast = new Toast({
    text: 'hello'
  })
  tDiv.innerHtml = toast.init()
  document.body.appendChild(tDiv)
```
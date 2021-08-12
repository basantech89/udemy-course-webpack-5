// import statement is from Ecmascript modules which is supported by webpack by default
// import addImage from './add-image.js'
import HelloButton from './components/button/hello-world.js'
import Heading from './components/heading/heading.js'
import React from 'react'

const heading = new Heading()
heading.render('hello world')

const helloButton = new HelloButton()
helloButton.render()

// addImage()

if (process.env.NODE_ENV === 'production') {
  console.log("production mode");
} else {
  console.log("dev mode");
}

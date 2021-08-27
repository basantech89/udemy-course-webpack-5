import HelloWorldButton from '../hello-world-button/hello-world-button.js';
import Heading from '../heading/heading.js';

class HelloWorldPage {
  render() {
    const heading = new Heading();
    heading.render('hello world');
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  }
}

// if (process.env.NODE_ENV === 'production') {
//     console.log('Production mode');
// } else if (process.env.NODE_ENV === 'development') {
//     console.log('Development mode');
// }

export default HelloWorldPage

import NavBar from './components/navbar/navbar'
const url = window.location.pathname

const navItems = [
  {
    url: '/hello-world-page',
    title: 'Hello World Page'
  },
  {
    url: '/kiwi-page',
    title: 'Kiwi Page'
  },
]

const navBar = new NavBar()
navBar.render(navItems)

if (url === '/hello-world-page') {
  console.log("url", url)
  import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
    const HelloWorldPage = HelloWorldPageModule.default
    const helloWorldPage = new HelloWorldPage()
    helloWorldPage.render()
  })

} else if (url === '/kiwi-page') {
  console.log("url", url)
  import('KiwiApp/KiwiPage').then(KiwiPageModule => {
    const KiwiPage = KiwiPageModule.default
    const kiwiPage = new KiwiPage()
    kiwiPage.render()
  })
}
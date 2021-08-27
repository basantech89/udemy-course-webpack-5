import "./styles.scss"

class NavBar {
  render(navItems) {
    const lis = navItems.map(item => {
      return `
        <li>
          <a href="${item.url}">${item.title}</a>
        </li>
      `
    })

    const ul = document.createElement('ul')
    ul.innerHTML = lis.join('')
    ul.classList.add('navbar')
    document.querySelector('body').appendChild(ul)
  }
}

export default NavBar

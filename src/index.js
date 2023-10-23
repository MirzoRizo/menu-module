import './style.css';

function renderMenuElements() {
  // Background
  const body = document.querySelector('body');
  // Navbar
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar-element');
  // logo
  const logo = document.createElement('h1');
  logo.innerText = 'Logo';
  logo.classList.add('logo');

  const signUp = document.createElement('button');
  signUp.classList.add('btn', 'signUp');
  signUp.innerText = 'Sign Up';
  const signIn = document.createElement('button');
  signIn.classList.add('btn', 'signIn');
  signIn.innerText = 'Sign In';

  // create div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  buttonsDiv.appendChild(signUp);
  buttonsDiv.appendChild(signIn);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');

  navBar.appendChild(logo);

  let i = 0;
  while (i < 4) {
    const Drop = document.createElement('div');
    Drop.classList.add('drop');
    const menuEle = document.createElement('div');
    menuEle.classList.add('menu');
    menuEle.innerText = `Menu ${i}`;
    const menuDrop = document.createElement('div');
    menuDrop.classList.add('drop-menu');
    let j = 0;
    while (j < 3) {
      const menuDropEle = document.createElement('ul');
      let k = 0;
      while (k < 4) {
        const menuDropEleEle = document.createElement('li');
        menuDropEleEle.innerText = `Menu ${i}`;
        menuDropEle.appendChild(menuDropEleEle);
        k++;
      }
      menuDrop.appendChild(menuDropEle);
      j++;
    }
    Drop.appendChild(menuDrop);
    menuEle.appendChild(Drop);
    menuContainer.appendChild(menuEle);
    i++;
  }
  navBar.appendChild(menuContainer);
  navBar.appendChild(buttonsDiv);
  body.appendChild(navBar);
}
renderMenuElements();

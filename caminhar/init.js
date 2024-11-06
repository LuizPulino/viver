const appName = "Caminhar";
// set page title
$("head>title, header>h1").text(appName);
//routes
const routes = {
    '/': {
      linkLabel: 'inicio',
      content: 'Página inicial'
    },
    '/rotas': {
      linkLabel: 'rotas',
      content: 'Página de rotas'
    },
    '/friends': {
      linkLabel: 'treino',
      content: 'Página de treino'
    }
  };
  $("#log").text("routes");
  const app = document.querySelector('#app');
  const nav = document.querySelector('#nav');
  
  // function to create new nav items
  const renderNavlinks = () => {
    const navFragment = document.createDocumentFragment();
    Object.keys(routes).forEach(route => {
      const { linkLabel } = routes[route];
  
      const linkElement = document.createElement('a')
      linkElement.href = route;
      linkElement.textContent = linkLabel;
      linkElement.className = 'nav-link';
      navFragment.appendChild(linkElement);
    });
  
    nav.append(navFragment);
  };
  
  // function to register click handlers
  const registerNavLinks = () => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      const { href } = e.target;
      history.pushState({}, "", href);
      navigate(e); // pending implementation
    });
  }; 

  
const renderContent = route => app.innerHTML = routes[route].content;

const navigate = e => {
    const route = e.target.pathname;
    // this is responsible for adding the new path name to the history stack
    history.pushState({}, "", route);
    renderContent(route);
};

const registerBrowserBackAndForth = () => {
    window.onpopstate = function (e) {
      const route = location.pathname;
      renderContent(route);
    };
  };
  
  const renderInitialPage = () => {
    const route = location.pathname;
    console.log(route);
    renderContent(route);
  };

  (function bootup() {
    renderNavlinks();
    registerNavLinks();
    registerBrowserBackAndForth();
    renderInitialPage();
  })();
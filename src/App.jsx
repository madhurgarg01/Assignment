import React, { createRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
// import NotFoundPage from './pages/NotFoundPage'; // Optional: for a 404 page

// Define routes with their components and a nodeRef for animations
const appRoutes = [
  { path: '/', Element: WelcomePage, nodeRef: createRef(null), name: 'Welcome' },
  { path: '/signup', Element: SignUpPage, nodeRef: createRef(null), name: 'SignUp' },
  { path: '/signin', Element: SignInPage, nodeRef: createRef(null), name: 'SignIn' },
  { path: '/account-settings', Element: AccountSettingsPage, nodeRef: createRef(null), name: 'AccountSettings' },
  // Example for a 404 page:
  // { path: '*', Element: NotFoundPage, nodeRef: createRef(null), name: 'NotFound' }
];

function App() {
  const location = useLocation();

  // Find the current route configuration based on the location.pathname
  const currentRouteConfig = appRoutes.find(route => route.path === location.pathname);

  return (
    <div className="transition-wrapper-outer">
      <TransitionGroup component={null}>
        {/*
          CSSTransition needs to be re-rendered with a new key when the page changes.
          The `location.pathname` is a good key.
          We also provide the `nodeRef` for the specific page's root element.
        */}
        <CSSTransition
          key={location.pathname} // Use pathname for key to trigger transitions
          nodeRef={currentRouteConfig ? currentRouteConfig.nodeRef : createRef(null)} // Fallback ref if no match
          timeout={350}
          classNames="page"
          unmountOnExit // Recommended to remove elements from DOM when exited
        >
          {(state) => { // `state` is 'entering', 'entered', 'exiting', 'exited'
            // The `ref` must be applied to the direct child element that CSSTransition animates.
            // This div will get the animation classes.
            const nodeToRef = currentRouteConfig ? currentRouteConfig.nodeRef : createRef(null);

            return (
              <div ref={nodeToRef} className="page-transition-inner-wrapper">
                {/*
                  The <Routes> component handles rendering the correct <Element>
                  based on the location. It's important to pass the same `location`
                  object to <Routes> so it's in sync.
                */}
                <Routes location={location}>
                  {appRoutes.map(({ path, Element }) => (
                    <Route key={path} path={path} element={<Element />} />
                  ))}
                  {/* If you have a NotFoundPage, you'd add its Route here too,
                      or handle it if currentRouteConfig is undefined above.
                      Example: <Route path="*" element={<NotFoundPage />} />
                  */}
                </Routes>
              </div>
            );
          }}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
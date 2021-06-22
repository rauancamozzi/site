import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 90vw;

  margin: 0 auto;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const PagesContent = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Pages>
          <PagesContent>
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/sobre" component={ About } />
              <Route path="/portfolio" component={ Portfolio } />
              <Route path="/contato" component={ Contact } />
            </Switch>
          </PagesContent>
        </Pages>
        <Footer />
      </Container>
    </Fragment>
  )
}

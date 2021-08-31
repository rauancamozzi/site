import React, { Fragment } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Rhaast from "./pages/Project/Rhaast/Rhaast";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const PagesContent = styled.div`
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Router>
      <Fragment>
      <Container>
        <Header />
        <Pages>
          <PagesContent>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={About} />
                <Route path="/contato" component={Contact} />
                  
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/portfolio/rhaast" component={Rhaast} />
              </Switch>
            </AnimatePresence>
          </PagesContent>
        </Pages>
        <Footer />
      </Container>
      </Fragment>
    </Router>
  );
}
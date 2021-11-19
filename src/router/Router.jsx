import React, { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, IntroductionPage, MusicPage } from '@pages';
import DefaultTemplate from '../templates/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/introduction/:id" exact>
            <IntroductionPage />
          </Route>
          <Route path="/music" exact>
            <MusicPage />
          </Route>
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;

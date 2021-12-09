import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'regenerator-runtime/runtime';
import 'core-js/stable';

import { AppContainer } from './containers/AppContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBalanceScale,
  faEdit,
  faUser,
  faSignInAlt,
  faHome,
  faPause,
  faPlay,
  faExclamationCircle,
  faCircleNotch,
  faImages,
  faMusic,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

library.add(
  faBalanceScale,
  faEdit,
  faUser,
  faSignInAlt,
  faHome,
  faPause,
  faPlay,
  faExclamationCircle,
  faCircleNotch,
  faImages,
  faMusic,
  faVideo,
  faCalendarAlt,
);

window.addEventListener('load', () => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>,
    document.getElementById('app'),
  );
});

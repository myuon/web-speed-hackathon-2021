import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'regenerator-runtime/runtime';
import 'core-js/stable';

import { AppContainer } from './containers/AppContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt';

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

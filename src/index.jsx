'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'John',
  lastName: 'Smith'
};

function formatName(user) {
  document.title = user.firstName + ' ' + user.lastName;
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <h1>
    Hello, {formatName(user)}!!
  </h1>
);

ReactDOM.render(
    element,
    document.getElementById('main-component')
);

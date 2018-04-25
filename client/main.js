// import React from 'react';
// import { AppRouter, history } from '../imports/ui/AppRouter';

// Tracker.autorun(() => {
  //   const isAuthenticated = !!Meteor.userId();
  //   console.log('isAuthenticated', isAuthenticated);
  
  // });
  
  // Meteor.startup(() => {
    //   ReactDOM.render(<AppRouter/>, document.getElementById('app'))
    // })
    
import { Meteor } from 'meteor/meteor'; 
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.jsx';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const name = Session.get('name');
  console.log('Name: ', name);
});

Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
});


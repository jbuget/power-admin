import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // authentication
  this.route('login');

  // public routes
  this.route('about');

  // private routes
  this.route('authenticated', { path: '' }, function() {
    // all routes that require the session to be authenticated
    this.route('users', function() {
      this.route('list', { path: '/' });
      this.route('new');
      this.route('get', { path: ':user_id' });
      this.route('edit', { path: ':user_id/edit' });
    });
    this.route('organizations');
    this.route('certifications');
    this.route('operating');
  });
});

export default Router;

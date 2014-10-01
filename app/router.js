import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('example');
  this.route('another');
});

Router.reopen({
  didTransition: function (paths) {
    this._super(paths);
    Ember.run.next(this, function() {
      window.analytics.identify(1, {
        email: 'josh@coderly.com'
      });
      window.analytics.page(); // commenting this will make it fail
    });
  }
});

export default Router;

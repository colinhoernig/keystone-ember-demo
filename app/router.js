var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('posts', function () {
    this.route(':post_id');
  });
  this.resource('galleries', function () {
    this.route(':gallery_id');
  });
  this.resource('enquiries', function () {
    this.route(':enquiry_id');
  });
  this.resource('users', function () {
    this.route(':user_id');
  });
  this.resource('things', function () {
    this.route(':thing_id');
  });
});

export default Router;

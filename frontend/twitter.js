const FollowToggle = require('./follow_toggle.js')

$(() => {
  // new FollowToggle($('button.twitter-toggle'));
  $('button.toggle-follow').each((index, jobj) => {
    new FollowToggle(jobj);
  });


});

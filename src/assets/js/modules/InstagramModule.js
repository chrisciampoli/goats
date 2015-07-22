const React = require('react');

module.exports = () => {
  var data = goats.container.get('instagramAPI').fetch();
  var Instagram = goats.container.get('instagram');
  Instagram.init(data);

  
};

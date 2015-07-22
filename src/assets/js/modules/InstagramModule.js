const React = require('react');
import InstagramController from '../controllers/InstagramController';

module.exports = () => {
  var data = goats.container.get('instagramAPI').fetch();
  var Instagram = goats.container.get('instagram');
  Instagram.init(data, InstagramController);

  React.render(
        <InstagramController images={Instagram.getImages()} />,
        document.getElementById('pageLoader')
    );

};

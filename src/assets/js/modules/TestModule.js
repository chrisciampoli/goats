import TestComponent from '../components/TestComponent';

const React = require('react');

module.exports = () => {
  console.log('loading TestModule');
  React.render(<TestComponent />, document.getElementById('testDiv'));
};

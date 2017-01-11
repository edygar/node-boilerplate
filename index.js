process.env.NODE_ENV = 'development';

/* Installs babel require hook */
// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-register');

/* Starts the app */
require('./src');

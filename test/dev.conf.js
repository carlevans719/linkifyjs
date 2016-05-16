// Karma Development configuration

var
base = require('./conf'),
extend = require('lodash/extend');

module.exports = function (config) {

	config.set(extend(base, {

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],

	}));
};

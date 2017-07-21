// Karma configuration file
module.exports = function (karma) {

	var files = require('./files.conf');

	karma.set({
		// base path, that will be used to resolve files and exclude
		basePath: '.',

		frameworks: ['jasmine', 'karma-typescript'],

		// list of files / patterns to load in the browser
		files: [].concat(files.libs, files.src, files.test),

		preprocessors: {
			"**/*.ts": ["karma-typescript"]
		},

		karmaTypescriptConfig: {
			bundlerOptions: {
				addNodeGlobals: false
			}
		},

		reporters: ["progress", "karma-typescript"],

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: karma.LOG_DEBUG,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari
		// - PhantomJS
		browsers: [ 'Chrome' ]
	})
};
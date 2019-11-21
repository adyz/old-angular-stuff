const angular = require('angular');
const ngModule = angular.module('app', []);

require('./directives/index').default(ngModule);

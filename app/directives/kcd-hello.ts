export default (ngModule: any) => {
  ngModule.directive('kcdHello', () => {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: require('./kcd-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
        vm.count = 0;
        vm.increment = () => {
          vm.count += 1
        }
      }
    };
  });
};

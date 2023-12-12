const {
  withModuleFederationPlugin,
  DEFAULT_SKIP_LIST,
  shareAll,
  DEFAULT_SECONARIES_SKIP_LIST,
} = require('@angular-architects/module-federation/webpack');

const skipList = [
  ...DEFAULT_SKIP_LIST,
  '@angular/localize',
  '@angular/compiler',
];

const secondariesSkipList = [
  ...DEFAULT_SECONARIES_SKIP_LIST,
  '@angular/common/http/testing',
  '@angular/localize/init',
];

module.export = withModuleFederationPlugin({
  name: 'shell',
  shared: {
    ...shareAll(
      {
        singleton: true,
        strictVersion: true,
        requiredVersion: false,

        //   includeSecondaries: { skip: secondariesSkipList },
      }
      // skipList
    ),
  },
});

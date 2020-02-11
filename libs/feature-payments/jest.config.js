module.exports = {
  name: 'feature-payments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-payments',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

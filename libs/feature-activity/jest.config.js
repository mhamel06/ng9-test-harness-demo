module.exports = {
  name: 'feature-activity',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-activity',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

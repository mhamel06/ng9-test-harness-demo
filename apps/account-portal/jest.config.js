module.exports = {
  name: 'account-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/account-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

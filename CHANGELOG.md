<!-- @format -->

## [4.0.0](https://github.com/RobertFischer/react-native-randombytes/compare/v3.5.2...v4.0.0) (2020-07-15)

### ⚠ BREAKING CHANGES

- **new implementation:** Entirely new implementation.
- **previous implementation:** The native module is no longer installed into React Native.

### Features

- **new implementation:** first implementation of the new, pure JS implementation ([2416036](https://github.com/RobertFischer/react-native-randombytes/commit/2416036b4b59abc3fafaa7c02ec109f7ed43258b))

### Bug Fixes

- **init:** ensures RNRandomBytes exists before we dereference 'seed' ([4ce665c](https://github.com/RobertFischer/react-native-randombytes/commit/4ce665c486a137028a55a99c04372fc6df2fc672))
- rm package-lock.json ([6558396](https://github.com/RobertFischer/react-native-randombytes/commit/6558396c5f410bbc2aebc1ccc44a6df79f8d4e8b))

### Code Refactoring

- **previous implementation:** eliminate the native module parts leftover from prev impl ([1d3cf7a](https://github.com/RobertFischer/react-native-randombytes/commit/1d3cf7a642b7ba1759b268762bee28bc9c6b8402))

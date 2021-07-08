# iOS Helper Action

[![License](https://img.shields.io/github/license/BlueIntent/iOS-helper-action)](https://github.com/BlueIntent/iOS-helper-action/blob/main/LICENSE)

Action for iOS developers to automate tedious tasks like swiftlint, pod-lib-lint, install, run, test.

## Inputs

### Action
#### `swiftlint`
  Swift style and conventions.
#### `pod-lit-lint`
  Validates a Pod
#### `install`
  Install project dependencies.
#### `run`
  Install project dependencies, and open workspace.
#### `test`
  Test a scheme from the build root (SYMROOT).  This requires specifying a scheme and optionally a destination.

```
- uses: BlueIntent/iOS-helper-action@v0.0.1
  with:
    action: 'swiftlint'
```
<!-- @format -->

![Validate code on push](https://github.com/RobertFischer/react-native-randombytes/workflows/Validate%20code%20on%20push/badge.svg)

# RandomBytes-Pure

## Motivation

This is a fork of [`react-native-randombytes`](https://www.npmjs.com/package/react-native-randombytes), and is a superset of its exposed `randomBytes` API.
You probably want to use that library if you're comfortable/capable of using
[`react-native link`](https://reactnative.dev/docs/linking-libraries-ios#automatic-linking). If, however, you're using the
[Expo "Managed Workflow"](https://docs.expo.io/introduction/managed-vs-bare/#managed-workflow) or otherwise don't want to mess around with native dependencies, then this library is
the one for you.

## Implementation Overview

This library uses the [SJCL](https://bitwiseshiftleft.github.io/sjcl/) pseudo-random generator. That library is small, fast, and memory-efficient.

## Usage

```js
import randomBytes from "react-native-randombytes";

const rand = randomBytes(4);
```

That is it. Now `rand` is a [`Buffer`](https://www.npmjs.com/package/buffer) with 4 pseudo-random bytes. Enjoy.

## Installation

If you want to use this module anywhere you might otherwise use `react-native-randombytes`, _AND_ you are using [`yarn`](https://classic.yarnpkg.com/) or some other build tool that supports `"resolutions"` in `package.json`, then just add this to your `package.json`:

```json
"resolutions": {
	"react-native-randombytes": "RobertFischer/react-native-randombytes"
}
```

## Versioning

This library follows semver using [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) and [Conventional Commits](https://www.conventionalcommits.org/).

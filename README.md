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
import randomBytes from "randombytes-pure";

const rand = randomBytes(4);
```

That is it. Now `rand` is a [`Buffer`](https://www.npmjs.com/package/buffer) with 4 pseudo-random bytes. Enjoy.

## Installation

### Yarn

```bash
yarn add randombytes-pure
```

### npm

```bash
npm install --save randombytes-pure
```

### Overriding Dependencies

If you want to use this package in place of `react-native-randombytes`, and you are using `yarn` (or something else that supports the `"resolutions"` field), then you can do this:

```json
{
	"resolutions": {
		"react-native-randombytes": "github:RobertFischer/randombytes-pure#v4.1.0"
	}
}
```

## Versioning

This library follows semver using [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) and [Conventional Commits](https://www.conventionalcommits.org/).

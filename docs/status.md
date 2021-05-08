---
id: status
title: Current status
sidebar_label: Current status
slug: /status
---

This page will be removed once the public version is released.

## conformance

The `conformance` tests are error reporting tests ported from official typescript repository.

**Note**: Currently many tests are ignored.

Ignored tests include

- tests for error recovery of the parser.
- multi-file tests (tests with `@filename` directive)
- tests for recursive types.

**Note**

Currently some of errors are normalized.
Namely, those are

```ts
// TS2304: Type not found.
// TS2552: Type not found with recommendation.
// TS2580: Type not found with recommendation for package to instsall.
// TS2581: Type not found with recommendation for jQuery.
// TS2582: Type not found with recommendation for jest or mocha.
// TS2583: Type not found with recommendation to change target library.
// TS2584: Type not found with recommendation to change target library to include `dom`.
```

```ts
// TS2339: Property not found.
// TS2550: Property not found with a suggestion to change `lib`.
// TS2551: Property not found with a suggestion.
```

```ts
// TS2693: Type used as a variable.
// TS2585: Type used as a variable with a suggestion to change 'lib',
```

### 2021/01/30

1531 tests pass.

### 2021/02/04

1597 tests pass.

### 2021/02/07

1692 tests pass

### 2021/02/09

1730 tests pass.

### 2021/02/12

1740 tests pass.

### 2021/02/19

1748 out of 3040 tests pass.

### 2021/02/21

1774 out of 3059 tests pass. 1902 ignored;

The ignored 1902 tests are one of:

- tests for error recovery of the parser
- tests for import / exports
- tests for recursive types.

### 2021/02/24

1797 tests pass.

### 2021/02/27

1800 tests pass.

### 2021/03/02

1863 tests pass.

### 2021/03/05

1906 tests pass.

### 2021/03/09

1901 tests pass.

(Regressed because I made the rule very strict to filter out false positives.)

### 2021/03/10

1905 tests pass.

### 2021/03/11

1917 tests pass.

### 2021/03/27

1923 tests pass.

### 2021/03/28

1927 tests pass.

### 2021/03/29

`conformance`: 1931 / 3048

(Copied from typescript 4.1)

### 2021/04/02

`conformance`: 1953 / 3048

(Copied from typescript 4.1)

### 2021/04/03

`conformance`: 1960 / 3048

(Copied from typescript 4.1)

### 2021/04/05

`conformance`: 1967 / 3048

(Copied from typescript 4.1)

### 2021/04/25

`conformance`: 1975 tests passed, but ignored some more tests because of stack overflow.

(Spec: typescript 4.1)

### 2021/04/27

`conformance`: 1987 tests passed.

(Spec: typescript 4.1)

### 2021/04/28

`conformance`: 2015 tests passed.

(Spec: typescript 4.1)

### 2021/04/29

`conformance`: 2065 tests passed.

(Spec: typescript 4.1)

### 2021/04/30

`conformance`: 2081 tests passed.

(Spec: typescript 4.1)

### 2021/05/01

`conformance`: 2090 tests passed.

(Spec: typescript 4.1)

### 2021/05/02

`conformance`: 2108 tests passed.

(Spec: typescript 4.1)

### 2021/05/03

`conformance`: 2117 tests passed.

(Spec: typescript 4.1)

### 2021/05/05

`conformance`: 2133 tests passed.

(Spec: typescript 4.1)

### 2021/05/06

`conformance`: 2145 tests passed.

(Spec: typescript 4.1)

### 2021/05/07

`conformance`: 2161 tests passed.

(Spec: typescript 4.1)

### 2021/05/08

`conformance`: 2180 tests passed.

(Spec: typescript 4.1)

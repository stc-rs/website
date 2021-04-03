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

Currently some of `type not found` errors are normalized.
Namely, those are

```ts
// TS2552: Type not found with recommendation.
// TS2580: Type not found with recommendation for package to instsall.
// TS2581: Type not found with recommendation for jQuery.
// TS2582: Type not found with recommendation for jest or mocha.
// TS2583: Type not found with recommendation to change target library.
// TS2584: Type not found with recommendation to change target library to include `dom`.
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

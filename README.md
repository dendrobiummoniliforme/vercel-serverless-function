# Vercel Serverless Function

This is a Template repository aimed at allowing users to get started with Vercel Functions as quickly as possible.
It is based off of the Official Guide provided by Vercel [Serverless Functions](https://vercel.com/docs/serverless-functions/introduction).

# Requirements

## Dev Dependencies (**package.json**)
```Json
"@tsconfig/node14": "^1.0.0",
"@types/jest": "^26.0.23",
"@types/jest-when": "^2.7.2",
"@vercel/node": "^1.11.0",
"jest": "^27.0.1",
"jest-when": "^3.3.1",
"ts-jest": "^27.0.0",
"typescript": "^3.9.3"
```

## Vercel Account
[Introduction](https://vercel.com/docs/introduction) is a good place to start.

# Usage

## Use Template
* Use the **Template** on the right to use this repository as a starting area for your own project.

## Setup Vercel
After making an account I recommend
1. Using the template.
2. Linking the project on Vercel to the newly templated entity.
3. `git clone <templated_entity>`.
4. [Install Vercel CLI](https://vercel.com/cli).
5. Link your project through **Vercel** UI (their website).
6. [Using Vercel CLI, link the **Cloned** project](https://vercel.com/docs/cli?query=Linking%20Porj#commands/overview/project-linking).
7. You're ready to dev!

## Local Dev

### Server
After setting up the project link I recommend
1. `vercel dev`.

This launches a dev environment to interact with the function(s) you have modified.

### Test
This is independent of Vercel and is utilizing `jest` framework.
1. `npm run test`.

Runs all **test suites**. There is only 1 test by default. Output
```sh
➜ npm run test

> vercel-serverless-function@1.0.0 test
> jest

 PASS  test/Model.test.ts
  get() =>
    ✓ SHOULD return "TEST" (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.816 s, estimated 2 s
Ran all test suites.
```
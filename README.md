# **Workflow Course Assignment using the Noroff Social Media Client repo**

## Assignment brief and goal

"Using the skills and knowledge from this course, improve the quality of a package by establishing helpful workflows that make the development process more efficient.

Although Quality Assurance is a practice we should be concerned with throughout the development cycle, it is common to sprint towards an MVP version of an application before later improving the quality. In this exercise you are tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy."

## How to run

- *npm install* - installs all dependencies
- *npm run build* - sets up sass to style bootstrap

## Testing

```bash
npm run test-unit
```
Tests if the login function stores a token when receiving valid login credentials.

```bash
npm run test-e2e
```
Tests whether the user can log in using valid credentials, see their profile and then log out again. Also tests if the user is rejected and shown an error message, when inputting invalid or incorrect credentials.

```bash
npm run test-e2e-cli
```
Runs the above test, but in the terminal.


## Tech stack

* HTML
* SASS
* JS
* Bootstrap
* Pretter
* ESLint
* Jest
* Cypress

[![HTML5](https://img.shields.io/badge/HTML5-e34f26.svg)](https://html5.org/)
[![JS](https://img.shields.io/badge/JS-JavaScript-yellow.svg)](https://javascript.com/)
[![SASS](https://img.shields.io/badge/SASS-e34f26.svg)](https://sass-lang.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-CSS-563d7c.svg)](https://getbootstrap.com/)
[![Prettier](https://img.shields.io/badge/Prettier-code%20formatter-pink.svg)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/ESLint-code%20linter-brightgreen.svg)](https://eslint.org/)
[![Jest](https://img.shields.io/badge/Jest-Testing-yellow.svg)](https://jestjs.io/)
[![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen.svg)](https://www.cypress.io/)


## Status badges

[![Deploy static content to Pages](https://github.com/mhaarseth/noroff-social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/mhaarseth/noroff-social-media-client/actions/workflows/pages.yml)

[![Automated Unit Testing](https://github.com/mhaarseth/noroff-social-media-client/actions/workflows/unit-tests.yml/badge.svg?branch=workflow)](https://github.com/mhaarseth/noroff-social-media-client/actions/workflows/unit-tests.yml)
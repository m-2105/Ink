# INK
> This project contains the scripts and code-base for Smoke Tests used for verifying the Build to be ready for further Testing

## Table Of Contents
- [Installation](#installation)
- [Folder Structure](#folder_structure)
- [Usage](#usage)

## Installation
### Pre Requisites
> Install Node Js and npm
- Install Cypress
```js
npm install cypress --save-dev
```
- Make a pull request
```js
git request-pull [-p] <start> <url> [<end>]
```
>Note: 
>- `-p`
>Include patch text in the output.
>- `<start>`
>Commit to start at. This names a commit that is already in the upstream history.
>- `<url>`
>The repository URL to be pulled from.
>- `<end>`
>Commit to end at (defaults to HEAD). This names the commit at the tip of the history you are asking to be pulled.

## Folder_Structure
- [Fixtures](#fixtures)
- [Integration](#integration)
- [Page_Ojects](#page_objects)
- [.json Files](.json_files)

### Fixtures
This Folder holds optional JSON data for mocking, [read more](https://on.cypress.io/fixture).
>- `inkforall_url.json` contains all of the URLs associated to the [HomePage](https://testing.inkforall.com/).
>- `Href.json` contains all of the Path and Link Address of all Items associated to the [HomePage](https://testing.inkforall.com/) that navigates to separate domain/Origin. 
>- Note: 
>Separate `JSON` files are just made for the purpose to overcome the Cross Origin Error. 
>Items with Different Origins are validated by matching their expected and actual `href`.

### Integration
This Folder holds the actual test files, [read more](https://on.cypress.io/writing-and-organizing-tests).
>`Smoke-test.spec.js` contains the script for Smoke Test for Verifying the Build to be ready for further Testing.

### Page_Objects
Page Objects are used to segregate the test code from the page elements and for enhancing test maintenance and reducing code duplication, [read more](https://docs.cypress.io/guides/migrating-to-cypress/protractor#Using-Page-Objects).
>- `ExportFunctions.js` holds the reuseable functions/methods that are used in actual test scripts in order to simplify test code.
>- `Keys.js` holds refresh token. 

### .json Files
>- `cypress.json` configure project options in the [../cypress.json](../cypress.json) file, see [Cypress configuration doc](https://on.cypress.io/configuration).
>- `package.json` holds metadata relevant to the project and it is used for managing the project's dependencies, scripts, version.

## Usage
The test scripts can be used For Verifying the Build whether it ready for further Testing

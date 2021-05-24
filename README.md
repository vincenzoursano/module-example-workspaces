# Module Fedaration React Workspaces
> Module shared for [module-fedaration-react-workspaces](https://github.com/vincenzoursano/module-fedaration-react-workspaces) project.

* **[Base project](https://github.com/vikpe/react-webpack-typescript-starter)**
* **[Webpack module federation](https://webpack.js.org/concepts/module-federation/)** (5.X)
* **[Npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)** (7.X)
* **[Git submodules](https://github.blog/2016-02-01-working-with-submodules/)**

## Installation
1. Clone/download repo
4. Run `npm install`

## Usage
**Development**

`npm run start:module`

* Build bundle js continuously (HMR enabled)
* Bundle only served @ `http://localhost:8081`
* DevServer writeToDisk to `/review/`

**Production**

`npm run build:module`

* Build bundle js to `/dist/`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/`
`npm run test` | Run tests
`npm run lint` | Run linter
`npm run lint --fix` | Run linter and fix issues
`npm run start` | (alias of `yarn run start-dev`)
`npm run start:module` | Build bundle js continuously and serve @ `http://localhost:8081`
`npm run build:module` | Build bundle js to `/dist/`

## To improve
* **Local devServer** | Folder `/review/` needs to be cleaned sometimes
* **Types module** | Need to export types of shared modules
* **ModuleFederation shared deps** | Error eager with `...packageJsonDeps`

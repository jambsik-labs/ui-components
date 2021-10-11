# ui-components reusable components with rollup

## Description

This a reusable react library for shared components with design system methodology in our apps.

#### Storybook: https://jambsik-labs.web.app/

### Required Node version

`14.18.0`

## Installation in a project

#### Install from the command line:

`yarn add theme-ui @theme-ui/presets @types/theme-ui @jambsik-labs/ui-components@[version]`

#### Install via package.json:

`"@jambsik-labs/ui-components": "[version]"`

## How to run our library localy

1. `Yarn install`
2. `Yarn storybook`

**Now is available in http://localhost:6006/**

## Commits

Each commit message must have a particular syntaxys based on conventional commits. Before each commit a pre hook will be run to validate errors in both the commit message and any other errors that may be reported by the eslint

Following the bottom guide for more information about the commits.

## Publishing

Should be added as github secret the following variables `NPM_TOKEN` Github Token to publish in the github registry and `registry` that should be github's registry.
When you merge or commit every change to master this flow dispatch an github action for release a new version.

Release new version is handle by semantic-release bot , depends the commit message the semantic release can publish a new version (PATCH, MINOR, MAJOR).

## Conventional commits https://www.conventionalcommits.org/en/v1.0.0/

Since we are going to use conventional commits in the components library, we should try to write the commits as accurate as possible according to its content, since each commit in the release will come with the commit link next to it. This way it will be easier and more intuitive when looking for information.

As a guide, this are some examples of commits according to the conventional rules:

> fix(file/scope): (the change may include patch changes. We will use it when there are changes that may involve different projects, like layout changes (padding, margin), if we add new required parameters to a component or if we change a components that need another one to be modified.) → [PATCH RELEASE]

> feat(file/scope): (we will use it when there are changes that are safe, like adding extra optional parameters to a component, changing some colors or adding a new component that is independent of the others.) → [FEATURE/MINOR RELEASE]

> BREAKING CHANGE: (the change may include minor and patch changes. We will use it when there is a huge refactor of components that involves a merge, for example changing the buttons component, adding required parameters or merging a label component with another one) → [BREAKING CHANGE/MAYOR RELEASE]

> perf(file/scope): (change in code that improves performance)

> docs(file/scope): (changes to the documentation)

> style(file/scope): (formatting, missing semi colons, etc; no production code change)

> refactor(file/scope): (refactoring production code, eg. renaming a variable)

> test(file/scope): (adding missing tests, refactoring tests; no production code change)

> chore(file/scope): (updating grunt tasks etc; no production code change`

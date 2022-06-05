<h1 align="center">{Todo App Challenge}</h1>

<div align="center">
   Solution for Todo App Challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">

  <h3>
    <a href="">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)

## Overview

First I started with cleaning all the innecesary files that were created by default using create-react-app. Then, I downloaded and imported all the resources that were needed for the challenge (fonts, colors, icons). Then, having all the base for the initialization of the challenge I continued with the development of each component required to complete the challenge. I used the react router library for the navigation between all, active and complete tasks links. I developed each functionality (add task, complete task, state changes) and finally I used the localstorage to save and persist the data.

I mainly used create-react-app, styled components and react router to accomplish the challenge.

### Built With

- [Create-react-app](https://create-react-app.dev/docs/getting-started)

```sh
npx create-react-app my-app
```

- [Styled components](https://styled-components.com/)

```sh
npm install --save styled-components
```

- [React router](https://reactrouter.com/docs/en/v6)

```sh
npm install react-router-dom@6
```

## Features

- Navigate between all, active and completed tasks links
- Add a new task
- Complete a task
- Delete selected task
- Delete all tasks
- Save tasks added into localstorage

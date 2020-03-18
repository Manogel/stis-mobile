<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/react-native-template-manogel.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-manogel)
[![npm](https://img.shields.io/npm/dt/react-native-template-manogel.svg)](https://www.npmjs.com/package/react-native-template-manogel)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Manogel Template for React Native</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Project Content

- [About the Project](#about-the-project)
  - [Dependecies Configured](#dependencies-configured)
  - [File Structure](#file-structure)
  - [Installation](#installation)
    - [Additional Step on Android](#additional-step-on-android)
- [Contact](#Contact)

<!-- ABOUT THE PROJECT -->

### About the project

This project aims to create a template that can be used when designing projects using React Native, as the process of installing and configuring libs at the beginning of a project can generate some complexity and often even errors that delay the process. thus disrupting the flow of development.

### Dependencies configured

- [React Native](http://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
  - [Redux Saga](https://redux-saga.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [React Native Safe Area Text](https://www.npmjs.com/package/react-native-safe-area-context)
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated)
- [React Navigation Tabs](https://reactnavigation.org/docs/en/bottom-tab-navigator.html)
- [React Navigation Stack](https://reactnavigation.org/docs/en/stack-navigator.html)
- [Axios](https://github.com/axios/axios)
- [Prop Types](https://github.com/facebook/prop-types)
- [Styled Components](https://github.com/styled-components/styled-components)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native MasckedView](https://www.npmjs.com/package/@react-native-community/masked-view)
- [Reactotron](https://github.com/infinitered/reactotron)
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
- [Babel](https://babeljs.io/)
  - [babel-eslint](https://github.com/babel/babel-eslint)
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)
- [ESLint](https://eslint.org/)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)
  - [eslint-plugin-import-helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers)
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [Prettier](https://prettier.io/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [EditorConfig](https://editorconfig.org/)

### File Structure

```bash
rocketseat-advanced
├── src/
│   ├── config/
│   │   ├── ReactotronConfig.js
│   │   └── StatusBarConfig.js.js
│   ├── pages/
│   │   └── Main/
│   │       ├── index.js
│   │       └── styles.js.js
│   ├── services/
│   │   ├── api.js
│   │   └── storage.js
│   ├── store/
│   │   ├── ducks/
│   │   │   └── index.js
│   │   ├── sagas/
│   │   │   └── index.js
│   │   └── index.js
│   ├── styles/
│   │   ├── colors.js
│   │   ├── metrics.js
│   │   └── index.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

### Installation

```sh
npx react-native init ProjectName --template manogel
```

This will create the project with all template dependencies properly installed and linked, as well as the configuration files that are copied to the project.

---

#### Additional Step on Android

Open the file `android/app/src/main/java/<project_package>/MainActivity.java`, and start by importing the packages as below:

```java
// ...
import com.facebook.react.ReactActivity;
// Imports Added
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Create a new method `getMainComponentName()`:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Method Added
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

<!-- CONTACT -->

## Contact

Manoel Gomes - [Github](https://github.com/Manogel) - **manoelgomes53@gmail.com**

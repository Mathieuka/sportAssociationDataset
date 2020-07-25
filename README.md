## Application installation

    - With npm:
        make ninstall

    - With yarn:
        make yinstall

## Application build

    - Android build and run:
        make and

    - Ios build and run:
        make io

## Tooling
    - Typescript
    - React-Native
    - React-Navigation
    - Redux
    - Redux-Thunk
    - Axios
    - React-Native-Pie
    - TsLint
    - Prettier

## Technological choice

    I used React-Native because the mobile is the target platform for the post, moreover the mobile platform is adapted to the needs. The application is functional on both Android and Ios.

    I used Redux to manage the global state of my application and the redux thunk middleware to manage the asynchronous dispatching of my actions.
    Redux allowed me to distribute the data in an organized way in my components.

    All the business logic of my application is in one place, in the file (redux/reducer/helper.ts), and it's only used in one place (redux/reducer/helper.ts).

    The components are divided into screens, have a folder (SharedComponents.ts) which is intended to have reusable components.

    The files of (styles) and connection to the (store) are voluntarily separated to simplify reading and respect the principle of "separation of concern".

    I only did a one (reducer) voluntarily to simplify the test in terms of development time.








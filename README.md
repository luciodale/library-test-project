# Setup

First install the deps

```sh
cd test-project
yarn install
```

```sh
cd lib
yarn install
```

Then, link the lib

```sh
cd lib
yarn link
```

Then, watch the lib for changes

```sh
cd lib
yarn watch
```

Then, open a new terminal and start the test project

```sh
cd test-project
yarn run dev
```

At this point, any live change in the library code will be reflected in the test project.

Happy hacking!

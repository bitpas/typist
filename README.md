# Typist

Animated typing utility.

## Installation

Install `@bitpas/typist` with npm.

```sh
npm install @bitpas/typist
```

## Usage

### Import

Import Typist as an ES module

```js
import Typist from '@bitpas/typist';
```

or require as CommonJS.

```js
const Typist = require('@bitpas/typist');
```

### Initialize

Declare a new instance of Typist.

The Typist instance method takes two arguments: a required callback to which Typist's output is passed as the argument, and an optional configuration object to override Typist's defaults.

```js
const myCallback = (output) => console.log(output);
const myOptions = { speed: 320 };
const myTypist = new Typist(myCallback, myOptions);
```

### Run

On the initialized instance of Typist, pass the desired output as a string to the `type` method, and call the `start` method to begin the animation.

```js
myTypist.type('My typed message.').start();
```

## Combining methods

### Non-chainable methods

The instance methods `start` and `stop` are not chainable. `start` should come at the end of a method chain to begin the animation. `stop` is useful in cases such as [React effect cleanup](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup).

### Chainable methods

The instance methods `type`, `backspace`, and `pause` can be chained to create complex output.

```js
myTypist
  .type('Delete me')
  .backspace('all')
  .type('Vowels: aeiouy')
  .pause(500)
  .backspace()
  .type('[y]')
  .pause(1000)
  .backspace(3)
  .type(' and sometimes y')
  .start();
```

## API

### `new Typist(callback, [options])`

- Arguments
  - callback: `function` - Callback to which the output from Typist is passed as an argument
  - options: `object` - Optional configuration settings
- Returns: Typist

### Non-chainable instance methods

#### `Typist.start()`

- Arguments: none
- Returns: undefined

#### `Typist.stop()`

- Arguments: none
- Returns: undefined

### Chainable instance methods

#### `Typist.type(string)`

- Arguments
  - string `string`: Output to callback
- Returns: Typist instance object

#### `Typist.backspace(value)`

- Arguments
  - value `number` or `string`:
    - `n`: Delete _n_ characters
    - `'all'`: Delete output length
    - Default: `1`
- Returns: Typist instance object

#### `Typist.pause(value)`

- Arguments
  - value `number`: time in milliseconds
- Returns: Typist instance object

### Options

```js
// default options
const defaults = {
  speed: 120,
};
```

#### speed `number`

- Speed of the animation in milliseconds

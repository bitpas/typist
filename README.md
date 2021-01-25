# Typist

Animated typing utility.

## Usage

### Initialize

Declare a new instance of Typist.

The Typist instance method takes two arguments: a required callback to which Typist's output is passed as the argument, and an optional object to configure the instance away from Typist defaults.

```js
import Typist from 'typist';

const myCallback = (output) => console.log(output);
const myOptions = { speed: 320 };
const myTypist = new Typist(myCallback, myOptions);
```

### Run

Call the new instance of Typist, specify the output content in the `type` method, and call the `start` method to begin the animation.

```js
myTypist.type('My typed message.').start();
```

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

## Specs

### Instance method

- Method: `new Typist(function, object)`
- Arguments
  - function: Callback to which the output from Typist is passed as an argument
  - object: Options
- Returns: Typist

#### Options

- `speed`: number in milliseconds

### Non-chainable instance methods

#### `start`

- Method: `start()`
- Arguments: none
- Returns: undefined

#### `stop`

- Method: `stop()`
- Arguments: none
- Returns: undefined

### Chainable instance methods

#### `type`

- Method: `type(string)`
- Arguments
  - string: Output to callback
- Returns: Typist instance object

#### `backspace`

- Method: `backspace(value)`
- Arguments
  - value: Number or String
    - Default: `1`
    - `n`: Delete _n_ number of characters
    - `'all'`: Delete output length
- Returns: Typist instance object

#### `pause`

- Method: `pause(number)`
- Arguments
  - number: time in milliseconds
- Returns: Typist instance object

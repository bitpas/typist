import defaults from './defaults';

function Typist(callback, userOpts = {}) {
  const queue = [];
  let output = '';
  let timer = null;

  const options = {
    ...defaults,
    ...userOpts,
  };

  const _clearTimer = () => {
    clearInterval(timer);
    timer = null;
  };

  const _insertChar = (char) => {
    output += char;
    callback(output);
  };

  const _deleteChar = () => {
    output = output.slice(0, -1);
    callback(output);
  };

  return {
    start() {
      queue.reduce(async (promise, fn) => {
        await promise;
        await fn();
      }, Promise.resolve());
    },

    stop() {
      _clearTimer();
    },

    pause(time) {
      const _pause = () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(), time);
        });

      queue.push(_pause);
      return this;
    },

    type(string) {
      const _type = () => {
        let pos = 0;

        return new Promise((resolve) => {
          timer = setInterval(() => {
            if (pos >= string.length) {
              _clearTimer();
              return resolve();
            }

            _insertChar(string[pos]);
            pos += 1;
            return null;
          }, options.speed);
        });
      };

      queue.push(_type);
      return this;
    },

    backspace(val) {
      const _backspace = () => {
        const opts = {
          all: output.length,
          default: 1,
        };
        const n = opts[val] || val || opts.default;

        return new Promise((resolve) => {
          timer = setInterval(() => {
            if (output.length === opts.all - n) {
              _clearTimer();
              return resolve();
            }

            _deleteChar();
            return null;
          }, options.speed);
        });
      };

      queue.push(_backspace);
      return this;
    },
  };
}

export default Typist;

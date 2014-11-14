// see https://github.com/medikoo/es6-iterator/blob/master/for-of.js

macro for {
  case { $iterator of $iterable } => {
    // if this is the first time I'm here, include the `for-of` module
    // how do I get inner scope and make it a callback function?
    forOf($iterable, $callback, $iterator)
  }
}

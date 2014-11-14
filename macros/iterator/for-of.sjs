// see https://github.com/medikoo/es6-iterator/blob/master/for-of.js

macro for {
  case { $iterator of $iterable } => {
    // if this is the first time I'm here, include the `for-of` module using module import
    if ( !haveImported$('for of') ) {
      #{import {forOf} from 'es6-iterator/for-of';}
      imported$('for of');
    }

    // how do I get inner scope of the for loop and make it a callback I can pass to the function!?
    case { => { ... } } => {
      forOf($iterable, $callback, $iterator)
    }
  }
}

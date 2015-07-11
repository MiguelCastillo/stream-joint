var through = require('through');

/**
 * Take all incoming streams combine them into a single through
 * stream.  Writing to the returned stream will write to all
 * streams passed in.
 *
 * Handy for chaining writable streams.
 *
 * @param {...Streams} List of streams to merge
 *
 * @returns {Stream} Returns a single through stream
 */
function joint(streams) {
  if (!(streams instanceof Array)) {
    streams = Array.prototype.slice.call(arguments);
  }

  return streams.reduce(function(thru, stream) {
    if (stream) {
      thru.pipe(stream);
    }
    return thru;
  }, through());
}

module.exports = joint;

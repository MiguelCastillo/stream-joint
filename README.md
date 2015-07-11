# stream-joint
Combine/merge streams into a single through stream so that writing to the through stream writes to all streams.

Handy for chaining writable streams.

### Examples

#### Chaining writable streams

``` javascript
var fs = require("fs");
var joint = require('stream-joint');
var streams = joint();

streams
  .pipe(joint(process.stdout))
  .pipe(joint(fs.createWriteStream('./temp.log')));

streams
  .write('Let's write to stdout and to a log file);
```

#### Merging writable streams

``` javascript
var fs = require("fs");
var joint = require('stream-joint');
var streams = joint(process.stdout, fs.createWriteStream('./temp.log'));

streams
  .write('Let's write to stdout and to a log file);
```

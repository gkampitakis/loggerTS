# Tslog

It's a module created for personal use on node servers for typescript and javascript.

## Usage

Install the module:<br/>
<br/>
```npm install @gkampitakis/tslog --save```

```
import { Logger } from '@gkampitakis/tslog';

const logger:Logger = new Logger(className,timestamp);
``` 

Where className can be the name of the class of the module or the function calling the logger and timestamp is a boolean flag weather you want to have timestamp or not at the output.

**Example**:

```
11:04:40 [INFO]: Express server listening on port 5000-App
```

## Supported log types

- log (color: Green)
- error (color: Red)
- info (color: Blue)
- debug (color: White)

## Future Work

- Make the module more configurable and the colors
- Support different types of output like sending logs to a file or to a remote server
- https://www.npmjs.com/package/winston
- https://github.com/pinojs/pino

## Author and Maintainer

[Georgios Kampitakis](gkampitakis.github.io)
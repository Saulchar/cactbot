'use strict';

const LineEvent = require('./LineEvent.js');

// Floor waymarker event
class LineEvent0x1C extends LineEvent {
  constructor(repo, line, parts) {
    super(repo, line, parts);

    this.id = parts[4].toUpperCase();
    this.name = parts[5];
  }
}

class LineEvent28 extends LineEvent0x1C {}

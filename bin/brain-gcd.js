#!/usr/bin/env node

import askName from '../src/cli.js';
import launchGame from '../src/index.js';

askName();
launchGame('brain-gcd');
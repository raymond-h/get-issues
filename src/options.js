var program = require('commander');
var colors = require('colors');

program
    .option('run gh-issues in any directory to download all github issues'.yellow)
    .parse(process.argv);
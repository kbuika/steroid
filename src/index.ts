#!/usr/bin/env node 
import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.0')
  .description('A CLI for scaffolding your favourite Javascript Framework for a new project')
  .command('new <name>', 'Create a new project')
  .parse(process.argv);


program.parse(process.argv);
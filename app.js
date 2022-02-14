import { Command } from 'commander';
import SortFiles from './sort.js'


const program = new Command();

program
    .requiredOption('-S, --source <type>', 'source folder for sort')
    .option('-O, --output <type>', 'output folder', './dist')
    .version('0.1.0')


// console.log(process.argv);
program.parse(process.argv);

const { source, output } = program.opts();

console.log(source, output)

try {
    const sort = new SortFiles(output)
    await sort.readFolder(source)
    
} catch (error) {
    console.log(error);
    process.exit(1)
}

console.log('Done');
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

// const m = () => { 
    
// }

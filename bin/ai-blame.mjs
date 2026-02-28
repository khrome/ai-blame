#!/usr/bin/env node
import yargs from 'yargs';
import { normalize, join } from 'node:path';
import { aiBlame } from '../src/index.mjs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).parse();

(async ()=>{
    if(argv.users && argv._[0]) {
        const users = argv.users.split(',');
        let path = normalize(argv._[0]);
        if(path[0] === '.'){
            path = join(process.cwd(), path);
        }
        const { files, commits } = await aiBlame(path, users);
        Object.keys(files).forEach((key)=>{
            const file = files[key].map((line)=>{
                const commit = commits[line.hash];
                if(users.indexOf(commit.author.mail) !== -1){
                    return '  [AI]  '+line.content;
                }
                return '        '+line.content;
            }).join('\n');
            
            console.log(`${key}\n\n${file}\n`)
        });
    }
})();

import { simpleGit, CleanOptions } from 'simple-git';
import { parseBlame } from 'blamejs';
import { blame } from './blame.mjs';

//const git = simpleGit().clean(CleanOptions.FORCE);

export const aiBlame = (target)=>{
    /*blame(target, {
      file: file,
      rev: rev
    }).on('data', function(type, data) {
      // type can be 'line' or 'commit'
      console.log(type, data);
    }).on('error', function(err) {
      console.error(err.message);
      process.exit(1);
    }).on('end', function() {
      console.log('±±±±±±±±±±±±±±±±±±');
      console.log("That's all, folks!");
    });*/
};
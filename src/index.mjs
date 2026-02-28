
import { blame } from './blame.mjs';
import { create as createScanner } from 'scandir';

export const aiBlame = (target, aiAccounts)=>{
    var scandir = createScanner();
    let allCommits = {};
    const files = {};
    const allWork = [];
    scandir.on('file', function(file, stats) {
        if(file.indexOf('/node_modules/') !== -1) return;
        if(file.indexOf('/.git/') !== -1) return;
        console.log(file);
        const lines = [];
        const commits = {};
        const future = new Promise((resolve, reject)=>{
            blame(target+'/.git', {
                file: file,
                rev: 'HEAD'
            }).on('data', function(type, data) {
                switch(type){
                    case 'commit':
                        commits[data.hash] = data;
                        break;
                    case 'line':
                        lines.push(data)
                        break;
                }
            }).on('error', function(err) {
                resolve();
            }).on('end', function() {
                allCommits = {...allCommits, ...commits}
                files[file] = lines;
                resolve();
            });
        });
        allWork.push(future);
    });
    
    scandir.on('error', function(err){
        //console.error(err);
        console.log('ERR');
    });
    const termination = new Promise((resolve, reject)=>{
        scandir.on('end', async function(){
            await Promise.all(allWork);
            resolve({
                commits: allCommits,
                files
            });
        });
    });
    
    scandir.scan({
        dir: target,
        recursive: true,
        filter: /.*/
    });
    
    return termination;
};
const core = require('@actions/core');

async function run(){
    try{
        const username = core.getInput("username");
        const main = require('./main');
        const hashnodeUserWithPosts = await main(username);
        console.log('data', JSON.stringify(hashnodeUserWithPosts, null, 2))
        core.setOutput("data", JSON.stringify(hashnodeUserWithPosts));
    }catch(err){
        console.log(err);
    }
}



module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
    run();
}
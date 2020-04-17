const core = require('@actions/core');
const github = require('@actions/github');

try {
//  throw( new Error("some error message"));

  core.debug('Debug message');
  core.warning('Warning message');
  core.error('Error message');

  const name = core.getInput('who-to-greet');
  core.setSecret(name); //look like *** in logs
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput('time', time.toTimeString());

  core.startGroup('Logging github object');

  console.log(JSON.stringify(github, null, '\t'));
  core.endGroup();

  core.exportVariable('Hello', 'hello');
} catch(error) {
  core.setFailed(error.message)
}

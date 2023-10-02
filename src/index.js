const prompts = require('prompts');
const simpleGit = require('simple-git');

async function main() {
  const response = await prompts({
    name: 'name',
    type: 'text',
    message: 'Project name: (node-typescript-server)',
  });

  const name = response.name !== '' ? response.name : 'node-typescript-server';

  const git = simpleGit();

  await git.clone(
    'https://github.com/kauefraga/node-typescript-server.git',
    name
  );
}

module.exports = main;

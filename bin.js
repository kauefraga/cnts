const prompts = require('prompts');
const simpleGit = require('simple-git');
const c = require('ansi-colors');

async function main() {
  console.log(c.blue('╭─────────────────────────────────╮'));
  console.log(c.blue('│                                 │'));
  console.log(c.blue(`│  ${c.bold.green('create-node-typescript-server')}  │`));
  console.log(c.blue('│                                 │'));
  console.log(c.blue('╰─────────────────────────────────╯'));

  const response = await prompts({
    name: 'name',
    type: 'text',
    message: 'Project name: (node-typescript-server)',
  });

  const name = response.name !== ''
    ? response.name
    : 'node-typescript-server';

  const git = simpleGit();

  try {
    await git.clone(
      'https://github.com/kauefraga/node-typescript-server.git',
      name,
    );
  } catch {
    console.error(
      c.red('You may already have a project with this name. Try another.'),
    );
    process.exit(1);
  }

  console.log(c.green('Done!'));
  console.log(`Dive into ./${name}`)
}

try {
  main();
} catch (error) {
  console.error(error);
}

const replace = require('replace-in-file');
const fs = require('fs-extra');
fs.emptyDirSync('build');
fs.copySync('module', 'build');
const options = {
  files: 'build/**/*.js',
  from: /__VITE_.*?__/gm,
  // dry: true,
  to: (match) => {
    // console.log('MATCH:');
    // console.log(match);
    match = process.env[match.slice(2, match.length - 2)] || '';
    // console.log('TRANSFORM:');
    // console.log(match);
    return match;
  },
};

const contractsInfos = JSON.parse(fs.readFileSync('src/lib/contracts.json').toString());

const chunks = fs.readdirSync('build/_app/chunks/').filter((filename) => filename.startsWith('contracts-'));

for (const chunk of chunks) {
  const contractFile = `build/_app/chunks/${chunk}`;

  const content = fs.readFileSync(contractFile).toString();
  const newContent = content
    .replace('31337', process.env.VITE_CHAIN_ID)
    .replace(/={.*}};/, `=${JSON.stringify(contractsInfos.contracts)};`);

  fs.writeFileSync(contractFile, newContent);
}
replace.sync(options);

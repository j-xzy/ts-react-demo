const tsFaker = require('ts-faker').default;
const chokidar = require('chokidar');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const config = require('../config');

const modelPath = path.resolve(config.srcPath, 'interface/model');
const apiPath = path.resolve(config.srcPath, 'interface/api');


function mock() {
  genMock();
  chokidar.watch([modelPath, apiPath], { ignoreInitial: true }).on('all', (t, p) => {
    genMock();
  });
}

async function genMock() {
  const files = glob.sync(path.resolve(modelPath, '**/*.ts')).concat(
    glob.sync(path.resolve(apiPath, '**/*.ts'))
  );
  const data = await tsFaker(files);
  fs.writeFileSync(path.resolve(config.srcPath, 'mock/data.json'), JSON.stringify(data.IApi, null, 2));
}

module.exports = mock;
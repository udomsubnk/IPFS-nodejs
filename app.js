const IPFS = require('ipfs')
const node = new IPFS()

console.log('eiei')
node.on('ready', () => {
  // Your node is now ready to use \o/
  // stopping a node
  node.stop(() => {
    // node is now 'offline'
  })
})
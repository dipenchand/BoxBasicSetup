const boxSDK = require('box-node-sdk')

const clientID = ''
const clientSecret = ''
const devToken = ''
const folderId = ''


const sdk = new boxSDK({
    clientID: clientID,
    clientSecret: clientSecret
  })
  
const client = sdk.getBasicClient(devToken)

client.users.get(client.CURRENT_USER_ID)
	.then(user => console.log('Hello', user.name, '!'))
	.catch(err => console.log('Got an error!', err))

client.folders.get(folderId)
    .then(folder => {
        console.log(folder)
    })
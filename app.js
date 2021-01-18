const boxSDK = require('box-node-sdk')

const clientID = 'arwuogzgdigt1v38rlvxmir1rlcchs5y'
const clientSecret = 'fFiY4jt7JV810CJH3zbEmGO3VgxhTfE1'
const devToken = '3w9TcEK4Q7CvhiNZisSDdLhXAamGMHW7'
const folderId = '127682215474'


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
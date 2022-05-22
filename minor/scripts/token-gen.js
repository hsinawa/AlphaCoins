// Contracts
const Token = artifacts.require("Token")
const Exchange = artifacts.require("Exchange")

// Utils
const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000' 
const ether = (n) => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
}
const tokens = (n) => ether(n)

const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


module.exports = async function(callback) {
    try {
        console.log('Generating Tokens ')
      
      const accounts = await web3.eth.getAccounts()
  
      
      const token = await Token.deployed()
      console.log('Token created for account : ', token.address)
  
      
      const exchange = await Exchange.deployed()

      const sender = accounts[0]
      const receiver = accounts[1]
      let amount = web3.utils.toWei('10000', 'ether') 
  
      await token.transfer(receiver, amount, { from: sender })

 

  
     
      const user1 = accounts[3]
      const user2 = accounts[4]
  
    
     console.log('Generating 10 tokens')

     for(var i=1;i<=10;i++)
     {
         console.log(` ${i} token created with address ${user1+i} and pvt key ${user2 +i}  `)

         await wait(10*i)
     }
     
   
    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }
  

# Secure-document-storage-system-using-Web3

**This project is an extended version of [@HydraPhyzer](https://github.com/HydraPhyzer) Decentralized-Google-Drive with extra security to the files** 


# Points to remember

**Use node version 18.17.1 LTS**<br>
**Create an account in Pinata copy the key requirements and save it in another file for further use**<br>
**You need to enter the required pinata content in the .env files** <br>
**While creating an API key in Pinata don't forget to turn off the Limit Max Uses** <br>
**Install meta mask in the browser in which you want to run the application and add a custom network in it to your local hardhat blockchain**

# Process involved in adding a network manually in meta mask
Open the meta mask on the left side top corner there will be a drop-down to select a network <br>
At the bottom of the drop-down, there will be an option named Add network click on it <br>
Now click on Add Network manually at the bottom of the page and give it a name as your wish <br>
The chain id is <br>
```
1337
```
The currency symbol is <br>
```
ETH
```
The RPC URL will be the port in which your local hardhat blockchain is running<br>
<br>

# Step-by-step process to run the project
In the main project directory  run the following command <br>
```
npx hardhat node
```
<br>
Now start another terminal in the same directory and run the following command to deploy the smart contract<br>

```
npx hardhat run Scripts/Deploy.js --network localhost
```
Now open one new  terminal in the server folder and run the following command<br>
```
node server.js
```
Now move to the frontend folder in the terminal you have deployed the smart contract using the following command<br>
```
cd Frontend
```
Now run the following command to run the application<br>
```
npm start
```

import './App.css';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useState } from 'react';

function App() {

  const { authenticate, isAuthenticated, user, logout, Moralis } = useMoralis();
  const executeFunction = useWeb3ExecuteFunction();
  const abi = [
    {
      "inputs": [],
      "name": "donate",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getContractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const [balance, setBalance] = useState("");

  const donate = async (val) => {
    let options = {
      abi: abi,
      contractAddress: "0x7C9fAD81ff18EA799387e08A6893CBFD0305e2c2",
      functionName: "donate",
      params: {},
      msgValue: Moralis.Units.ETH(val)
    }

    await executeFunction.fetch({
      params: options
    })
  }

  const value = async => {
    let readOptions = {
      contractAddress: "0x7C9fAD81ff18EA799387e08A6893CBFD0305e2c2",
      functionName: "getContractBalance",
      abi: abi
    }
    executeFunction.fetch({
      params: readOptions,
      onSuccess: (response) => {
        console.log(response.toString())
        setBalance(response.toString())
      },
      onError: (err) => {
        console.log(err);
      }
    })
  }

  if (!isAuthenticated) {
    return (
      <div className='authenticate'>
        <button onClick={() => authenticate()}>Connect Metamask</button>
      </div>

    );
  }

  return (
    <div>
      <div className='authenticate'>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <h1 className='welcome'>Welcome: {user.get("username")}</h1>
      <h2 className='balance'>Contract Balance: {balance} Wei </h2>
      <div className='donate'>
        <button className='donate-btn' onClick={() => donate(0.01)}>Donate .01 ETH</button>
        <button className='donate-btn' onClick={() => value()}>Get Contract Balance</button>
      </div>
    </div>
  );
}

export default App;

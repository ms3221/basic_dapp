import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import ABI from '../src/ABI/abi'
import {useEffect,useState} from 'react';

function App() {
	const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [tsResult, setTx] = useState('');

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
            try {
                const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
                setWeb3(web);
            } catch (err) {
                console.log(err);
            }
        }
    }, []);

    const connectWallet = async () => {
      const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
      });
   
      setAccount(accounts[0]);
  };
  

    
  
  const transaction = async ()=>{
    const params = [];

    const contract = new web3.eth.Contract(ABI,'0xf44f288eBF254372A5d1031bfcbf5D87a4318807')
    const hash = await web3.eth.sendTransaction({
      to:'0xf44f288eBF254372A5d1031bfcbf5D87a4318807',
      from:account,
      // value: web3.utils.toWei('1','ether'),
      gasPrice: await web3.eth.getGasPrice(),
      data: contract.methods.setName('jun').encodeABI()
     })
    //const result = await contract.methods.name().call();

    //? event관련 코드 
    contract.events.Name
    setTx(await contract.methods.name().call())
  }
    


  return (
    <div className="App">
      <div>
        <h1>안녕하세요 우리는 Dapp을 제작중에 있습니다</h1>
        <button onClick={connectWallet} >
          connectWallet
        </button>
       
        <h1>{account}</h1>

        <button onClick={transaction} >
          transaction
        </button>

        <h1>{tsResult}</h1>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
import { generateMnemonic } from "bip39";
import SolanaWallet from './solanaWallet';


function App() {
  const [mnemonic, setmnemonic] = useState("")

  function createSeed() {
    const mnemonic = generateMnemonic(256);
    setmnemonic(mnemonic)
  }

  return (
    <>
      <button onClick={createSeed}>
        create seed
      </button>

       <p> seed : {mnemonic} </p>

       <SolanaWallet mnemonic={mnemonic} />

    </>
  )
}

export default App

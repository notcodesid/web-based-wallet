import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export default function SolanaWallet({mnemonic}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    function SolanaWallet( { mnemonic }) {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
    }
    return (
        <>
        <button onClick={SolanaWallet}>
            add wallet
        </button>

        <p> public keys : {publicKeys.map((key, index) => <span key={index}>{key.toBase58()} </span>)}</p>
        <p> current index : {currentIndex} </p>
        
        </>
    )
}
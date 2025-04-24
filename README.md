# Web-Based Solana Wallet

A minimal web-based wallet built with React and Vite for generating Solana mnemonics and deriving public keys using BIP39 and Solana libraries. This project demonstrates how to create and manage Solana wallet addresses securely in the browser.

## Features
- Generate a new BIP39 mnemonic (seed phrase)
- Derive Solana wallet public keys from the mnemonic using standard derivation paths
- Add multiple wallets (public keys) from a single mnemonic
- Simple and modern React UI

## Tech Stack
- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 6
- [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/)
- [bip39](https://github.com/bitcoinjs/bip39)
- [ed25519-hd-key](https://github.com/paulmillr/ed25519-hd-key)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/notcodesid/web-based-wallet.git
   cd web-based-wallet
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
To start the development server:
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Lint the Code
```bash
npm run lint
```

## Usage
1. Click **"create seed"** to generate a new BIP39 mnemonic (seed phrase).
2. The generated seed will be displayed.
3. Click **"add wallet"** to derive a new Solana public key from the mnemonic. Each click adds a new wallet (increments the derivation path index).
4. The list of derived public keys and the current index are shown.

## Project Structure
```
web-based-wallet/
├── public/              # Static assets
├── src/
│   ├── App.jsx          # Main app component
│   ├── solanaWallet.jsx # Wallet logic and UI
│   ├── main.jsx         # React entry point
│   ├── App.css, index.css # Styles
│   └── assets/          # Images and other assets
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # Project documentation
```

## License
This project is licensed under the MIT License.

---
Inspired by the Solana developer ecosystem.

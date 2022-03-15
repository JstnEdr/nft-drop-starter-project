# buildspace Solana NFT Drop Project
### Welcome 👋
To get started with this course, clone this repo and follow these commands:

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project
4. Start coding!

### What is the .vscode Folder?
If you use VSCode to build your app, we included a list of suggested extensions that will help you build this project! Once you open this project in VSCode, you will see a popup asking if you want to download the recommended extensions :).

### Questions?
Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/CO77556be5-25e9-49dd-a799-91a2fc29520e) and link your Discord account so you can get access to helpful channels and your instructor!

## Setup Solana CLI
- Run Shell Command: `sh -c "$(curl -sSfL https://release.solana.com/stable/install)"`
- Check Version: `solana --version`
- Set Config: `solana config set --url devnet`
- Check Config: `solana config get`

## Setup Metaplex
- Clone Metaplex: `git clone -b v1.1.1 https://github.com/metaplex-foundation/metaplex.git`
- Install Metaplex: `yarn install --cwd ~/metaplex/js/ --network-timeout 600000`

## Setting up a Solana keypair
- Generate Config: `solana-keygen new --outfile ~/.config/solana/devnet.json`
- Set Config: `solana config set --keypair ~/.config/solana/devnet.json`
- Confirm Config: `solana config get`
- Airdrop SOL: `solana airdrop 2`
- Check Balance: `solana balance`

## Uploading
Files must start with 0.png. 

- delete `.cache` directory
- `ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet -k ~/.config/solana/devnet.json -cp config.json ./assets`
-  

ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -cp config.json \
    -c example \
    ./assets
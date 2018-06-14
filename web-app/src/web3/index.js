/* explicit import path due to module name collision */
import Web3, { providers } from "../../node_modules/web3"

// const address = "http://localhost:8545"
// const provider = new providers.HttpProvider(address)

const address = "ws://localhost:8545"
const provider = new providers.WebsocketProvider(address)

const web3 = new Web3(provider)

export default web3
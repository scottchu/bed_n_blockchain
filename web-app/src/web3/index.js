/* explicit import path due to module name collision */
import Web3, { providers } from "../../node_modules/web3"

export contracts from "./contracts"

const provider = new providers.WebsocketProvider("ws://localhost:8545")

const web3 = new Web3(provider)

export default web3
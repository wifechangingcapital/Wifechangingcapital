import React from 'react'

import DashBoardComponent from './DashBoardComponent'

export default function DashBoardPage() {
  return <DashBoardComponent></DashBoardComponent>
}

//// to anyone attempting to sort through the code welcome! here is a small breakdown of the design
// The base of the app in the uniswapv2 interface as you can prbrobaly tell
// We took the orignal Dapp and replaced athe vote page with this Dashboard page and folder.
//The DashBoard is made of 3 components all arranged in the DashBaord component
// the three compoents are Funcalculations,Claimtransaction,and Usertokenbalance

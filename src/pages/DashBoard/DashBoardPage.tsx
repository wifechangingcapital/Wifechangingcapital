import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React from 'react'

import DashBoardComponent from './DashBoardComponent'

export default function DashBoardPage() {
  const { account, chainId } = useActiveWeb3React()

  return <DashBoardComponent></DashBoardComponent>
}

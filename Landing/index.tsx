//import useScrollPosition from '@react-hook/window-scroll'
import React from 'react'

//import BACKGROUND from '../../assets/images/BACKGROUND.mp4'
//import styled from 'styled-components/macro'
import Intro from './introTop'
//import LongMenu from './Longmenu'
import Timelinetest from './Roadmap'
import Teamsection from './Team'
import Companyinfo from './Tokenomics'

//const StyledDropdown = styled.button`
//  position: relative;
//  right: 500px;
// down: 50px;
//`
//<StyledDropdown>
//<LongMenu></LongMenu>
//</StyledDropdown>
export default function Landing() {
  return (
    <>
      <div className={'home'}>
        <Intro></Intro>
      </div>
      <div className={'Tokenomics'}>
        <Companyinfo></Companyinfo>
      </div>
      <div className={'Timeline'}>
        <Timelinetest></Timelinetest>
      </div>
      <p></p>
      <div className={'Teamsection'}>
        <Teamsection></Teamsection>
      </div>
    </>
  )
}

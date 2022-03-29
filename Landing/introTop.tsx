import './styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
import styled from 'styled-components/macro'

//import testvid from '../../assets/images/testvid.mp4'
import { isMobile } from '../../utils/userAgent'
const fadeOut = styled.div`
  opacity: 0;
  width: 0;
  height: 0;
  transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 2s;
`

const fadeIn = styled.div`
  opacity: 1;
  width: 100px;
  height: 100px;
  transition: width 0.5s, height 0.5s, opacity 2s 2s;
`
const StyledButton = styled.button`
  position: relative;
  bottom: 15px;
  left: 50px;
  display: 'block';
  margin-right: 50px;
  text-color: #ffffff;
  padding: 10px 40px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ff9d1c;
      color: black;
`

export default function Intro() {
  //const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 5 })
  const props = useSpring({
    config: { duration: 4000, mass: 1, tension: 210, friction: 20 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 5,
  })
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 5) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return sethidden(false)
      } else {
        try {
          return sethidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
  }, [ScrollY])
  if (isMobile)
    return (
      <>
        <div className={'flexbox-vertical-container'}>
          <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
            <div style={{ position: 'relative', left: 60, transition: 'ease-in' }}>
              <h1> AnimeVerse </h1>
              <h2> Buy on Uniswap</h2>
              <StyledButton> Buy </StyledButton>
            </div>
          </animated.div>
          <div className={'flexbox-vertical-container-video'}></div>
        </div>
      </>
    )
  else
    return (
      <div className={hidden ? fadeIn : fadeOut}>
        <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
          <div style={{ position: 'relative', right: 200, bottom: 250, transition: 'ease-in' }}>
            <h1> AnimeVerse </h1>
            <h2> Buy on Uniswap</h2>
            <StyledButton> Buy </StyledButton>
          </div>
        </animated.div>
      </div>
    )
}

import './styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/macro'

import { GreyCard } from '../../components/Card'
import { isMobile } from '../../utils/userAgent'
const StyledText = styled.text`
  position: relative;
  font-size: 32px;
  font-weight: bold;
  text-decoration: underline solid rgb(68, 68, 68);
  text-align: center;
  font-family: Verdana, sans-serif;
`

const StyledText2 = styled.text`
  position: relative;
  font-size: 24x;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText3 = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText4 = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText5 = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText6 = styled.text`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText7 = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText8 = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`
const StyledText9 = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`

export default function Companyinfo() {
  const [hidden, sethidden] = useState(Boolean)
  const [hidden2, set2hidden] = useState(Boolean)
  const [hidden3, set3hidden] = useState(Boolean)
  const ScrollY = useScrollPosition()
  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
    delay: 2,
  })
  const transition2 = useTransition(!hidden2, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 0,
  })
  const transition3 = useTransition(!hidden3, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 0,
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 30) {
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
    async function Is2hidden() {
      if (ScrollY < 35) {
        return set2hidden(true)
      } else {
        try {
          return set2hidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    async function Is3hidden() {
      if (ScrollY < 25) {
        return set3hidden(true)
      } else {
        try {
          return set3hidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
    Is2hidden()
    Is3hidden()
  }, [ScrollY])
  // <div style={{ transition: 'ease-in-ease-out, 4s' }} className={hidden ? 'fadeIn' : 'fadeOut'}> line 111
  if (isMobile)
    return (
      <>
        <div className={'flexbox-vertical-container'}>
          <div className={'flexbox-vertical-container-intro'}>
            {transition2.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props} key={key}>
                    <div className={'animate__animated animate__backInRight'}>
                      <h2>
                        <h1 style={{ textAlign: 'center', position: 'relative' }} className={StyledText}>
                          Our Vision
                        </h1>
                      </h2>
                      <GreyCard
                        className={'borderedCard'}
                        $borderRadius={'6px'}
                        overflow={'hidden'}
                        style={{
                          textAlign: 'center',
                          position: 'relative',
                          borderRadius: '6px',
                          overflow: 'hidden',
                        }}
                        backgroundColor={'transparent'}
                      >
                        <h2 style={{ textAlign: 'center', position: 'relative' }}>
                          {' '}
                          <h2>Welcome to the AnimeVerse! </h2>A new community based utility token in the Defi Space. As
                          some may know Anime communities have developed a strong foundation on the blockchain. There
                          have been many successful anime tokens with unique use cases and communities, but all separate
                          from another. AnimeVerse is a concept that is the result of merging all the Anime universes.
                          Our vision for this project is to build a community full of Anime and Crypto enthusiasts from
                          all over together as one.
                        </h2>
                      </GreyCard>
                      {''}
                      <p></p>
                      <p></p>
                    </div>
                  </animated.div>
                )
            )}
          </div>
          {transition2.map(
            ({ item, key, props }) =>
              item && (
                <animated.div style={props} key={key}>
                  <div className={'animate__animated animate__animate__fadeInDown'}>
                    <h2>
                      <h1 style={{ textAlign: 'center', position: 'relative' }} className={StyledText}>
                        Tokenomics
                      </h1>
                    </h2>
                    <h2 style={{ textAlign: 'center', position: 'relative' }} className={StyledText2}>
                      Total supply 1,000,000,000,000 (1T)
                    </h2>
                    {''}
                    <p></p>
                    <p></p>
                  </div>
                </animated.div>
              )
          )}
          {transition3.map(
            ({ item, key, props }) =>
              item && (
                <animated.div style={props} key={key}>
                  <div className={'animate__animated animate__fadeInDown'}>
                    <div style={{ textAlign: 'center', position: 'relative' }}>
                      <h3>
                        <StyledText6>Buy Tax 9.8%</StyledText6>
                      </h3>
                      <GreyCard backgroundColor={'transparent'}>
                        <h3>
                          <StyledText3>Marketing wallet 5.8%</StyledText3>
                        </h3>
                        <h3>
                          <StyledText4>Liquidity 0.2%</StyledText4>
                        </h3>
                        <h3>
                          <StyledText5>ETH Reflections 0.2%</StyledText5>
                        </h3>
                      </GreyCard>
                    </div>
                  </div>
                </animated.div>
              )
          )}
          <p></p>
          {transition3.map(
            ({ item, key, props }) =>
              item && (
                <animated.div style={props} key={key}>
                  <div className={'animate__animated animate__backInRight'}>
                    <div style={{ textAlign: 'center', position: 'relative' }}>
                      <h3>
                        <StyledText6>Sell Tax 9.8%</StyledText6>
                      </h3>
                      <GreyCard backgroundColor={'transparent'}>
                        <h3>
                          <StyledText7>Marketing wallet 5.8%</StyledText7>
                        </h3>
                        <h3>
                          <StyledText8>0.2% Liquidity</StyledText8>
                        </h3>
                        <h3>
                          <StyledText9>0.2% ETH Reflections</StyledText9>
                        </h3>
                      </GreyCard>
                    </div>
                  </div>
                </animated.div>
              )
          )}
        </div>
      </>
    )
  else
    return (
      <>
        <div className={'flexbox-container'}>
          <div className={'flexbox-vertical-container-intro'}>
            {transition2.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props} key={key}>
                    <div className={'animate__animated animate__backInRight'}>
                      <h2>
                        <h1 style={{ textAlign: 'center', position: 'relative', right: 65 }} className={StyledText}>
                          Our Vision
                        </h1>
                      </h2>
                      <GreyCard
                        className={'borderedCard'}
                        $borderRadius={'6px'}
                        overflow={'hidden'}
                        style={{
                          textAlign: 'center',
                          position: 'relative',
                          right: 65,
                          borderRadius: '6px',
                          overflow: 'hidden',
                        }}
                        backgroundColor={'transparent'}
                      >
                        <h2 style={{ textAlign: 'center', position: 'relative', right: 0 }}>
                          {' '}
                          <h2>Welcome to the AnimeVerse! </h2>A new community based utility token in the Defi Space. As
                          some may know Anime communities have developed a strong foundation on the blockchain. There
                          have been many successful anime tokens with unique use cases and communities, but all separate
                          from another. AnimeVerse is a concept that is the result of merging all the Anime universes.
                          Our vision for this project is to build a community full of Anime and Crypto enthusiasts from
                          all over together as one.
                        </h2>
                      </GreyCard>
                      {''}
                      <p></p>
                      <p></p>
                    </div>
                  </animated.div>
                )
            )}
          </div>
          <div className={'flexbox-vertical-container'}>
            {transitions.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props} key={key}>
                    <div className={'animate__animated animate__animate__fadeInDown'}>
                      <h2>
                        <h1 style={{ textAlign: 'center', position: 'relative', left: 65 }} className={StyledText}>
                          Tokenomics
                        </h1>
                      </h2>
                      <h2 style={{ textAlign: 'center', position: 'relative', left: 65 }} className={StyledText2}>
                        Total supply 1,000,000,000,000 (1T)
                      </h2>
                      {''}
                      <p></p>
                      <p></p>
                    </div>
                  </animated.div>
                )
            )}
            {transition2.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props} key={key}>
                    <div className={'animate__animated animate__fadeInDown'}>
                      <div style={{ textAlign: 'center', position: 'relative', left: 65 }}>
                        <h3>
                          <StyledText6>Buy Tax 9.8%</StyledText6>
                        </h3>
                        <GreyCard backgroundColor={'transparent'}>
                          <h3>
                            <StyledText3>Marketing wallet 5.8%</StyledText3>
                          </h3>
                          <h3>
                            <StyledText4>Liquidity 0.2%</StyledText4>
                          </h3>
                          <h3>
                            <StyledText5>ETH Reflections 0.2%</StyledText5>
                          </h3>
                        </GreyCard>
                      </div>
                    </div>
                  </animated.div>
                )
            )}
            <p></p>
            {transition3.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props} key={key}>
                    <div className={'animate__animated animate__backInRight'}>
                      <div style={{ textAlign: 'center', position: 'relative', left: 65 }}>
                        <h3>
                          <StyledText6>Sell Tax 9.8%</StyledText6>
                        </h3>
                        <GreyCard backgroundColor={'transparent'}>
                          <h3>
                            <StyledText7>Marketing wallet 5.8%</StyledText7>
                          </h3>
                          <h3>
                            <StyledText8>0.2% Liquidity</StyledText8>
                          </h3>
                          <h3>
                            <StyledText9>0.2% ETH Reflections</StyledText9>
                          </h3>
                        </GreyCard>
                      </div>
                    </div>
                  </animated.div>
                )
            )}
          </div>
        </div>
      </>
    )
}

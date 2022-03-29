import './styles.css'

import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'

const CompanyRoadmap = () => {
  const [hidden, sethidden] = useState(Boolean)
  const [hidden2, set2hidden] = useState(Boolean)
  const [hidden3, set3hidden] = useState(Boolean)
  const [hidden4, set4hidden] = useState(Boolean)
  const [hidden5, set5hidden] = useState(Boolean)
  const ScrollY = useScrollPosition()
  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1,
  })
  const transition2 = useTransition(!hidden2, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1,
  })
  const transition3 = useTransition(!hidden3, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1,
  })
  const transition4 = useTransition(!hidden4, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1,
  })
  const transition5 = useTransition(!hidden5, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1,
  })
  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 25) {
        return sethidden(true)
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
      if (ScrollY < 45) {
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
      if (ScrollY < 55) {
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
    async function Is4hidden() {
      if (ScrollY < 75) {
        return set4hidden(true)
      } else {
        try {
          return set4hidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    async function Is5hidden() {
      if (ScrollY < 85) {
        return set5hidden(true)
      } else {
        try {
          return set5hidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
    Is2hidden()
    Is3hidden()
    Is4hidden()
    Is5hidden()
  }, [ScrollY])
  // <div style={{ transition: 'ease-in-ease-out, 4s' }} className={hidden ? 'fadeIn' : 'fadeOut'}> line 111
  return (
    <>
      <div className={'flexbox-vertical-container'}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <h1
                  style={{
                    transition: 'ease-in',
                    maxWidth: '150px',
                    maxHeight: '150px',
                    height: 'auto',
                    width: 'auto',
                  }}
                >
                  {' '}
                  Our Vision{' '}
                </h1>
              </animated.div>
            )
        )}

        {transition2.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <h1>Phase 1:</h1>
                <div className={'flexbox-vertical-container-text'}>
                  {' '}
                  Token Stealth Launch Website Reveal Social Media Presence Paid Marketing 500 Holders Preview of
                  Limited NFT Collection Initiate Smart Contract Audit Exclusive 1% Club Reveal Release of Limited NFT
                  Collection{' '}
                </div>
              </animated.div>
            )
        )}
        {transition3.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <h1>Phase 2:</h1>
                <div className={'flexbox-vertical-container-text'}>
                  1000 Holders CG/CMC Listing + Others Aggresive Marketing Champaign Exchange Listing Hidden Utility use
                  case WhitePaper Release
                </div>
              </animated.div>
            )
        )}
        {transition4.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <h1> Phase 3:</h1>
                <div className={'flexbox-vertical-container-text'}>
                  {' '}
                  5,000 Holders Partnerships Cross-Chain Game Development Metaverse Development{' '}
                </div>
              </animated.div>
            )
        )}
        {transition5.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <h1> Phase 4:</h1>
                <div className={'flexbox-vertical-container-text'}>
                  {' '}
                  10,000+ Holders Animeverse Game Preview Animeverse Game Release Metaverse Integration{' '}
                </div>
              </animated.div>
            )
        )}
      </div>
    </>
  )
}

export default CompanyRoadmap
//wrap each timeline item in an animated divand its hidden feature is switched on and off
//based on the scroly position

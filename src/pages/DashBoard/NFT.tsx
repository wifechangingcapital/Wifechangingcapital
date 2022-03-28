import './styles.css'

//import './animate.css'
import { DarkCard, LightGreyCard } from 'components/Card'
import React from 'react'
import styled from 'styled-components/macro'
const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 22px;
  text-color: #000000;
  text-align: 'center';
  font-weight: bold;
`

export default function NFTtable() {
  return (
    <>
      <div className={'darktext'}>
        <div className="flexbox-container" style={{ position: 'relative' }}>
          <LightGreyCard
            style={{
              position: 'relative',
              marginRight: '50px',
              left: 150,
              maxWidth: 600,
              width: 500,
              boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
            }}
          >
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
              Metrics
            </h1>
            <div className="flexbox-container">
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </div>
            <p></p>
            <p></p>
            <div className="flexbox-container">
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </div>
          </LightGreyCard>

          <LightGreyCard
            style={{
              position: 'relative',
              left: 150,
              maxWidth: 600,
              width: 500,
              boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
            }}
          >
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
              NFT table
            </h1>
            <div className="flexbox-container">
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </div>
            <p></p>
            <p></p>
            <div className="flexbox-container">
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </div>
          </LightGreyCard>
        </div>
      </div>
    </>
  )
}

import { Col, Row } from 'antd'
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
      <div style={{ position: 'relative', left: 75 }}>
        <LightGreyCard style={{ maxWidth: 600, width: 500, boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
            NFT Table
          </h1>
          <Row>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </Col>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </Col>
          </Row>
          <p></p>
          <p></p>
          <Row>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </Col>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </Col>
          </Row>
        </LightGreyCard>
      </div>
    </>
  )
}

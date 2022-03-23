import { Table } from 'antd'
import { LightGreyCard } from 'components/Card'
import React from 'react'
import styled from 'styled-components/macro'

const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 22px;
  text-color: #000000;
  text-align: 'center';
  font-weight: bold;
`

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Amount (ETH)',
    dataIndex: 'amount',
  },
  {
    title: 'Amount (USD)',
    dataIndex: 'amount',
  },
  {
    title: 'Tx hash',
    dataIndex: 'address',
  },
]
const data = [
  {
    key: '1',
    date: '2022/06/21',
    amount: '4058',
    address: '0x758f6a054a0f16e6be872c1d9c62b3c4d2f89b4d446340ee2888b5b7aaf33848',
  },
  {
    key: '2022/06/21',
    date: '10$eth',
    amount: '10$usd',
    address: '0x758f6a054a0f16e6be872c1d9c62b3c4d2f89b4d446340ee2888b5b7aaf33848',
  },
  {
    key: '3',
    date: 'Joe Black',
    amount: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    date: 'patmc',
    amount: 45,
    address: 'mr man',
  },
]
export default function Buyback() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>BuyBack Table</h1>
        <LightGreyCard style={{ top: 200, bottom: 200, left: 200, right: 200 }}>
          <Styledtext>
            <Table columns={columns} dataSource={data} size="large" />
          </Styledtext>
        </LightGreyCard>
      </div>
    </>
  )
}

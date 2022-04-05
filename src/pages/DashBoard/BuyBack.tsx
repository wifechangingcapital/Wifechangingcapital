import './BuyBack.css'
import 'animate.css'

import React from 'react'

export default function BuybackTable() {
  return (
    <>
      <body>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
          Buyback Table
        </h1>
        <div className={'animate__animated animate__backInRight'}>
          <table id="customers" style={{ position: 'relative', left: 100 }}>
            <tr>
              <th>Date</th>
              <th>Amount(ETH)</th>
              <th>Amount(USD)</th>
              <th>Tx hash</th>
            </tr>
            <tr>
              <td>2022-03-29</td>
              <td>0.69</td>
              <td>$2344</td>
              <td>
                {' '}
                <a href="https://etherscan.io/tx/0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16">
                  0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16
                </a>{' '}
              </td>
            </tr>
            <tr>
              <td>2022-3-29</td>
              <td>.32</td>
              <td>$1,147</td>
              <td>
                {' '}
                <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                  0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751
                </a>{' '}
              </td>
            </tr>
            <tr>
              <td>2022-3-29</td>
              <td>.42</td>
              <td>$1,447</td>
              <td>
                {' '}
                <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                  0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751
                </a>{' '}
              </td>
            </tr>
            <tr>
              <td>2022-3-29</td>
              <td>.499</td>
              <td>$1,692</td>
              <td>
                {' '}
                <a href="hhttps://etherscan.io/tx/0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b">
                  0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b
                </a>{' '}
              </td>
            </tr>
            <tr>
              <td>2022-3-29</td>
              <td>.61</td>
              <td>$1,751</td>
              <td>
                {' '}
                <a href="https://etherscan.io/tx/0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4">
                  0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4
                </a>{' '}
              </td>
            </tr>
            <tr>
              <td>2022-4-3</td>
              <td>.76</td>
              <td>$2686</td>
              <td>
                {' '}
                <a href="https://etherscan.io/tx/0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46">
                  0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46
                </a>{' '}
              </td>
            </tr>
          </table>
        </div>
      </body>
    </>
  )
}

import React from "react"
import classNames from "classnames"

import "./PoolOverview.scss"

interface Props {
  data: {
    title: string
    tokens: Array<{ name: string; icon: string }>
    APY: number
    saddAPY: string
    volume: number
  }
}

function PoolOverview({ data }: Props) {
  return (
    <div className="poolOverview">
      <h4>Pool Overview</h4>
      <div className="table">
        <div className="left">
          <span className="title">{data.title}</span>
          <span style={{ marginRight: "8px" }}>[</span>
          {data.tokens.map((token, index) => (
            <div className="token" key={index}>
              <img alt="" src={token.icon} />
              <span>{token.name}</span>
            </div>
          ))}
          <span style={{ marginLeft: "-8px" }}>]</span>
        </div>

        <div className="right">
          <div className="Apy">
            <span className="label">APY</span>
            <span
              className={
                classNames({ plus: data.APY }) +
                classNames({ minus: !data.APY })
              }
            >
              {data.APY ? "+" + data.APY : "-" + data.APY}
            </span>
          </div>
          <div className="saddApy">
            <span className="label">SADD APY</span>
            <span>{data.saddAPY}</span>
          </div>
          <div className="volume">
            <span className="label">Volume</span>
            <span>${data.volume}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolOverview
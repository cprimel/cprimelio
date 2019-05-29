import React, { useEffect } from 'react'
import drawStreamGraph from './draw-stream-graph'

const StreamGraph = ({ n, m }) => {
  useEffect(() => {
    drawStreamGraph(n, m)
  })

  return <div className="stream-graph" />
}
export default StreamGraph

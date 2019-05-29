import React, { useEffect } from 'react'
import drawStreamGraph from './draw-stream-graph'

const StreamGraph = ({ n, m, width, height }) => {
  useEffect(() => {
    drawStreamGraph(n, m, width, height)
  })

  return <div className="stream-graph" />
}
export default StreamGraph

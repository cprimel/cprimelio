import * as d3 from 'd3'
import bumpLayer from './helpers'

const drawStreamGraph = (n, m, width, height) => {
  d3.select('.stream-graph > *').remove()

  const stack = d3
    .stack()
    .keys(d3.range(n).map(d => `layer${d}`))
    .offset(d3.stackOffsetWiggle)

  const matrix0 = d3.range(m).map(d => {
    return { x: d }
  })
  const matrix1 = d3.range(m).map(d => {
    return { x: d }
  })

  const getRandomLayers = (n, m, height) => {
    d3.range(n).map(d => {
      bumpLayer(m, matrix0, d)
    })
    d3.range(n).map(d => {
      bumpLayer(m, matrix1, d)
    })

    const layers = []
    layers[0] = stack(matrix0)
    layers[1] = stack(matrix1)

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(layers[0].concat(layers[1]), layer => d3.min(layer, d => d[0])),
        d3.max(layers[0].concat(layers[1]), layer => d3.max(layer, d => d[1])),
      ])
      .range([height, 0])

    return [layers, y]
  }

  const [layers, y] = getRandomLayers(n, m, height)

  const x = d3
    .scaleLinear()
    .domain([0, m - 1])
    .range([0, width])

  const z = d3.interpolateCool

  const area = d3
    .area()
    .x((d, i) => x(d.data.x))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]))

  const svg = d3
    .select('.stream-graph')
    .append('svg')
    .attr('height', height)
    .attr('width', width)

  const repeat = () => {
    let n = 0

    d3.selectAll('path')
      .each(() => {
        n++
      })
      .data(() => {
        const [layers] = getRandomLayers(n, m, height)

        const d = layers[1]
        layers[1] = layers[0]
        return (layers[0] = d)
      })
      .transition()
      .ease(d3.easeQuadInOut)
      .duration(2000)
      .attr('d', area)
      .on('end', () => {
        n--
        if (!n) {
          repeat()
        }
      })
  }

  const paths = svg.selectAll('path').data(layers[0])

  paths
    .enter()
    .append('path')
    .attr('d', area)
    .attr('fill', () => z(Math.random()))
  paths.exit().remove()
  repeat()
}

export default drawStreamGraph

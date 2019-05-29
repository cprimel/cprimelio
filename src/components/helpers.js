const bumpLayer = (n, matrix, layer) => {
  const bump = a => {
    const x = 1 / (0.1 + Math.random())
    const y = 2 * Math.random() - 0.5
    const z = 10 / (0.1 + Math.random())
    for (let i = 0; i < n; ++i) {
      const w = (i / n - y) * z
      a[i] += x * Math.exp(-w * w)
    }
  }
  const a = []
  for (let i = 0; i < n; ++i) a[i] = 0
  for (let i = 0; i < 5; ++i) bump(a)
  return a.forEach((d, i) => {
    matrix[i][`layer${layer}`] = Math.max(0, d) + 1
  })
}

export default bumpLayer

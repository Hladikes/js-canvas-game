const Direction = {
  TOP: { dx: 0, dy: -1 },
  RIGHT: { dx: 1, dy: 0 },
  DOWN: { dx: 0, dy: 1 },
  LEFT: { dx: -1, dy: 0 },
  STAY: { dx: 0, dy: 0 },
}

Object.freeze(Direction)
export default Direction
function generateConfig(blockSize = 10, sizeCoefficient = 1, aspectRatio = [ 16, 9 ]) {
  const BLOCK_SIZE = blockSize
  const SIZE_COEFFICIENT = sizeCoefficient
  const ASPECT_RATIO = aspectRatio
  const TILES_WIDTH = ASPECT_RATIO[0] * SIZE_COEFFICIENT
  const TILES_HEIGHT = ASPECT_RATIO[1] * SIZE_COEFFICIENT 
  const GAME_WIDTH = TILES_WIDTH * BLOCK_SIZE
  const GAME_HEIGHT = TILES_HEIGHT * BLOCK_SIZE

  return {
    BLOCK_SIZE,
    SIZE_COEFFICIENT,
    ASPECT_RATIO,
    TILES_WIDTH,
    TILES_HEIGHT,
    GAME_WIDTH,
    GAME_HEIGHT
  }
}

const Config = generateConfig(64, 1, [ 18, 12 ])
export default Config
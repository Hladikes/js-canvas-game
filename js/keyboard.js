export const keyboard = (() => {
  document.addEventListener('keydown', keyHandler);
  document.addEventListener('keyup', keyHandler);

  const keyboard = {
    right: false,
    left: false,
    up: false,
    down : false,
  }

  function keyHandler({ key, type }) {
    const state = (type === 'keydown')
    key = key.toLowerCase()
    if (key === 'k') keyboard.k = state
    if (key === 'o') keyboard.o = state
    if (key === 'w') keyboard.up = state
    if (key === 's') keyboard.down = state
    if (key === 'a') keyboard.left = state
    if (key === 'd') keyboard.right = state
  }

  return keyboard
})()
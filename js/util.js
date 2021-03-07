export function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

// https://stackoverflow.com/a/1349426/4396543
export function generateId(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
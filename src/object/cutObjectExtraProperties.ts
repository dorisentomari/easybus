export function cutObjectExtraProperties(source: object = {}, target: object = {}) {
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (!source.hasOwnProperty(key)) {
        delete target[key];
      }
    }
  }
}

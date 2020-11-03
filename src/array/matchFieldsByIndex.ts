export function matchFieldsByIndex(
  fields: Array<string | number>,
  dataList: Array<Array<any>>,
  key: string,
) {
  const result = {};
  for (let i = 0; i < dataList.length; i++) {
    const data = dataList[i];
    const obj = {};
    for (let j = 0; j < fields.length; j++) {
      const field = fields[j];
      obj[field] = data[j];
      if (field === key) {
        result[data[j]] = obj;
      }
    }
  }
  return result;
}

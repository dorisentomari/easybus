// 注意 key 必须是唯一的值，类似于 id，如果 key 不唯一，则会发生覆盖，顺序获取到的值，后边的值覆盖前边的值
export function matchArrayFieldsToObject(
  fields: Array<string | number>,
  dataList: DataTransferItemList,
  fn?: (field, value) => { field: string | number; value: any } | null,
) {
  const result = [];
  for (let i = 0; i < dataList.length; i++) {
    const data = dataList[i];
    let obj = {};
    for (let j = 0; j < fields.length; j++) {
      let field = fields[j];
      let value = data[j];
      if (fn) {
        let fnResult = fn(field, value);
        let newField = fnResult.field;
        let newValue = fnResult.value;
        if (newField) {
          field = newField;
        }
        if (newValue) {
          value = newValue;
        }
      }
      obj[field] = value;
    }
    result.push(obj);
    obj = {};
  }
  return result;
}

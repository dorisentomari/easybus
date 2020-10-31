export function generateImageDom(file: File, attributes: Record<string, string> = {}) {
  const url = window.URL.createObjectURL(file);
  let otherAttributes = '';

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      otherAttributes += `${key}=${attributes[key]} `;
    }
  }

  return `<img src="${url}" ${otherAttributes.trim()} >`;
}

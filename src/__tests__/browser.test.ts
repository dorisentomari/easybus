import { hasClassName, addClassName, deleteClassName, replaceClassName } from '../browser';

function createDom(tag: string) {
  return document.createElement(tag);
}

describe('测试 browser', () => {
  test('测试 addClassName', () => {
    const div = createDom('div');
    expect(div.className).toEqual('');
    addClassName(div, 'header');
    expect(div.className).toEqual('header');
    addClassName(div, 'footer');
    expect(div.className).toEqual('header footer');
  });

  test('测试 hasClassName', () => {
    const div = createDom('div');
    expect(hasClassName(div, 'header')).toEqual(false);
    addClassName(div, 'header');
    expect(hasClassName(div, 'header')).toEqual(true);
  });

  test('测试 deleteClassName', () => {
    const div = createDom('div');
    deleteClassName(div, 'header');
    expect(div.className).toEqual('');
    addClassName(div, 'header');
    expect(div.className).toEqual('header');
    deleteClassName(div, 'header');
    expect(div.className).toEqual('');
  });

  test('测试 replaceClassName', () => {
    const div = createDom('div');
    addClassName(div, 'header');
    replaceClassName(div, 'footer', 'header');
    expect(div.className).toEqual('footer');
  });
});

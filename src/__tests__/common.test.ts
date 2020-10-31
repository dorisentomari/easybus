import { frontEndSwitchPage } from '../common';

describe('测试 common', () => {
  test('测试 frontEndSwitchPage', () => {
    const arr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
    ];

    const page1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const page2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const page3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const page4 = [31, 32, 33, 34, 35];

    expect(frontEndSwitchPage(arr)).toEqual(page1);
    expect(frontEndSwitchPage(arr, 2)).toEqual(page2);
    expect(frontEndSwitchPage(arr, 3)).toEqual(page3);
    expect(frontEndSwitchPage(arr, 4)).toEqual(page4);
    expect(frontEndSwitchPage(arr, 5)).toEqual([]);
  });
});

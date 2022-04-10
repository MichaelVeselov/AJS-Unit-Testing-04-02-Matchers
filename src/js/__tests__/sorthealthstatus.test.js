import sortHealthStatus from '../sorthealthstatus.js';

describe('function sortHealthStatus should sort by health the array with heroes ', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = sortHealthStatus(heroes);

  const expectedResult = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  test('and compare with matcher toEqual', () => {
    expect(result).toEqual(expectedResult);
  });

  test('and compare with matcher toBe with help of notToBe', () => {
    expect(result).not.toBe(expectedResult);
  });
});

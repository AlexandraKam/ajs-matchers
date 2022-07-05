import orderedUsers from '../index';

test('should order users by health', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const response = orderedUsers([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(response).toEqual(expected);
  expect(response).not.toBe(expected);
});

test('should order users by health', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 10 },
  ];
  const response = orderedUsers([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 10 },
  ]);
  expect(response).toEqual(expected);
  expect(response).not.toBe(expected);
});

import { classNames } from './classNames';

describe('classNames', (): void => {
  const additional = ['first', 'third', 'second'];

  test('only with first parameter', (): void => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional parameters', (): void => {
    const result = classNames('someClass', {}, additional);
    const expected = 'someClass first third second';

    expect(result).toBe(expected);
  });

  test('with mods', (): void => {
    const result = classNames(
      'someClass',
      { check: true, mod: true },
      additional,
    );
    const expected = 'someClass first third second check mod';

    expect(result).toBe(expected);
  });

  test('with mods (has one false parameter)', (): void => {
    const result = classNames(
      'someClass',
      { check: false, mod: true },
      additional,
    );
    const expected = 'someClass first third second mod';

    expect(result).toBe(expected);
  });
});

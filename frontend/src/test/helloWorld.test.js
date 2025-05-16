import helloWorld from '../utils/helloWorld';

test('helloWorld returns "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});
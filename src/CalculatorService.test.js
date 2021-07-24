import {Calculate} from './CalculatorService'
test('Given 40hours returns 1 FTE', () => {
  const result = Calculate(40)
  expect(result).toEqual({fte:"1", remainder:"0"});
});

test('Given 80hours returns 2 FTE', () => {
  const result = Calculate(80)
  expect(result).toEqual({fte:"2", remainder:"0"});
});

test('Given 44hours returns 1 FTE and 0.1', () => {
  const result = Calculate(44)
  expect(result).toEqual({fte:"1", remainder:".1"});
});

test('Given 88hours returns 2 FTE and 0.2', () => {
  const result = Calculate(88)
  expect(result).toEqual({fte:"2", remainder:".2"});
});
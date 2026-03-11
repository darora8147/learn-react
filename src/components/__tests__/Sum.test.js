import { Sum } from "../Sum";

test("it should calculate the sum of two numbers", () => {
  const result = Sum(3, 8);

  expect(result).toBe(11);
});

import lenghtCheck from "../lenghtCheck";

test("card is valid", () => {
  const card = 4276160968686239;
  expect(lenghtCheck(card)).toBe(true);
});

test("card is not valid", () => {
  const card = 5525632041217000;
  expect(lenghtCheck(card)).toBe(false);
});

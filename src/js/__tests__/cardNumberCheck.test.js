import cardNumberCheck from '../cardNumberCheck';

test('should return "true"', () => {
  let result = cardNumberCheck('4004854569757493', 'visa');
  
  expect(result).toBe(true);
});

test('should throw the error "Карта не существует"', () => {
  expect(() => cardNumberCheck('4004854569757496', 'visa')).toThrow('Карта не существует');
});

test('should throw the error "Некорректная длина номера для вашей платёжной системы"', () => {
  expect(() => cardNumberCheck('40048545697', 'visa')).toThrow('Некорректная длина номера для вашей платёжной системы');
});
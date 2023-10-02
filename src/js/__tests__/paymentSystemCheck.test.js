import paymentSystemCheck from '../paymentSystemCheck';

test('should return "american-express" card name', () => {
    let result = paymentSystemCheck('349041998250884');
    
    expect(result).toBe('american-express');
});

test('should return "mastercard" card name', () => {
    let result = paymentSystemCheck('5377128173023014');
    
    expect(result).toBe('mastercard');
});

test('should return "visa" card name', () => {
    let result = paymentSystemCheck('4024007101632296');
    
    expect(result).toBe('visa');
});

test('should return "diners" card name', () => {
    let result = paymentSystemCheck('36844198439266');
    
    expect(result).toBe('diners');
});

test('should return "discover" card name', () => {
    let result = paymentSystemCheck('6011668503919563');
    
    expect(result).toBe('discover');
});

test('should return "mir" card name', () => {
    let result = paymentSystemCheck('2200000000000000');
    
    expect(result).toBe('mir');
});

test('should return "jcb" card name', () => {
    let result = paymentSystemCheck('3540983667062309');
    
    expect(result).toBe('jcb');
});



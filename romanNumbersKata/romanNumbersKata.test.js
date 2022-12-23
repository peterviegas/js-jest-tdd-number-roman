const romanNumber = require('./romanNumbersKata');

test('Basic test number 3001 = null', () => {
    expect(romanNumber(3001)).toBe(null);
});
test('number 0 = null', () => {
    expect(romanNumber(0)).toBe(null);
});
test('Number negative = null', () => {
    expect(romanNumber(-15)).toBe(null);
});
test('Basic test number 1 = I', () => {
    expect(romanNumber(1)).toBe('I');
});
test('Basic test number 2 = II', () => {
    expect(romanNumber(2)).toBe('II');
});
test('Basic test number 3 = III', () => {
    expect(romanNumber(3)).toBe('III');
});
test('Basic test number 4 = IV', () => {
    expect(romanNumber(4)).toBe('IV');
});
test('Basic test number 5 = V', () => {
    expect(romanNumber(5)).toBe('V');
});
test('Basic test number 6 = VI', () => {
    expect(romanNumber(6)).toBe('VI');
});
test('Basic test number 7 = VII', () => {
    expect(romanNumber(7)).toBe('VII');
});
test('Basic test number 8 = VIII', () => {
    expect(romanNumber(8)).toBe('VIII');
});
test('Basic test number 9 = IX', () => {
    expect(romanNumber(9)).toBe('IX');
});
test('Decimal test number 10 = V', () => {
    expect(romanNumber(10)).toBe('X');
});
test('Decimal Test 11= XI', () => {
    expect(romanNumber(11)).toBe('XI');
});
test('Decimal Test 22= XXII', () => {
    expect(romanNumber(22)).toBe('XXII');
});
test('Decimal Test 33= XXXIII', () => {
    expect(romanNumber(33)).toBe('XXXIII');
});
test('Decimal Test 56= LVI', () => {
    expect(romanNumber(56)).toBe('LVI');
});
test('Decimal Test 59= LIX', () => {
    expect(romanNumber(59)).toBe('LIX');
});
test('Decimal Test 80= LXXX', () => {
    expect(romanNumber(80)).toBe('LXXX');
});
test('Decimal Test 84= LXXXIV', () => {
    expect(romanNumber(84)).toBe('LXXXIV');
});
test('Decimal Test 99= XCIX', () => {
    expect(romanNumber(99)).toBe('XCIX');
});
test('Hundred Test 100= C', () => {
    expect(romanNumber(100)).toBe('C');
});
test('Hundred Test 400= CD', () => {
    expect(romanNumber(400)).toBe('CD');
});
test('Hundred Test 459= CDLIX', () => {
    expect(romanNumber(459)).toBe('CDLIX');
});
test('Hundred Test 799= DCCXCIX', () => {
    expect(romanNumber(799)).toBe('DCCXCIX');
});
test('Hundred Test 800= DCCC', () => {
    expect(romanNumber(800)).toBe('DCCC');
});
test('Hundred Test 999= CMXCIX', () => {
    expect(romanNumber(999)).toBe('CMXCIX');
});
test('This year 2022 = MMXXII', () => {
    expect(romanNumber(2022)).toBe('MMXXII');
});
test('Next year 2023 = MMXXIII', () => {
    expect(romanNumber(2023)).toBe('MMXXIII');
});
test('Last number roman 3000= MMM', () => {
    expect(romanNumber(3000)).toBe('MMM');
});
test('England won the cup 1966 = MCMLXVI', () => {
    expect(romanNumber(1966)).toBe('MCMLXVI');
});
test('My birtday year 1969 = MCMLXIX', () => {
    expect(romanNumber(1969)).toBe('MCMLXIX');
});
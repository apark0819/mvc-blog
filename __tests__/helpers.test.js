const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-09-09 16:20:00');
  
    expect(format_date(date)).toBe('9/09/2022');
  });

const {format_plural} = require('../utils/helpers')

test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('lemon', 2);
      const single = format_plural('lime', 1);
      
      expect(plural).toBe('lemon');
      expect(single).toBe('lime');
});

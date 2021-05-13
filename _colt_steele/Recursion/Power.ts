
//mimick Math.pow()
function Power (base: number, exponent: number): number {
  let total = 1;
  let absExponent = Math.abs(exponent);
  while( absExponent > 0) {
      total *= base;
      absExponent--;
  }
  return exponent < 0 ? (1 / total) : total;
};

console.log(Power(2, 2));

function PowerRecursion (base: number, exponent: number): number {
  let count = 1;
  let absExponent = Math.abs(exponent);
  function Helper (num: number) {
    if ( absExponent < count ) return 1;
    count ++;
    return num * Helper(num)
  };
  return exponent < 0 ? 1 / Helper(base) : Helper(base);
};

console.log(PowerRecursion(5, -3));

//best
function Power2 (base: number, exponent: number): number {
  if (exponent === 0) return 1;
  return base * Power2(base, exponent - 1);
};

console.log(Power2(2, 3));

export default function toCurrency(numberString: string) {
  let number = parseFloat(numberString);
  let x = 0.1; 
  let floatDigits = 2;
  if (number !== 0) {
    while (number < x) {
      floatDigits ++;
      x = x / 10;
    }
  }
  if (number > 1) {
    return `$${number.toFixed(floatDigits).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    
  } else {
    return `$${number.toFixed(floatDigits)}`;
  }
}
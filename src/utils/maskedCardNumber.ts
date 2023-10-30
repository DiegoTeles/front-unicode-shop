export function addSpacesToNumber(number: string | number): string {
  number = number.toString();
  const sanitizedNumber = number.replace(/\s/g, '');

  const formattedNumber = sanitizedNumber.replace(/\d{4}(?=\d)/g, '$& ');

  return formattedNumber;
}

export function censureCardNumber(cardNumber: string): string {
  return '**** **** ****' + cardNumber.slice(14);
}

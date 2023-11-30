export default function extractCountryCode(phoneNumber: string) {
  // Use a regular expression to match the international country code
  const countryCodeMatch = phoneNumber.match(/^\+(\d+)/);
  console.log('COUNTRY CODE MATCH: ', countryCodeMatch);

  if (countryCodeMatch) {
    // Extracted country code will be in countryCodeMatch[1]
    const countryCode = countryCodeMatch[1];
    console.log('COUNTRY CODE : ', countryCode);
    return countryCode;
  }

  // If no country code is found, return null or handle it as needed
  return null;
}

// // Example usage:
// const phoneNumber = '+1 123-456-7890';
// const countryCode = extractCountryCode(phoneNumber);

// if (countryCode) {
//   console.log(`Country code found: +${countryCode}`);
// } else {
//   console.log('No country code found.');
// }

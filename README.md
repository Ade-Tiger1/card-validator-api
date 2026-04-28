# Card Validator API

A simple backend API built with Node.js, TypeScript, and Express that validates card numbers using the Luhn Algorithm.

---

## 🚀 How to Run

```bash
npm install
npm run dev

Endpoint
POST /validate-card

Request:

{
  "cardNumber": "4539578763621486"
}



Response:

{
  "valid": true
}


Tech Used
Node.js
Express
TypeScript



Features
Card validation using Luhn algorithm
Input sanitization
Error handling
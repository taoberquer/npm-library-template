# NPM Library Template

[![CI](https://github.com/taoberquer/npm-library-template/actions/workflows/ci.yml/badge.svg)](https://github.com/taoberquer/npm-library-template/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/%40taoberquer%2Fnpm-library-template.svg)](https://badge.fury.io/js/%40taoberquer%2Fnpm-library-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> TypeScript library template for the course "Architecture open source : Création et publication d'une librairie"

## Installation

```bash
npm install @taoberquer/npm-library-template
```

or with yarn:

```bash
yarn add @taoberquer/npm-library-template
```

## Usage

### Import ES Modules

```typescript
import { isValidEmail, slugify, sum, formatCurrency } from '@taoberquer/npm-library-template'

// Email validation
console.log(isValidEmail('user@example.com')) // true
console.log(isValidEmail('invalid.email')) // false

// Slug generation
console.log(slugify('Hello World!')) // 'hello-world'
console.log(slugify('Ça c\'est génial')) // 'ca-cest-genial'

// Sum calculation
console.log(sum([1, 2, 3, 4, 5])) // 15

// Currency formatting
console.log(formatCurrency(1234.56)) // '1 234,56 €'
console.log(formatCurrency(1234.56, { locale: 'en-US', currency: 'USD' })) // '$1,234.56'
```

### Import CommonJS

```javascript
const { isValidEmail, slugify } = require('@taoberquer/npm-library-template')
```

## API

### `isValidEmail(email: string): boolean`

Validates if a string is a valid email address.

**Parameters:**
- `email` (string): The email address to validate

**Returns:** `true` if the email is valid, `false` otherwise

### `slugify(text: string): string`

Converts a string into a URL-friendly slug.

**Parameters:**
- `text` (string): The text to convert

**Returns:** The generated slug

**Example:**
```typescript
slugify('Hello World!') // 'hello-world'
slugify('L\'été à Paris') // 'lete-a-paris'
```

### `sum(numbers: number[]): number`

Calculates the sum of an array of numbers.

**Parameters:**
- `numbers` (number[]): The array of numbers

**Returns:** The sum of the numbers

### `formatCurrency(amount: number, options?: CurrencyOptions): string`

Formats a number as currency according to the specified options.

**Parameters:**
- `amount` (number): The amount to format
- `options` (CurrencyOptions, optional): Formatting options
  - `locale` (string): The locale to use (default: 'fr-FR')
  - `currency` (string): The currency to use (default: 'EUR')

**Returns:** The formatted amount

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Install dependencies

```bash
npm install
```

### Available scripts

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run the linter
npm run lint

# Format the code
npm run format

# Check TypeScript types
npm run typecheck

# Build the library
npm run build
```

### Project structure

```
npm-library-template/
├── src/
│   ├── index.ts        # Main entry point
│   └── index.test.ts   # Unit tests
├── dist/               # Compiled files (generated)
├── .github/
│   └── workflows/
│       └── ci.yml      # Configuration CI/CD
├── package.json
├── tsconfig.json       # Configuration TypeScript
├── vite.config.ts      # Configuration Vite
├── .eslintrc.cjs       # Configuration ESLint
└── .prettierrc         # Configuration Prettier
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution guidelines

- Ensure all tests pass
- Follow the code style (use `npm run lint` and `npm run format`)
- Add tests for any new features
- Update the documentation if necessary

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors
- Inspired by JavaScript/TypeScript community best practices

---

Created with love by [Tao Berquer](https://github.com/taoberquer)
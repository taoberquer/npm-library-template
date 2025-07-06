/**
 * Validates if a string is a valid email
 * @param email - The email address to validate
 * @returns true if the email is valid, false otherwise
 * @example
 * ```typescript
 * isValidEmail('user@example.com') // true
 * isValidEmail('invalid.email') // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Converts a string to a URL-friendly slug
 * @param text - The text to convert
 * @returns The generated slug
 * @example
 * ```typescript
 * slugify('Hello World!') // 'hello-world'
 * slugify('This is awesome!') // 'this-is-awesome'
 * ```
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Keep only alphanumeric, spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single one
}

/**
 * Calculates the sum of an array of numbers
 * @param numbers - The array of numbers
 * @returns The sum of the numbers
 * @example
 * ```typescript
 * sum([1, 2, 3, 4, 5]) // 15
 * sum([]) // 0
 * ```
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0)
}

/**
 * Interface for currency formatting options
 */
export interface CurrencyOptions {
  locale?: string
  currency?: string
}

/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param options - The formatting options
 * @returns The formatted amount
 * @example
 * ```typescript
 * formatCurrency(1234.56) // '1 234,56 €'
 * formatCurrency(1234.56, { locale: 'en-US', currency: 'USD' }) // '$1,234.56'
 * ```
 */
export function formatCurrency(amount: number, options: CurrencyOptions = {}): string {
  const { locale = 'fr-FR', currency = 'EUR' } = options

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

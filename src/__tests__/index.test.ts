import { describe, it, expect } from 'vitest'
import { isValidEmail, slugify, sum, formatCurrency } from '../index'

describe('isValidEmail', () => {
  it('should validate a correct email', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('test.user@domain.co.uk')).toBe(true)
    expect(isValidEmail('123@test.fr')).toBe(true)
  })

  it('should reject an invalid email', () => {
    expect(isValidEmail('invalid.email')).toBe(false)
    expect(isValidEmail('@example.com')).toBe(false)
    expect(isValidEmail('user@')).toBe(false)
    expect(isValidEmail('user @example.com')).toBe(false)
    expect(isValidEmail('')).toBe(false)
  })
})

describe('slugify', () => {
  it('should convert a simple string to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world')
    expect(slugify('Test 123')).toBe('test-123')
  })

  it('should handle special characters and accents', () => {
    expect(slugify("Ça c'est génial!")).toBe('ca-cest-genial')
    expect(slugify("L'été à Paris")).toBe('lete-a-paris')
    expect(slugify('Noël 2024')).toBe('noel-2024')
  })

  it('should handle multiple spaces and hyphens', () => {
    expect(slugify('  Espaces   multiples  ')).toBe('espaces-multiples')
    expect(slugify('Tirets---multiples')).toBe('tirets-multiples')
  })

  it('should return an empty string for empty input', () => {
    expect(slugify('')).toBe('')
    expect(slugify('   ')).toBe('')
  })
})

describe('sum', () => {
  it('should calculate the sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15)
    expect(sum([10, 20, 30])).toBe(60)
    expect(sum([-5, 5, -10, 10])).toBe(0)
  })

  it('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0)
  })

  it('should handle a single element', () => {
    expect(sum([42])).toBe(42)
  })

  it('should handle decimal numbers', () => {
    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6)
  })
})

describe('formatCurrency', () => {
  it('should format in euros by default (FR locale)', () => {
    expect(formatCurrency(1234.56)).toMatch(/1\s?234,56\s?€/)
  })

  it('should format with custom options', () => {
    const usd = formatCurrency(1234.56, { locale: 'en-US', currency: 'USD' })
    expect(usd).toMatch(/\$1,234\.56/)
  })

  it('should handle different currencies', () => {
    const gbp = formatCurrency(1000, { locale: 'en-GB', currency: 'GBP' })
    expect(gbp).toMatch(/£1,000\.00/)

    const jpy = formatCurrency(1000, { locale: 'ja-JP', currency: 'JPY' })
    expect(jpy).toMatch(/[¥￥]1,000/)
  })

  it('should handle negative amounts', () => {
    const negative = formatCurrency(-500)
    expect(negative).toMatch(/-500/)
  })

  it('should handle zero', () => {
    expect(formatCurrency(0)).toMatch(/0,00\s?€/)
  })
})

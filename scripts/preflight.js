import { existsSync, readFileSync } from 'node:fs'

const required = [
  'index.html',
  'landing-diagnostico.html',
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/js/pdf-engine.js',
  'assets/data/pricing.json',
  'assets/data/lead-rules.json',
  'assets/img/neartec-logo.jpg',
  'api/lead.js',
  'vercel.json'
]

const missing = required.filter((file) => !existsSync(file))
if (missing.length) {
  console.error('Missing files:', missing.join(', '))
  process.exit(1)
}

JSON.parse(readFileSync('assets/data/pricing.json', 'utf8'))
JSON.parse(readFileSync('assets/data/lead-rules.json', 'utf8'))
JSON.parse(readFileSync('vercel.json', 'utf8'))

console.log('Preflight OK: estructura lista para GitHub y Vercel.')

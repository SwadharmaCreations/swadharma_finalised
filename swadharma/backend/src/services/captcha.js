// Uses Node 18+ global fetch — no node-fetch dependency needed.

async function verifyRecaptcha(token, ip) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error('RECAPTCHA_SECRET_KEY not set');
  const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip })
  });
  const data = await resp.json();
  if (!data.success) throw new Error('CAPTCHA validation failed');
}

async function verifyHcaptcha(token, ip) {
  const secret = process.env.HCAPTCHA_SECRET_KEY;
  if (!secret) throw new Error('HCAPTCHA_SECRET_KEY not set');
  const resp = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip })
  });
  const data = await resp.json();
  if (!data.success) throw new Error('CAPTCHA validation failed');
}

async function verifyCaptchaIfEnabled(token, ip) {
  const provider = process.env.CAPTCHA_PROVIDER; // 'recaptcha' | 'hcaptcha' | undefined
  if (!provider) return; // disabled
  if (!token) throw new Error('captchaToken is required');

  if (provider === 'recaptcha') return verifyRecaptcha(token, ip);
  if (provider === 'hcaptcha') return verifyHcaptcha(token, ip);
  throw new Error('Unknown CAPTCHA_PROVIDER');
}

module.exports = { verifyCaptchaIfEnabled };

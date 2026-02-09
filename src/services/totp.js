import * as OTPAuth from 'otpauth';

// Use demo secret for GitHub Pages production
const isProduction = process.env.NODE_ENV === 'production' && window.location.hostname.includes('github.io');
const TOTP_SECRET = isProduction ? 'DEMOSECRETDEMOSECRETDEMOSECRET' : (process.env.REACT_APP_ADMIN_TOTP_SECRET || '');
const TOTP_ISSUER = 'UBSS Admin';
const TOTP_LABEL = 'admin@ubss';

// Create TOTP instance using the secret string directly
const createTOTP = (secret) => {
  return new OTPAuth.TOTP({
    issuer: TOTP_ISSUER,
    label: TOTP_LABEL,
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: secret,
  });
};

// Verify a TOTP code with a window of 1 (allows 30s before/after)
export const verifyTOTPCode = (code) => {
  if (!TOTP_SECRET) {
    console.error('TOTP secret not configured');
    return false;
  }

  try {
    const totp = createTOTP(TOTP_SECRET);
    const delta = totp.validate({ token: code, window: 1 });
    return delta !== null;
  } catch (error) {
    console.error('Error verifying TOTP code:', error);
    return false;
  }
};

// Generate the otpauth:// URI for QR code scanning
export const getTOTPUri = () => {
  if (!TOTP_SECRET) return '';
  const totp = createTOTP(TOTP_SECRET);
  return totp.toString();
};

// Check if 2FA is configured
export const is2FAConfigured = () => {
  return Boolean(TOTP_SECRET);
};

// Get the secret for manual entry (shown during setup)
export const getTOTPSecret = () => {
  return TOTP_SECRET;
};

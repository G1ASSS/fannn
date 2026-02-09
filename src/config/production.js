// Production configuration for GitHub Pages
// WARNING: These values are exposed in the client-side build
// Only use non-sensitive values or demo values for GitHub Pages

export const PRODUCTION_CONFIG = {
  // Firebase - use demo values for GitHub Pages
  firebase: {
    apiKey: "demo",
    authDomain: "demo.firebaseapp.com",
    projectId: "demo",
    storageBucket: "demo.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:demo",
    measurementId: "demo"
  },
  
  // Admin credentials - use demo for GitHub Pages
  admin: {
    password: "demo", // Base64 encoded: "ZGVtbw=="
    totpSecret: "DEMOSECRETDEMOSECRETDEMOSECRET"
  },
  
  // APIs - use demo or public endpoints
  finnhubToken: "demo",
  alphaVantageKey: "demo"
};

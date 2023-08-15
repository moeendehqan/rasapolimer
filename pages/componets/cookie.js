import Cookies from 'js-cookie';

// در اینجا تابع ست کردن کوکی تعریف می‌کنیم
export function setCookie(name, value, options = {}) {
  Cookies.set(name, value, options);
}

export function getCookie(name, defaultValue = null) {
  const value = Cookies.get(name);
  return value || defaultValue;
}
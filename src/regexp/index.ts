export const phoneRegexp = /^1\d{10}$/g;

export function isPhone(phone: any) {
  return phoneRegexp.test(phone);
}

export const emailRegexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z]+/;

export function isEmail(email: string) {
  return emailRegexp.test(email);
}

export const stringNumberRegexp = /^\d+$/;

// Tiny crypto-based unique ID generator – no external dependency needed
export function nanoid(size = 12): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(size);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < size; i++) {
      id += chars[bytes[i] % chars.length];
    }
  } else {
    for (let i = 0; i < size; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return id;
}

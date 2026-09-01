export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date) {
  if (!date) {
    return '';
  }

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

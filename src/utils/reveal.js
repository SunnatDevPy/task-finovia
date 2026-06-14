/** Scroll reveal: className + ixtiyoriy delay (sekund) */
export function rv(dir = 'up', delay) {
  const props = { className: `reveal reveal-${dir}` }
  if (delay != null) props.style = { transitionDelay: `${delay}s` }
  return props
}

/** Bir nechta klassni birlashtirish */
export function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

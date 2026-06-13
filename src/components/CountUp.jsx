import { useEffect, useState } from 'react'

export default function CountUp({ end, duration = 1700, prefix = '', suffix = '', decimals = 0 }) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic — tez boshlanib, silliq to'xtaydi
      setVal(end * eased)
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setVal(end)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration])

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString('en-US')

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

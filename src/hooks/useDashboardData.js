import { useMemo } from 'react'

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pick(arr) {
  return arr[rand(0, arr.length - 1)]
}

export default function useDashboardData() {
  return useMemo(() => {
    const bars = Array.from({ length: 7 }, () => rand(35, 100))
    const line = Array.from({ length: 12 }, () => rand(25, 95))
    const donutRaw = [
      { key: 'seo', value: rand(18, 38) },
      { key: 'ppc', value: rand(12, 28) },
      { key: 'social', value: rand(15, 32) },
      { key: 'email', value: rand(8, 22) },
    ]
    const donutTotal = donutRaw.reduce((s, d) => s + d.value, 0)

    return {
      kpis: [
        { id: 'traffic', value: rand(1200, 9800), suffix: '', trend: rand(3, 28) },
        { id: 'conversion', value: rand(42, 96), suffix: '%', trend: rand(-5, 18) },
        { id: 'revenue', value: rand(8, 64), suffix: 'K', prefix: '$', trend: rand(5, 32) },
        { id: 'roi', value: rand(110, 480), suffix: '%', trend: rand(8, 40) },
      ],
      bars,
      barLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      line,
      lineLabels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      donut: donutRaw,
      donutTotal,
      activities: Array.from({ length: 5 }, (_, i) => ({
        id: i,
        type: pick(['seo', 'ppc', 'social', 'content']),
        delta: rand(5, 45),
        minutes: rand(2, 58),
      })),
      gauge: rand(62, 94),
    }
  }, [])
}

import type { ReactElement } from 'react'

const paths: Record<string, ReactElement> = {
  record: (
    <>
      <rect x="3" y="6" width="13" height="10" rx="2" />
      <path d="M16 10.5l4.5-2.7a1 1 0 0 1 1.5.86v5.68a1 1 0 0 1-1.5.86L16 12.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pencil: <path d="M4 17.5l.9-3.6L14.7 4.1a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.1 17l-4.1.5z" />,
  frown: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 15.5c1-1.2 2.2-1.8 3.5-1.8s2.5.6 3.5 1.8" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="2.4" />
    </>
  ),
  turtle: <path d="M4 13a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 13.5Z M9 8V5.5 M15 8V5.5 M7 16.5l-1.5 2 M17 16.5l1.5 2" />,
  bot: (
    <>
      <rect x="5" y="9" width="14" height="10" rx="3" />
      <path d="M12 5.5V9 M9.2 13.5h.01M14.8 13.5h.01" strokeWidth="2.4" />
      <path d="M2.5 13v3M21.5 13v3" />
    </>
  ),
  chart: (
    <>
      <path d="M5 19V10M12 19V5M19 19v-6" />
      <path d="M3 19h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  trend: (
    <>
      <path d="M4 16l5.5-6 4 3.5L20 6" />
      <path d="M14.5 6H20v5.5" />
    </>
  ),
}

export default function CompareIcon({ name }: { name: keyof typeof paths }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

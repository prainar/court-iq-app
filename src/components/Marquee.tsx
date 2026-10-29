const defaultItems = [
  'Computer Vision',
  '>90% Tracking Accuracy',
  'Every Possession Analyzed',
  'Hours → Minutes',
  'Shot Charts · Heatmaps · Trends',
  'Built for Every Level',
  'Cloud-Native AI',
  'Fatigue & Workload Signals',
]

/**
 * Infinite horizontal marquee of credibility tags. The track is duplicated so
 * the CSS translate loop is seamless. Pauses under reduced motion (CSS).
 */
export default function Marquee({ items = defaultItems }: { items?: string[] }) {
  const track = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, idx) => (
          <span className="marquee-item" key={idx}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

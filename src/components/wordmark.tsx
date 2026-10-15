export function Wordmark() {
  return (
    <h1 className="wordmark" aria-label="KURIOZUM">
      <svg viewBox="0 0 1000 180" role="img" aria-hidden="true">
        <defs>
          <pattern
            id="stripes"
            width="1"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <rect width="1000" height="6" fill="white" />
          </pattern>
          <mask id="word-stripes">
            <rect width="1000" height="180" fill="url(#stripes)" />
          </mask>
        </defs>
        <text
          x="500"
          y="155"
          textAnchor="middle"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          mask="url(#word-stripes)"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="183"
          fontWeight="950"
          letterSpacing="-12"
          fill="currentColor"
        >
          KURIOZUM
        </text>
      </svg>
    </h1>
  );
}

"use client";
import Link from "next/link";
import { useId, useState } from "react";
export function Symbol() {
  const id = useId().replace(/:/g, "");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const letters = Array.from("KURIOZUM • KURIOZUM • KURIOZUM • ");
  return (
    <Link
      href="/"
      className="brand-symbol"
      aria-label="Kuriozum — strona główna"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPointer({
          x: (e.clientX - r.left - r.width / 2) * 0.12,
          y: (e.clientY - r.top - r.height / 2) * 0.12,
        });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        style={
          {
            "--px": `${pointer.x}px`,
            "--py": `${pointer.y}px`,
          } as React.CSSProperties
        }
      >
        <defs>
          <radialGradient id={`${id}g`} cx="35%" cy="30%">
            <stop stopColor="#bdff4c" />
            <stop offset=".6" stopColor="#557d20" />
            <stop offset="1" stopColor="#101c0b" />
          </radialGradient>
          <filter id={`${id}n`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".65"
              numOctaves="3"
              seed="8"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
          <clipPath id={`${id}c`}>
            <circle cx="60" cy="60" r="34" />
          </clipPath>
        </defs>
        <g className="sphere-spin" clipPath={`url(#${id}c)`}>
          {Array.from({ length: 17 }, (_, i) => (
            <g
              key={i}
              className="sphere-slice"
              style={
                {
                  "--shift": `${i % 2 ? 1 : -1}0px`,
                  "--delay": `${i * 12}ms`,
                } as React.CSSProperties
              }
            >
              <svg
                x="26"
                y={26 + i * 4}
                width="68"
                height="4"
                viewBox={`26 ${26 + i * 4} 68 4`}
              >
                <circle cx="60" cy="60" r="34" fill={`url(#${id}g)`} />
                <circle
                  cx="60"
                  cy="60"
                  r="34"
                  fill="#81b42c"
                  filter={`url(#${id}n)`}
                  opacity=".8"
                />
                <path
                  d="M20 45 Q65 10 95 58 M23 74 Q65 35 98 80"
                  stroke="#15200d"
                  strokeWidth="8"
                  fill="none"
                  opacity=".6"
                />
              </svg>
            </g>
          ))}
        </g>
        <g className="orbit">
          {letters.map((letter, i) => (
            <g
              key={i}
              transform={`rotate(${(i * 360) / letters.length} 60 60)`}
            >
              <text
                className="orbit-letter"
                x="60"
                y="14"
                textAnchor="middle"
                style={
                  {
                    "--dx": `${Math.sin(i * 4) * 9}px`,
                    "--dy": `${Math.cos(i * 3) * 9}px`,
                    "--rot": `${i % 2 ? 15 : -15}deg`,
                  } as React.CSSProperties
                }
              >
                {letter}
              </text>
            </g>
          ))}
        </g>
      </svg>
      <span className="symbol-hint">DISTURB ↗</span>
    </Link>
  );
}

export function HeroBottomCurve({ className }: { className: string }) {
  return (
    <svg width="871" height="68" viewBox="0 0 871 68" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M721.733 52.1925C770.577 62.491 820.36 67.6821 870.278 67.6821H0.0981445C50.0163 67.6821 99.7993 62.4909 148.644 52.1925L352.862 9.13443C407.149 -2.31174 463.227 -2.31174 517.515 9.13443L721.733 52.1925Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroShapeLeft({ className }: { className: string }) {
  return (
    <svg width="568" height="191" viewBox="0 0 568 191" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <foreignObject x="-80.4" y="-80.4" width="728.3" height="351.8">
        <div className="bg-[#9CA9B9] sm:bg-transparent backdrop-blur-3xl" style={{ clipPath: "url(#bgblur_0_2_457_clip_path)", height: "100%", width: "100%" }}></div>
      </foreignObject>
      <defs>
        <clipPath id="bgblur_0_2_457_clip_path" transform="translate(80.4 80.4)">
          <path d="M0 28C0 12.536 12.536 0 28 0H539.5C554.964 0 567.5 12.536 567.5 28V86.7992C567.5 92.4661 565.781 97.9996 562.569 102.668L510.149 178.869C504.925 186.463 496.298 191 487.081 191H28C12.536 191 0 178.464 0 163V28Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HeroShapeRight({ className }: { className: string }) {
  return (
    <svg width="497" height="145" viewBox="0 0 497 145" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <foreignObject x="-79.9" y="-80.4" width="657.3" height="305.8">
        <div className="bg-[#9CA9B9] sm:bg-transparent backdrop-blur-3xl" style={{ clipPath: "url(#bgblur_0_2_440_clip_path)", height: "100%", width: "100%" }}></div>
      </foreignObject>
      <defs>
        <clipPath id="bgblur_0_2_440_clip_path" transform="translate(79.9 80.4)">
          <path d="M497 117C497 132.464 484.464 145 469 145H28.5C13.036 145 0.5 132.464 0.5 117V83.3061C0.5 76.352 3.08777 69.6467 7.75952 64.4956L57.9189 9.18956C63.2264 3.33754 70.7591 0 78.6594 0H469C484.464 0 497 12.536 497 28V117Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      className="mt-[8px]"
    >
      <defs>
        <linearGradient
          id="losapplius-logo-bg"
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0F766E" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#losapplius-logo-bg)" />
      <path
        d="M21 16V45H43"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="21" r="6" fill="#FCD34D" />
    </svg>
  );
};

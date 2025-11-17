import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" className="text-blue-600" strokeWidth="2" />
    <path
      d="M12 10V18"
      className="text-blue-600"
      strokeWidth="2.5"
      strokeLinecap="butt"
    />
    <path
      d="M9 10H15"
      className="text-blue-600"
      strokeWidth="2.5"
      strokeLinecap="butt"
    />
    <circle cx="12" cy="6.5" r="1.5" fill="red" stroke="none" />
    <circle cx="8" cy="19.5" r="1" className="text-cyan-400" fill="currentColor" strokeWidth="1" stroke="black"/>
    <path
      d="M8 19.5a4 4 0 0 1-4-4V12h2"
      className="text-blue-600"
      strokeWidth="2"
    />
    <path
      d="M16 19.5a4 4 0 0 0 4-4V12h-2"
      className="text-blue-600"
      strokeWidth="2"
    />
  </svg>
);

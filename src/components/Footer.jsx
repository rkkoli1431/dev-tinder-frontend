const Footer = () => {
  return (
    <footer className="w-full bg-neutral text-neutral-content p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between fixed bottom-0 left-0">
      {/* Left Section */}
      <aside className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="fill-current"
        >
          <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.244-.017-2.444-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.004-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.479 5.921.43.37.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .321.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        <p className="text-sm sm:text-base text-center sm:text-left">
          CodeChmap&apos;S © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      {/* Right Section */}
      <nav className="flex gap-4 justify-center sm:justify-end flex-wrap">
        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-current"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.63 0-4.77 2.13-4.77 4.76 0 .37.04.73.12 1.08A12.9 12.9 0 0 1 3.15.84a4.73 4.73 0 0 0-.64 2.39c0 1.64.84 3.09 2.12 3.93a4.49 4.49 0 0 1-2.16-.6v.06c0 2.28 1.63 4.18 3.8 4.61a4.52 4.52 0 0 1-2.14.08 4.78 4.78 0 0 0 4.46 3.32A9.06 9.06 0 0 1 2 19.55 12.78 12.78 0 0 0 9.29 22c7.55 0 11.68-6.16 11.68-11.5 0-.18-.01-.35-.02-.53A8.18 8.18 0 0 0 23 3z" />
          </svg>
        </a>

        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-current"
          >
            <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.919.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.676 0" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-current"
          >
            <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.334 20h-3.332v-11h3.332v11zm-1.667-12.268c-1.069 0-1.933-.866-1.933-1.934 0-1.069.865-1.934 1.933-1.934s1.934.865 1.934 1.934c0 1.068-.865 1.934-1.934 1.934zm13.667 12.268h-3.333v-5.604c0-1.336-.026-3.056-1.862-3.056-1.864 0-2.15 1.454-2.15 2.957v5.703h-3.333v-11h3.2v1.507h.046c.446-.844 1.538-1.73 3.166-1.73 3.386 0 4.012 2.23 4.012 5.129v6.094z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

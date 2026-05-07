import { useEffect, useState } from 'react';

const MODULE_PAGES = [
  '/',
  '/01-getting-set-up',
  '/02-terminal-survival',
  '/03-first-conversation',
  '/04-working-with-projects',
  '/05-think-like-a-developer',
  '/06-scaffolding-a-project',
  '/07-github-netlify-pipeline',
  '/08-claude-power-features',
  '/09-security-privacy',
  '/10-beyond-code',
];

function getCurrentIndex(): number {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return MODULE_PAGES.indexOf(path);
}

export default function ModuleNav() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    setCurrentIndex(getCurrentIndex());

    function handleKeyDown(e: KeyboardEvent) {
      const idx = getCurrentIndex();
      if (idx === -1) return;

      if (e.key === 'ArrowRight' && idx < MODULE_PAGES.length - 1) {
        e.preventDefault();
        window.location.href = MODULE_PAGES[idx + 1];
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        e.preventDefault();
        window.location.href = MODULE_PAGES[idx - 1];
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (currentIndex === -1) return null;

  const progress = ((currentIndex) / (MODULE_PAGES.length - 1)) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-t border-border">
      {/* Progress bar */}
      <div className="h-1 w-full bg-background-alt">
        <div
          className="h-full bg-purple transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-2 text-sm">
        {currentIndex > 0 ? (
          <a
            href={MODULE_PAGES[currentIndex - 1]}
            className="flex items-center gap-1 text-text-secondary hover:text-purple transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Previous
          </a>
        ) : (
          <span />
        )}

        <span className="text-text-muted">
          {currentIndex} / {MODULE_PAGES.length - 1}
        </span>

        {currentIndex < MODULE_PAGES.length - 1 ? (
          <a
            href={MODULE_PAGES[currentIndex + 1]}
            className="flex items-center gap-1 text-text-secondary hover:text-purple transition-colors"
          >
            Next <span aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

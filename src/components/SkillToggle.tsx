import { useState, useEffect } from 'react';

export default function SkillToggle() {
  const [level, setLevel] = useState<'beginner' | 'moderate'>('beginner');

  useEffect(() => {
    const saved = localStorage.getItem('skillLevel') as 'beginner' | 'moderate' | null;
    if (saved) {
      setLevel(saved);
      document.documentElement.setAttribute('data-skill', saved);
    } else {
      document.documentElement.setAttribute('data-skill', 'beginner');
    }
  }, []);

  function toggle() {
    const next = level === 'beginner' ? 'moderate' : 'beginner';
    setLevel(next);
    localStorage.setItem('skillLevel', next);
    document.documentElement.setAttribute('data-skill', next);
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium transition-all hover:border-purple hover:shadow-sm"
      aria-label={`Switch to ${level === 'beginner' ? 'moderate' : 'beginner'} mode`}
    >
      <span
        className={`inline-block h-2 w-2 rounded-full transition-colors ${
          level === 'beginner' ? 'bg-purple' : 'bg-purple-light'
        }`}
      />
      <span className="text-text-secondary">
        {level === 'beginner' ? 'Beginner' : 'Moderate'}
      </span>
    </button>
  );
}

/**
 * useSanity.jsx — React hook for Sanity CMS data with mock fallback
 *
 * Usage in any page:
 *   const data = useSanity('fetchCaseStudies', MOCK_DATA);
 *   // data = CMS data if available, MOCK_DATA otherwise
 *
 * For queries with params:
 *   const data = useSanity('fetchCaseStudy', MOCK_DATA, 'entering-china-evidence-hcp');
 *
 * Requires sanity-client.js loaded first.
 */

function useSanity(fetcherName, fallback, ...args) {
  const [data, setData] = React.useState(fallback);
  const [source, setSource] = React.useState('mock'); // 'mock' | 'cms'

  React.useEffect(() => {
    // Skip if Sanity client not configured
    if (typeof window.MSHContent === 'undefined' || !window.MSHContent.isConfigured()) {
      return;
    }

    const fetcher = window.MSHContent[fetcherName];
    if (typeof fetcher !== 'function') {
      console.warn('[useSanity] Unknown fetcher:', fetcherName);
      return;
    }

    let cancelled = false;

    fetcher(...args).then(result => {
      if (cancelled) return;
      if (result !== null && result !== undefined) {
        // For arrays, only replace if non-empty
        if (Array.isArray(result) && result.length === 0) return;
        setData(result);
        setSource('cms');
      }
    });

    return () => { cancelled = true; };
  }, [fetcherName, ...args]);

  return data;
}

/**
 * SanityStatus — dev-only badge showing data source.
 * Only visible when ?debug=1 in URL.
 */
function SanityStatus() {
  const [show, setShow] = React.useState(false);
  const [configured, setConfigured] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('debug=1')) {
      setShow(true);
      setConfigured(
        typeof window.MSHContent !== 'undefined' && window.MSHContent.isConfigured()
      );
    }
  }, []);

  if (!show) return null;

  return React.createElement('div', {
    style: {
      position: 'fixed',
      bottom: 12,
      right: 12,
      zIndex: 9999,
      padding: '6px 12px',
      borderRadius: 6,
      fontSize: 11,
      fontFamily: 'var(--font-mono, monospace)',
      background: configured ? '#065f46' : '#78350f',
      color: '#fff',
      opacity: 0.85,
      pointerEvents: 'none',
    }
  }, configured ? '● Sanity CMS connected' : '○ Mock data (Sanity not configured)');
}

// Register globally
if (typeof window !== 'undefined') {
  window.useSanity = useSanity;
  window.SanityStatus = SanityStatus;
}

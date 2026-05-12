import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-slate-500 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://www.medsci.cn" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">梅斯官网</a>
          <a href="https://deepevidence-canary-1086548595220.us-west1.run.app" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">DeepEvidence</a>
          <a href="https://seekevidence-canary-165493381714.us-west1.run.app" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">SeekEvidence</a>
        </div>
        <p>© 2026 梅斯健康 MedSci Healthcare. 严谨科研，可信 AI。</p>
      </div>
    </footer>
  );
};

export default Footer;
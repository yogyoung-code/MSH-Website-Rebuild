import React from 'react';

interface PharmaProps {
  onPartner: () => void;
}

const PharmaSection: React.FC<PharmaProps> = ({ onPartner }) => {
  return (
    <section id="data" className="py-24 px-6 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 z-10">
          <h2 className="font-serif text-4xl font-bold mb-6 text-slate-900">
            连接药企与医师的<br />
            <span className="text-medsci-blue italic">Evidence-Tech 桥梁</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            在 AI 时代，药品的临床价值不应被猜测，而应被精准检索。通过将官方结构化说明书 (SPL) 入驻梅斯 Evidence 引擎，我们确保您的医学数据在医生决策的关键时刻 (Point of Care) 被正确呈现。
          </p>
          <div className="bg-blue-50 border-l-4 border-medsci-blue p-6 rounded-r-2xl mb-8">
            <p className="text-sm text-blue-900 italic font-medium">
              “梅斯健康不仅是分发平台，更是医药数据的数字化认知底座。”
            </p>
          </div>
          <button 
            onClick={onPartner}
            className="border-2 border-medsci-blue text-medsci-blue px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            数据入驻方案
          </button>
        </div>
        
        <div className="lg:w-1/2 flex justify-center z-10">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Animated Rings */}
            <div className="absolute w-full h-full border border-blue-100 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-3/4 h-3/4 border-2 border-cyan-100 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Center Node */}
            <div className="bg-white shadow-2xl shadow-blue-200/50 rounded-2xl p-8 text-center border border-slate-100 relative z-10 w-48 h-48 flex flex-col items-center justify-center animate-pulse-slow">
              <p className="font-bold text-slate-800 text-lg">100%</p>
              <p className="font-bold text-slate-800 text-sm mb-1">可计算数据</p>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-2"></div>
              <p className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">STRUCTURED SPL</p>
            </div>

            {/* Orbiting Dots */}
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
               <div className="w-4 h-4 bg-medsci-blue rounded-full absolute -top-2 left-1/2 -ml-2 shadow-lg shadow-blue-500/50"></div>
            </div>
            <div className="absolute w-3/4 h-3/4 animate-[spin_15s_linear_infinite_reverse]">
               <div className="w-3 h-3 bg-cyan-400 rounded-full absolute -bottom-1.5 left-1/2 -ml-1.5 shadow-lg shadow-cyan-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaSection;
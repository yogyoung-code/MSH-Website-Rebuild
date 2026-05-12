import React from 'react';
import { ShieldCheck, FileText, Activity, Database, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <span className="text-medsci-blue font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Core Barrier</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-slate-900 leading-tight">
              为什么梅斯 AI <br />
              <span className="text-slate-400">值得专业信任？</span>
            </h2>
            <div className="space-y-12">
              <FeatureItem 
                icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
                title="零幻觉架构 (Zero-Hallucination)"
                desc="基于 RAG (检索增强生成) 架构，AI 拒绝“创造”医学知识。每一条建议都必须在本地权威证据库中找到唯一匹配的锚点，实现 100% 可溯源。"
                color="bg-blue-50 border-blue-100"
              />
              <FeatureItem 
                icon={<FileText className="w-6 h-6 text-cyan-600" />}
                title="官方数据入驻 (SPL Alignment)"
                desc="深度对齐 Top 100 药企提供的结构化说明书数据。确保临床用药指导在安全性、剂量、适应症上与官方标准完全同步，规避法律风险。"
                color="bg-cyan-50 border-cyan-100"
              />
              <FeatureItem 
                icon={<Activity className="w-6 h-6 text-indigo-600" />}
                title="20 年医学语料积淀"
                desc="不仅仅是算法，更有梅斯 330 万注册医生累积的专业交互语义。AI 具备真正的“临床直觉”，理解隐晦的医学语境。"
                color="bg-indigo-50 border-indigo-100"
              />
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-slate-100/50 rounded-[3rem] -rotate-3 scale-95 transform transition-transform duration-700 hover:rotate-0"></div>
             <div className="relative bg-[#0B0F19] rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden min-h-[540px] flex flex-col justify-between group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[100px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                <div className="relative z-10">
                  <h4 className="font-bold mb-10 flex items-center text-xl tracking-tight">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 mr-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span> 
                    数据资产实时全景
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <StatCard number="3.3M+" label="注册医师网络" color="text-cyan-400" />
                    <StatCard number="250M+" label="医学文献索引" color="text-blue-400" />
                    <StatCard number="100k+" label="结构化说明书" color="text-indigo-400" />
                    <StatCard number="15k+" label="多学科权威指南" color="text-white" />
                    <StatCard number="20K+" label="医学论文稿" color="text-teal-400" />
                    <StatCard number="35K+" label="临床研究方案" color="text-fuchsia-400" />
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/10 relative z-10">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono tracking-wider">
                    <span>LIVE DATA STREAM</span>
                    <span className="flex items-center text-green-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      CONNECTED
                    </span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => (
  <div className="flex gap-6 group">
    <div className={`w-16 h-16 ${color} border rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-medsci-blue transition-colors">{title}</h4>
      <p className="text-slate-500 text-sm leading-7">{desc}</p>
    </div>
  </div>
);

const StatCard = ({ number, label, color }: { number: string, label: string, color: string }) => (
  <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors hover:border-white/10">
    <p className={`text-3xl font-bold ${color} mb-2`}>{number}</p>
    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{label}</p>
  </div>
);

export default Features;
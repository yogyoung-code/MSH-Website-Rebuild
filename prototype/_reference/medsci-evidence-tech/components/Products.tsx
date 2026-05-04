import React from 'react';
import { Stethoscope, Microscope, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Product Matrix</span>
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">双引擎驱动医疗未来</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">针对不同医疗场景，我们构建了专有的 Evidence-Engine，无缝集成临床与科研工作流。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* DeepEvidence Card */}
          <div className="group relative bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-200 shadow-xl overflow-hidden hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity z-10 duration-500">
              <Stethoscope size={180} className="text-blue-600" />
            </div>
            
            <div className="relative z-20 flex-1 flex flex-col">
               <div className="mb-6">
                 <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold tracking-widest uppercase">
                   Clinical AI
                 </span>
               </div>
               
               <h3 className="font-serif text-4xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">DeepEvidence</h3>
               <p className="text-xl text-slate-400 mb-8 font-light tracking-tight">床旁决策之盾</p>
               
               <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                 面向忙碌的查房与门诊现场。通过 RAG 架构将 AI 的每一次输出强行锚定在官方库中，为医生规避执业风险，提供即时的临床第二意见。
               </p>
               
               <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100 group-hover:border-blue-100 transition-colors">
                  <ul className="space-y-4">
                    <ListItem text="动态鉴别诊断建议" color="text-blue-600" />
                    <ListItem text="100% 原始证据一键跳转" color="text-blue-600" />
                    <ListItem text="医患沟通智能转义" color="text-blue-600" />
                  </ul>
               </div>
               
               <div className="mt-auto">
                 <a href="https://deepevidence-canary-1086548595220.us-west1.run.app" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 group-hover:shadow-blue-500/30">
                   访问临床端原型 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
            </div>
          </div>

          {/* SeekEvidence Card */}
          <div className="group relative bg-[#0B0F19] rounded-[2.5rem] p-10 lg:p-12 border border-slate-800 shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-[#0B0F19] z-0"></div>
             <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full -mr-20 -mt-20 blur-3xl transition-transform group-hover:scale-125 duration-700"></div>
             
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity z-10 duration-500">
              <Microscope size={180} className="text-violet-400" />
            </div>

            <div className="relative z-20 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-900/30 text-violet-300 border border-violet-500/30 text-xs font-bold tracking-widest uppercase">
                  Research AI
                </span>
              </div>
              
              <h3 className="font-serif text-4xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors">SeekEvidence</h3>
              <p className="text-xl text-slate-500 mb-8 font-light tracking-tight">临床科研之镜</p>
              
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                不再被海量低质量信息淹没。将全球证据进行结构化提炼，从课题申报到论文撰写，全面提速科研成果产出，自动生成 Meta 分析数据表。
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-10 border border-white/10 group-hover:border-violet-500/30 transition-colors">
                <ul className="space-y-4">
                  <ListItem text="自动化文献 PICO 提炼" color="text-violet-400" dark />
                  <ListItem text="GRADE 证据级别自动评定" color="text-violet-400" dark />
                  <ListItem text="全球学术热点雷达监测" color="text-violet-400" dark />
                </ul>
              </div>
              
              <div className="mt-auto">
                <a href="https://seekevidence-canary-165493381714.us-west1.run.app" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full bg-violet-600 text-white py-4 rounded-xl font-bold hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-500/40">
                  访问科研端原型 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text, color, dark = false }: { text: string; color: string; dark?: boolean }) => (
  <li className={`flex items-center text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
    <CheckCircle2 size={20} className={`mr-3 flex-shrink-0 ${color}`} />
    {text}
  </li>
);

export default Products;
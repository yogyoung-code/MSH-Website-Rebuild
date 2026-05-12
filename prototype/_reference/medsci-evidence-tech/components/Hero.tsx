import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Sparkles, 
  FileText, 
  Search, 
  MessageSquare, 
  BarChart3, 
  Share2, 
  MoreHorizontal, 
  Zap 
} from 'lucide-react';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deep' | 'seek'>('deep');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev === 'deep' ? 'seek' : 'deep'));
    }, 8000);

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-[#05080f]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
        <div className={`absolute inset-0 bg-gradient-to-b ${
          activeTab === 'deep' 
            ? 'from-blue-950/40 via-[#05080f] to-[#05080f]' 
            : 'from-violet-950/40 via-[#05080f] to-[#05080f]'
        }`}></div>
        
        {/* Animated Orbs */}
        <div className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[100px] opacity-40 transition-all duration-1000 animate-pulse-slow ${
          activeTab === 'deep' ? 'bg-blue-600/30' : 'bg-violet-600/30'
        }`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 transition-all duration-1000 ${
          activeTab === 'deep' ? 'bg-cyan-500/20' : 'bg-fuchsia-500/20'
        }`}></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-xl transition-all duration-500 ${
              activeTab === 'deep' 
                ? 'bg-blue-950/30 border-blue-500/30 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                : 'bg-violet-950/30 border-violet-500/30 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
            }`}
          >
            <Sparkles size={12} className="mr-2" />
            Next Gen Evidence-Based Medicine
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            <span className="block mb-2 text-slate-100">
              {activeTab === 'deep' ? '医疗决策的' : '临床研究的'}
            </span>
            <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-700 ${
               activeTab === 'deep' 
               ? 'from-blue-300 via-cyan-200 to-white' 
               : 'from-violet-300 via-fuchsia-200 to-white'
            }`}>
              {activeTab === 'deep' ? '精确导航' : '全景洞察'}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            {activeTab === 'deep' 
              ? 'DeepEvidence 专为临床医生设计，通过 RAG 技术实时锚定权威指南，提供零幻觉的诊疗建议。'
              : 'SeekEvidence 赋能医学科研，从文献综述、系统评价到数据分析、方案设计，直至论文撰写、期刊发表全流程。'
            }
          </p>
        </div>

        {/* Browser Mockup Container */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           {/* Tab Switcher specialized */}
           <div className="flex justify-center mb-10">
              <div className="bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 shadow-2xl flex space-x-1">
                <button 
                  onClick={() => setActiveTab('deep')}
                  className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === 'deep' 
                    ? 'text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 ring-1 ring-white/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Activity size={16} className="scale-x-[-1]" />
                  <span>DeepEvidence</span>
                </button>
                <button 
                  onClick={() => setActiveTab('seek')}
                  className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === 'seek' 
                    ? 'text-white shadow-lg bg-gradient-to-r from-violet-600 to-violet-500 ring-1 ring-white/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <SeekIcon className="h-4 w-auto" />
                  <span>SeekEvidence</span>
                </button>
              </div>
           </div>

          {/* App Interface */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row h-[560px] relative group shadow-2xl shadow-black/50 ring-1 ring-white/10">
             {/* Gradient Glow */}
             <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r transition-colors duration-500 ${
                activeTab === 'deep' ? 'from-blue-500 via-cyan-400 to-blue-600' : 'from-violet-500 via-fuchsia-400 to-violet-600'
             }`}></div>

             {/* Sidebar (Mock) */}
             <div className="hidden md:flex w-64 bg-[#0B0C10]/80 backdrop-blur-md border-r border-white/5 flex-col p-4">
                <div className="flex items-center space-x-2 mb-8 px-2 pt-2">
                   <div className={`w-7 h-7 rounded-lg flex items-center justify-center shadow-inner ${activeTab === 'deep' ? 'bg-blue-600/20 text-blue-400' : 'bg-violet-600/20 text-violet-400'}`}>
                      {activeTab === 'deep' ? <Activity size={16} className="scale-x-[-1]" /> : <SeekIcon className="h-4 w-auto" />}
                   </div>
                   <span className="font-bold text-slate-200 text-sm tracking-wide">{activeTab === 'deep' ? 'DeepEvidence' : 'SeekEvidence'}</span>
                </div>
                
                <div className="space-y-1">
                   <SidebarItem active icon={<MessageSquare size={16} />} text="New Chat" />
                   <SidebarItem icon={<Search size={16} />} text="Evidence Search" />
                   <SidebarItem icon={<FileText size={16} />} text="Saved Reports" />
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                   <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 ring-2 ring-white/10"></div>
                         <div className="flex-1">
                            <div className="h-2 w-20 bg-slate-700/50 rounded mb-1.5"></div>
                            <div className="h-2 w-12 bg-slate-700/50 rounded"></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Main Content Area */}
             <div className="flex-1 bg-[#0F1117]/60 flex flex-col relative overflow-hidden backdrop-blur-sm">
                {/* Header Mock */}
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                   <span className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                      {activeTab === 'deep' ? 'Model: MED-LLM-PRO-V2 (Clinical)' : 'Model: Research-Graph-V4'}
                   </span>
                   <div className="flex space-x-3">
                      <Share2 size={16} className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
                      <MoreHorizontal size={16} className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
                   </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar relative">
                  <AnimatePresence mode="wait">
                    {activeTab === 'deep' ? (
                      <motion.div 
                        key="deep-content"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 max-w-3xl mx-auto"
                      >
                         {/* User Message */}
                         <div className="flex justify-end">
                            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-4 max-w-[85%] shadow-lg shadow-blue-900/20 text-sm leading-relaxed">
                               <p>患者 65 岁，2型糖尿病合并慢性肾脏病 (CKD G3a)，目前服用二甲双胍。是否需要调整降糖方案？参考最新指南。</p>
                            </div>
                         </div>

                         {/* AI Message */}
                         <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                               <Activity size={14} className="text-teal-400 scale-x-[-1]" />
                            </div>
                            <div className="space-y-4 flex-1">
                               <div className="bg-[#151921] border border-white/10 rounded-2xl rounded-tl-sm p-6 shadow-xl">
                                  <div className="flex items-center space-x-2 mb-4">
                                     <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Evidence Based Analysis</span>
                                     <div className="h-px flex-1 bg-gradient-to-r from-teal-500/20 to-transparent"></div>
                                  </div>
                                  <p className="text-slate-300 text-sm leading-7 mb-4">
                                    根据 <span className="text-teal-300 font-medium border-b border-teal-500/30 cursor-pointer hover:bg-teal-500/10 transition px-0.5 rounded">2024 ADA 糖尿病诊疗标准</span> 及 <span className="text-teal-300 font-medium border-b border-teal-500/30 cursor-pointer hover:bg-teal-500/10 transition px-0.5 rounded">KDIGO 2024 指南</span>：
                                  </p>
                                  <ul className="space-y-3 text-sm text-slate-300 mb-6">
                                     <li className="flex items-start group">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 shrink-0 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.6)] transition-shadow"></div>
                                        <span>
                                           <strong className="text-white">推荐加用 SGLT2i：</strong> 对于 T2DM 合并 CKD 患者，若 eGFR ≥ 20 ml/min/1.73m²，强烈推荐使用 SGLT2i（如达格列净、恩格列净）以延缓肾病进展并降低心血管风险 (证据级别 A)。
                                        </span>
                                     </li>
                                     <li className="flex items-start group">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 shrink-0 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.6)] transition-shadow"></div>
                                        <span>
                                           <strong className="text-white">二甲双胍调整：</strong> 若 eGFR 在 45-60 之间可维持原量；若 eGFR &lt; 45，应减量；若 &lt; 30 则禁忌。建议监测 eGFR 变化。
                                        </span>
                                     </li>
                                  </ul>
                                  
                                  {/* Citations */}
                                  <div className="flex gap-2 flex-wrap">
                                     <CitationBadge label="ADA 2024 Standards of Care" type="Guideline" />
                                     <CitationBadge label="DAPA-CKD Trial" type="RCT" />
                                     <CitationBadge label="Metformin Label (NMPA)" type="SPL" />
                                  </div>
                               </div>
                               
                               <div className="flex space-x-2">
                                  <ActionChip icon={<FileText size={12}/>} label="生成处方建议" />
                                  <ActionChip icon={<Share2 size={12}/>} label="发送至患者端" />
                               </div>
                            </div>
                         </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="seek-content"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 max-w-3xl mx-auto"
                      >
                         {/* User Message */}
                         <div className="flex justify-end">
                            <div className="bg-violet-600 text-white rounded-2xl rounded-tr-sm px-5 py-4 max-w-[85%] shadow-lg shadow-violet-900/20 text-sm leading-relaxed">
                               <p>提取近 5 年关于“免疫检查点抑制剂治疗非小细胞肺癌”的所有 III 期临床试验，对比 PFS 和 OS 数据。</p>
                            </div>
                         </div>

                         {/* AI Message */}
                         <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                               <SeekIcon className="h-3.5 w-auto text-indigo-400" />
                            </div>
                            <div className="space-y-4 flex-1">
                               <div className="bg-[#151921] border border-white/10 rounded-2xl rounded-tl-sm p-6 shadow-xl relative overflow-hidden group/table">
                                  {/* Table Overlay */}
                                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[60px] rounded-full pointer-events-none group-hover/table:bg-indigo-500/10 transition-colors"></div>

                                  <div className="flex items-center justify-between mb-5">
                                     <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Structured Data Extraction</span>
                                     <span className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20">N = 12 Trials Found</span>
                                  </div>

                                  <div className="overflow-x-auto">
                                     <table className="w-full text-left border-collapse">
                                        <thead>
                                           <tr className="border-b border-white/10 text-xs text-slate-500 font-mono uppercase tracking-wider">
                                              <th className="py-2 pr-4 font-medium">Trial Name</th>
                                              <th className="py-2 pr-4 font-medium">Intervention</th>
                                              <th className="py-2 pr-4 font-medium">PFS (mo)</th>
                                              <th className="py-2 font-medium">HR (95% CI)</th>
                                           </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-300">
                                           <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                              <td className="py-3 pr-4 font-medium text-white">KEYNOTE-189</td>
                                              <td className="py-3 pr-4 text-xs">Pembrolizumab + Chemo</td>
                                              <td className="py-3 pr-4 text-green-400 font-medium">8.8 vs 4.9</td>
                                              <td className="py-3 text-xs font-mono text-slate-400">0.52 (0.43-0.64)</td>
                                           </tr>
                                           <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                              <td className="py-3 pr-4 font-medium text-white">IMpower150</td>
                                              <td className="py-3 pr-4 text-xs">Atezo + Bevacizumab</td>
                                              <td className="py-3 pr-4 text-green-400 font-medium">8.3 vs 6.8</td>
                                              <td className="py-3 text-xs font-mono text-slate-400">0.62 (0.52-0.74)</td>
                                           </tr>
                                           <tr className="hover:bg-white/5 transition-colors">
                                              <td className="py-3 pr-4 font-medium text-white">CheckMate 9LA</td>
                                              <td className="py-3 pr-4 text-xs">Nivo + Ipi + Chemo</td>
                                              <td className="py-3 pr-4 text-green-400 font-medium">6.8 vs 5.0</td>
                                              <td className="py-3 text-xs font-mono text-slate-400">0.70 (0.57-0.86)</td>
                                           </tr>
                                        </tbody>
                                     </table>
                                  </div>
                               </div>
                               
                               <div className="flex space-x-2">
                                  <ActionChip icon={<BarChart3 size={12}/>} label="生成森林图 (Forest Plot)" />
                                  <ActionChip icon={<FileText size={12}/>} label="导出 Excel" />
                               </div>
                            </div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Input Area Mock */}
                <div className="p-4 bg-white/[0.02] border-t border-white/5">
                   <div className="bg-[#0B0C10] border border-white/10 rounded-xl h-12 flex items-center px-4 justify-between hover:border-white/20 transition-colors">
                      <div className="flex items-center space-x-2 w-full">
                         <div className="w-0.5 h-4 bg-slate-700 animate-pulse"></div>
                         <div className="text-slate-600 text-sm">Ask anything...</div>
                      </div>
                      <div className={`p-1.5 rounded-lg transition-colors ${activeTab === 'deep' ? 'bg-blue-600 text-white' : 'bg-violet-600 text-white'}`}>
                         <ArrowRightIcon />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SidebarItem = ({ icon, text, active = false }: { icon: React.ReactNode, text: string, active?: boolean }) => (
   <div className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
      active 
      ? 'bg-white/10 text-white shadow-sm border border-white/5' 
      : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
   }`}>
      {icon}
      <span className="text-sm font-medium">{text}</span>
   </div>
);

const CitationBadge = ({ label, type }: { label: string, type: string }) => (
   <div className="flex items-center bg-[#0F1117] border border-slate-700/50 rounded px-2 py-1 space-x-2 cursor-pointer hover:border-teal-500/50 hover:bg-teal-500/5 transition">
      <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-1.5 rounded-sm">{type}</span>
      <span className="text-xs text-slate-300">{label}</span>
   </div>
);

const ActionChip = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <button className="flex items-center space-x-1.5 bg-[#1A1F29] hover:bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-white/5 transition-colors hover:border-white/20">
      {icon}
      <span>{label}</span>
   </button>
);

const ArrowRightIcon = () => (
   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
   </svg>
);

const SeekIcon = ({ className }: { className?: string }) => (
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 346 268" 
    className={className}
    fill="currentColor"
  >
    <path d="M114.910912,163.000000 C114.886749,136.029526 114.814827,109.558952 114.867592,83.088631 C114.884430,74.637054 118.835884,68.344002 126.557312,64.912819 C134.550613,61.360817 142.203415,62.476528 148.962036,68.107483 C153.735916,72.084831 155.834885,77.502327 155.852158,83.573067 C155.954941,119.699280 155.904770,155.825928 156.013458,191.952118 C156.040329,200.884674 148.010529,211.900436 136.189957,211.195374 C122.316689,210.367920 115.031219,203.856308 114.947990,189.970444 C114.895103,181.147202 114.920929,172.323502 114.910912,163.000000 z"/>
    <path d="M217.028412,181.989929 C217.064148,149.200790 217.019241,116.909164 217.169617,84.618454 C217.240768,69.342972 229.949295,59.793537 244.161331,64.033890 C252.833496,66.621346 258.109650,74.050491 258.120361,84.181702 C258.151886,113.976128 258.081757,143.770676 258.044159,173.565170 C258.035950,180.056442 258.017853,186.547821 257.968231,193.038895 C257.900330,201.921158 249.156891,211.700623 239.264450,211.208496 C223.775757,210.437988 217.022293,204.205048 217.021576,188.480057 C217.021484,186.482651 217.025665,184.485229 217.028412,181.989929 z"/>
    <path d="M166.120728,124.002441 C166.146301,119.006294 165.961395,114.496391 166.240189,110.015350 C166.961990,98.413872 175.996719,89.806778 187.002319,90.001671 C197.897232,90.194603 206.778793,99.260284 206.896240,110.863182 C207.076614,128.683487 207.080734,146.508850 206.870956,164.328674 C206.729034,176.383469 197.930542,185.216232 186.607895,185.257324 C175.281677,185.298431 166.410873,176.513641 166.186066,164.475876 C165.937317,151.155441 166.124283,137.826874 166.120728,124.002441 z"/>
    <path d="M72.334930,106.220688 C88.265289,96.589935 104.650238,105.320274 105.070129,123.423058 C105.294022,133.075668 105.233940,142.742065 105.017273,152.395844 C104.757332,163.977432 97.224098,172.324280 86.752258,173.046768 C74.812195,173.870560 65.625328,167.123093 64.645317,155.027130 C63.708797,143.468048 64.332527,131.758362 64.699150,120.128410 C64.873642,114.593521 67.697731,109.990303 72.334930,106.220688 z"/>
    <path d="M308.891510,133.006744 C308.897003,139.997818 309.013367,146.492477 308.882629,152.982162 C308.642792,164.886993 300.368805,172.940308 288.536621,172.959320 C276.691040,172.978333 268.329407,164.958542 268.123169,153.061234 C267.944336,142.742935 267.909546,132.416199 268.107574,122.098877 C268.326355,110.701187 276.442963,102.933266 287.903839,102.753403 C299.766724,102.567215 308.155457,110.037209 308.812225,121.523315 C309.021027,125.174461 308.874756,128.845917 308.891510,133.006744 z"/>
  </svg>
);

export default Hero;
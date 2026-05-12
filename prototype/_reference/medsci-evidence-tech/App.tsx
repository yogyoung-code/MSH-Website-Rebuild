import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import PharmaSection from './components/PharmaSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [modalType, setModalType] = useState<'apply' | 'pharma' | null>(null);

  const handleCloseModal = () => setModalType(null);

  return (
    <div className="antialiased min-h-screen">
      <Header onApply={() => setModalType('apply')} />
      
      <main>
        <Hero />
        <Features />
        <Products />
        <PharmaSection onPartner={() => setModalType('pharma')} />
      </main>

      <Footer />

      <Modal 
        isOpen={!!modalType} 
        onClose={handleCloseModal}
        title={modalType === 'apply' ? '申请内测资格' : '药企数据入驻方案'}
      >
        {modalType === 'apply' ? (
          <>
            <p className="text-slate-500 text-sm mb-6">
              目前 Canary 预览版仅向受邀专家及部分三甲医院开放。请留下您的联系方式，我们的医学顾问将与您联系。
            </p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleCloseModal(); }}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">姓名</label>
                <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Dr. Zhang" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">医院/机构</label>
                <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="上海瑞金医院" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">工作邮箱</label>
                <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="name@hospital.org" />
              </div>
              <button type="submit" className="w-full bg-medsci-blue text-white py-3.5 rounded-xl font-bold mt-2 hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                确认提交
              </button>
            </form>
          </>
        ) : (
          <>
             <p className="text-slate-500 text-sm mb-6">确保您的药品在梅斯 330 万医师决策流中“不被误读”。</p>
             <div className="bg-blue-50 p-5 rounded-2xl mb-6 border border-blue-100">
                <p className="text-xs text-blue-700 font-bold uppercase mb-3 tracking-widest">合作权益 Partner Benefits</p>
                <ul className="text-xs text-slate-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">●</span> 
                      官方结构化说明书 (SPL) 实时对齐
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">●</span> 
                      医生端意识洞察报告
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">●</span> 
                      循证医学证据库 (E-Library) 共建
                    </li>
                </ul>
             </div>
             <button onClick={handleCloseModal} className="w-full border-2 border-medsci-blue text-medsci-blue py-3.5 rounded-xl font-bold hover:bg-blue-50 transition">
               申请“合作伙伴绿色通道”
             </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default App;
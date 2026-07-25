/* SmartFormCN.jsx — 联系表单中文版（对应 components/SmartForm.jsx）
   ---------------------------------------------------------------------------
   ⚠ 后端契约：本文件只翻译面向用户的 label / placeholder / 选项显示文本 /
   校验提示 / 成功态与失败态文案。以下标识符与英文版逐字一致，改动即破坏
   Apps Script 侧的 Sheet 列与邮件路由（见 docs/contact-form-apps-script.md）：
     · payload 键名： intent / block / name / email / company / message /
                      submittedAt / page / userAgent
     · intent 取值：  pilot | expert | rfp | other |
                      ai_notify_me | ai_product_access | ai_reverse_dd | research_scope
     · block 取值：   evidence | physicians | physician-research | communications |
                      platform | paths | sprint | content-review | other
     · hidden input 的 name="intent" / name="block"
     · URL 参数 ?intent=... / ?simulateError=1 的取值
   --------------------------------------------------------------------------- */

// 与英文版同一个端点，勿改。
const FORM_ENDPOINT = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec';

// v3.0 AI Platform routed intents —— key 与 block 值是发给后端的标识符，不翻译；
// badge / title / subtitle 是给用户看的显示文本，中文改写。
// 注：ai_reverse_dd 的前台文案按 i18n 规范不出现「反向尽调」字样。
const AI_ROUTED_INTENTS = {
  ai_notify_me: {
    badge: 'AI 平台 · 即将开放',
    title: '下一个 AI 产品开放时通知我。',
    subtitle: '限量预览开放时我们发一封邮件，仅此一封。不进营销名单。',
    block: 'platform',
  },
  ai_product_access: {
    badge: 'AI 平台 · 限量预览',
    title: '申请 AI 产品限量预览。',
    subtitle: '面向临床医生与在合作中的研究团队开放。申请我们在 5 个工作日内审完。',
    block: 'platform',
  },
  ai_reverse_dd: {
    badge: 'AI 平台 · 技术深谈',
    title: '和我们的 AI 团队直接谈。',
    subtitle: '能力核验、技术深度沟通或合作探讨，由 AI 团队本人接。',
    block: 'platform',
  },
  // Physician Research routed intent (2026-06-12) — /solutions/physician-research CTA
  research_scope: {
    badge: '医生调研 · 立项',
    title: '立一个医生调研项目。',
    subtitle: '给我们一个要回答的问题和目标样本，2 个工作日内回你方法、排期与报价。',
    block: 'physician-research',
  },
};

function SmartFormCN({ onSubmit, simulateError, routedIntent }) {
  const aiRoute = routedIntent && AI_ROUTED_INTENTS[routedIntent];
  const [intent, setIntent] = React.useState(aiRoute ? routedIntent : '');
  const [block, setBlock] = React.useState(aiRoute ? aiRoute.block : '');
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [agreesPrivacy, setAgreesPrivacy] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [phase, setPhase] = React.useState('idle'); // idle | submitting | success | error
  const [errorDetail, setErrorDetail] = React.useState('');

  const validateEmail = (value) => {
    if (!value) return '请填写你的工作邮箱。';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return '这个邮箱地址看起来不完整。';
    return '';
  };

  const onEmailBlur = () => setEmailError(validateEmail(form.email));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailErr = validateEmail(form.email);
    if (emailErr) { setEmailError(emailErr); return; }
    setPhase('submitting');
    setErrorDetail('');

    // Sprint-not-for-fit routing (Copy Deck v4.2 §10.2.6 / §10.3 priority rule)：
    // 与英文版同一条规则，判定关键词未改（防回环：绝不跳回 /contact）。
    if (block === 'other' && /^(individual|patient|hospital).*$/i.test(form.message)) {
      const otherHref = (window.MSH && window.MSH.L)
        ? window.MSH.L('/services/other-engagements.html')
        : '/services/other-engagements.html';
      window.location.href = otherHref;
      return;
    }

    try {
      // payload 键名与取值全部与英文版一致
      const payload = {
        intent,
        block,
        ...form,
        submittedAt: new Date().toISOString(),
        page: typeof window !== 'undefined' ? window.location.pathname : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      };

      // ?simulateError=1 仍然可用于本地 QA
      const wantError = simulateError
        || (typeof window !== 'undefined'
            && window.location
            && window.location.search
            && window.location.search.indexOf('simulateError=1') !== -1);
      if (wantError) throw new Error('Network error (simulated)');

      // 真实提交到 Google Apps Script
      // - 不设 Content-Type，避免 CORS preflight（Apps Script 不响应 OPTIONS）
      // - 服务端用 JSON.parse(e.postData.contents) 还原 payload
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);

      onSubmit && onSubmit(payload);

      // v3.0 Task 15 GA hook —— 事件名与参数与英文版一致
      if (typeof window !== 'undefined' && window.MSHAnalytics) {
        if (intent === 'ai_notify_me' && window.MSHAnalytics.trackNotifyMeSubmit) {
          window.MSHAnalytics.trackNotifyMeSubmit('contact_form');
        } else if (intent === 'ai_product_access' && window.MSHAnalytics.trackAccessRequestSubmit) {
          window.MSHAnalytics.trackAccessRequestSubmit('unspecified', form.company || 'unspecified');
        }
      }

      setPhase('success');
    } catch (err) {
      setErrorDetail((err && err.message) || 'Network error');
      setPhase('error');
    }
  };

  const retry = () => {
    setPhase('idle');
    setErrorDetail('');
  };

  const reset = () => {
    setIntent('');
    setBlock('');
    setForm({ name: '', email: '', company: '', message: '' });
    setAgreesPrivacy(false);
    setEmailError('');
    setPhase('idle');
  };

  const privacyHref = (typeof window !== 'undefined' && window.MSH && window.MSH.L)
    ? window.MSH.L('/legal/privacy.html')
    : '/legal/privacy.html';

  // 成功态 —— 替代 alert()
  if (phase === 'success') {
    return (
      <div role="status" aria-live="polite" style={{
        maxWidth: 'var(--form-max-width, 600px)', margin: '0 auto', padding: '0 var(--form-padding, 24px)'
      }}>
        <div style={{
          border: '1px solid var(--success-500)',
          background: 'var(--success-100)',
          borderRadius: 'var(--radius-lg, 12px)',
          padding: 'clamp(20px, 3vw, 32px)'
        }}>
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--success-500)',
            fontWeight: 700,
            marginBottom: 12
          }}>✓ 已收到</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.8vw, 28px)',
            color: 'var(--brand-primary-700)',
            margin: '0 0 12px',
            lineHeight: 1.3,
            fontWeight: 600
          }}>{form.name ? `${form.name.trim()}，` : ''}我们收到了。</h2>
          <p style={{
            fontSize: 15, color: 'var(--fg-2)',
            lineHeight: 1.6, margin: '0 0 8px'
          }}>
            一位有医学背景的项目负责人会在 <strong>2 个工作日内</strong>回复你，
            信里会写清楚对口团队、可行的起步方式，以及下一步需要你提供哪些材料。
            请查收 {form.email || '你的邮箱'}（含垃圾邮件箱），发件地址为 <code>hello@medscihealthcare.com</code>。
          </p>
          <p style={{
            fontSize: 13, color: 'var(--fg-3)',
            lineHeight: 1.5, margin: 0,
            fontFamily: 'var(--font-mono)'
          }}>
            受理编号 · {Math.random().toString(36).slice(2, 8).toUpperCase()} · {new Date().toISOString().slice(0, 10)}
          </p>
          <button type="button" onClick={reset} style={{
            marginTop: 20,
            padding: '10px 18px',
            background: 'transparent',
            color: 'var(--brand-primary-700)',
            border: '1px solid var(--brand-primary-700)',
            fontFamily: 'var(--font-ui)',
            fontSize: 14, fontWeight: 500,
            cursor: 'pointer'
          }}>再提交一条</button>
        </div>
      </div>
    );
  }

  const inputStyle = {
    display: 'block', width: '100%',
    padding: 12,
    fontFamily: 'var(--font-ui)',
    fontSize: 15,
    border: '1px solid var(--border-2)',
    borderRadius: 'var(--radius-md, 6px)',
    background: 'var(--bg-1)',
    color: 'var(--fg-1)'
  };
  const labelTextStyle = {
    display: 'block',
    fontSize: 13,
    color: 'var(--fg-2)',
    marginBottom: 6,
    fontWeight: 500
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 'var(--form-max-width, 600px)', margin: '0 auto', padding: '0 var(--form-padding, 24px)' }}>
      {phase === 'error' && (
        <div role="alert" aria-live="assertive" style={{
          border: '1px solid var(--error-500)',
          background: '#fef2f2',
          color: 'var(--error-500)',
          borderRadius: 'var(--radius-md, 6px)',
          padding: '14px 18px',
          marginBottom: 20,
          display: 'flex', gap: 14, alignItems: 'flex-start'
        }}>
          <span aria-hidden="true" style={{ fontWeight: 700, lineHeight: 1.2 }}>!</span>
          <div style={{ flex: 1, fontSize: 14, lineHeight: 1.5, color: 'var(--fg-1)' }}>
            <strong style={{ color: 'var(--error-500)' }}>提交失败。</strong>{' '}
            消息没能送出去——你填的内容都还在下面。可以重试一次，或者直接发邮件到{' '}
            <code style={{ fontFamily: 'var(--font-mono)' }}>hello@medscihealthcare.com</code>。
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--fg-3)', marginTop: 6
            }}>{errorDetail}</div>
            <button type="button" onClick={retry} style={{
              marginTop: 12, padding: '8px 16px',
              background: 'var(--error-500)', color: 'var(--bg-1)',
              border: 'none', borderRadius: 'var(--radius-md, 6px)',
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
              cursor: 'pointer'
            }}>重试</button>
          </div>
        </div>
      )}

      {/* v3.0 routed-intent 上下文标记（URL 带 ?intent=ai_* 时） */}
      {aiRoute && (
        <div style={{
          marginBottom: 24,
          padding: '14px 18px',
          background: 'var(--brand-primary-100)',
          border: '1px solid var(--brand-primary-300)',
          borderRadius: 'var(--radius-md, 6px)',
          color: 'var(--brand-primary-700)',
          fontSize: 13, lineHeight: 1.5,
        }}>
          <div style={{
            fontFamily: 'var(--font-ui)', fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 4,
          }}>{aiRoute.badge}</div>
          <strong style={{ display: 'block', fontSize: 14, marginBottom: 4 }}>{aiRoute.title}</strong>
          <span>{aiRoute.subtitle}</span>
          {/* 后端标识符：不翻译 */}
          <input type="hidden" name="intent" value={routedIntent} />
          <input type="hidden" name="block" value={aiRoute.block} />
        </div>
      )}

      {!aiRoute && (
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={labelTextStyle}>你这次想解决什么？</span>
          {/* option 的 value 是发给后端的标识符，不翻译；只译显示文本 */}
          <select value={intent} onChange={e => setIntent(e.target.value)} required style={inputStyle}>
            <option value="">请选择…</option>
            <option value="pilot">预约一个试点</option>
            <option value="expert">与专家沟通</option>
            <option value="rfp">RFP / 正式招采</option>
            <option value="other">其他</option>
          </select>
        </label>
      )}

      {!aiRoute && (
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={labelTextStyle}>对应的业务模块</span>
          <select value={block} onChange={e => setBlock(e.target.value)} required style={inputStyle}>
            <option value="">请选择…</option>
            <option value="evidence">医学证据</option>
            <option value="physicians">医生互动</option>
            <option value="physician-research">医生调研（HCP 调研）</option>
            <option value="communications">医学传播</option>
            <option value="platform">AI 赋能平台</option>
            <option value="paths">进入中国 / 出海美国</option>
            <option value="sprint">跨境内容冲刺</option>
            <option value="content-review">内容合规审核与本地化</option>
            <option value="other">其他</option>
          </select>
        </label>
      )}

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={labelTextStyle}>姓名</span>
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          maxLength={120}
          autoComplete="name"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={labelTextStyle}>工作邮箱</span>
        <input
          type="email"
          value={form.email}
          onChange={e => { setForm({ ...form, email: e.target.value }); if (emailError) setEmailError(''); }}
          onBlur={onEmailBlur}
          required
          autoComplete="email"
          aria-invalid={emailError ? 'true' : 'false'}
          aria-describedby="email-error"
          style={{
            ...inputStyle,
            borderColor: emailError ? 'var(--error-500)' : 'var(--border-2)'
          }}
        />
        {emailError && (
          <div id="email-error" role="alert" style={{
            fontSize: 12, color: 'var(--error-500)', marginTop: 6,
            fontFamily: 'var(--font-ui)'
          }}>{emailError}</div>
        )}
      </label>

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={labelTextStyle}>公司 / 机构</span>
        <input
          value={form.company}
          onChange={e => setForm({ ...form, company: e.target.value })}
          maxLength={160}
          autoComplete="organization"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={labelTextStyle}>你想要什么？</span>
        <textarea
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          rows={5}
          maxLength={2000}
          placeholder="一两句话就够：产品或适应症、目标市场、卡在哪个时间节点。"
          style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
        />
        <div style={{
          fontSize: 11, color: 'var(--fg-3)', marginTop: 4,
          fontFamily: 'var(--font-mono)', textAlign: 'right'
        }}>{form.message.length} / 2000</div>
      </label>

      <label style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        marginBottom: 20,
        fontSize: 13,
        color: 'var(--fg-2)',
        lineHeight: 1.5
      }}>
        <input
          type="checkbox"
          checked={agreesPrivacy}
          onChange={e => setAgreesPrivacy(e.target.checked)}
          style={{ marginTop: 3, flexShrink: 0 }}
        />
        <span>
          我已阅读并同意
          <a href={privacyHref} style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
            《隐私政策》
          </a>
          ，同意梅斯健康就本次咨询与我联系。
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreesPrivacy || phase === 'submitting'}
        aria-busy={phase === 'submitting'}
        title={!agreesPrivacy ? '请先勾选同意，再提交。' : undefined}
        style={{
          padding: '14px 28px',
          background: (agreesPrivacy && phase !== 'submitting') ? 'var(--brand-primary-700)' : 'var(--border-2)',
          color: 'var(--bg-1)',
          border: 'none',
          borderRadius: 'var(--radius-md, 6px)',
          cursor: (agreesPrivacy && phase !== 'submitting') ? 'pointer' : 'not-allowed',
          fontFamily: 'var(--font-ui)',
          fontSize: 14, fontWeight: 600,
          letterSpacing: '0.04em',
          minWidth: 160
        }}
      >
        {phase === 'submitting' ? '提交中…' : '提交'}
      </button>
    </form>
  );
}

if (typeof window !== 'undefined') window.SmartFormCN = SmartFormCN;

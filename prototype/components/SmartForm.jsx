/* SmartForm.jsx — Contact intake with business_block routing (B4) */

// v3.0 AI Platform routed intents (Plan task 14 / Spec §5).
// 当 URL ?intent=ai_* 时, contact.html 读取并以 routedIntent prop 传入,
// SmartForm 隐藏 intent select, 内部 state 设为 routedIntent 值, 跳过用户选择。
const AI_ROUTED_INTENTS = {
  ai_notify_me: {
    title: 'Notify me when the next AI product launches.',
    subtitle: "We'll send one email when Limited Preview opens. No marketing list.",
    block: 'platform',
  },
  ai_product_access: {
    title: 'Apply for AI product Limited Preview.',
    subtitle: 'Open to clinicians and research teams under engagement. We review applications within 5 business days.',
    block: 'platform',
  },
  ai_reverse_dd: {
    title: 'Talk to our AI team — Reverse-DD session.',
    subtitle: 'Reverse-due-diligence readout, technical deep-dive, or partnership exploration.',
    block: 'platform',
  },
};

function SmartForm({ onSubmit, simulateError, routedIntent }) {
  const aiRoute = routedIntent && AI_ROUTED_INTENTS[routedIntent];
  const [intent, setIntent] = React.useState(aiRoute ? routedIntent : '');
  const [block, setBlock] = React.useState(aiRoute ? aiRoute.block : '');
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [agreesPrivacy, setAgreesPrivacy] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [phase, setPhase] = React.useState('idle'); // idle | submitting | success | error
  const [errorDetail, setErrorDetail] = React.useState('');

  const validateEmail = (value) => {
    if (!value) return 'Please enter your work email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'That email address looks incomplete.';
    return '';
  };

  const onEmailBlur = () => setEmailError(validateEmail(form.email));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailErr = validateEmail(form.email);
    if (emailErr) { setEmailError(emailErr); return; }
    setPhase('submitting');
    setErrorDetail('');

    // Sprint-not-for-fit routing (Copy Deck v4.2 §10.2.6 / §10.3 priority rule):
    // block='other' + message hints at individual / patient / hospital intent →
    // redirect to /services/other-engagements (anti-loop guard: never back to /contact).
    if (block === 'other' && /^(individual|patient|hospital).*$/i.test(form.message)) {
      window.location.href = '/services/other-engagements.html';
      return;
    }

    try {
      // Prototype: simulate latency + optional failure injection (?simulateError=1)
      const wantError = simulateError
        || (typeof window !== 'undefined'
            && window.location
            && window.location.search
            && window.location.search.indexOf('simulateError=1') !== -1);
      await new Promise((resolve, reject) =>
        setTimeout(() => wantError ? reject(new Error('Network error (simulated)')) : resolve(), 600)
      );
      const payload = { intent, block, ...form };
      onSubmit && onSubmit(payload);

      // v3.0 Task 15 GA hook — routed AI intents 触发对应 GA4 事件
      // (consent-gated 在 ga4-events.js 内部判断)。
      if (typeof window !== 'undefined' && window.MSHAnalytics) {
        if (intent === 'ai_notify_me' && window.MSHAnalytics.trackNotifyMeSubmit) {
          window.MSHAnalytics.trackNotifyMeSubmit('contact_form');
        } else if (intent === 'ai_product_access' && window.MSHAnalytics.trackAccessRequestSubmit) {
          // product_slug 此处缺失 (URL 仅给 intent), 用 routedIntent 作 fallback
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

  // Success state — replaces alert()
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
          }}>✓ Received</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.8vw, 28px)',
            color: 'var(--brand-primary-700)',
            margin: '0 0 12px',
            lineHeight: 1.3,
            fontWeight: 600
          }}>Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we have your message.</h2>
          <p style={{
            fontSize: 15, color: 'var(--fg-2)',
            lineHeight: 1.6, margin: '0 0 8px'
          }}>
            A physician-trained program lead will reply within <strong>2 business days</strong>.
            Check {form.email || 'your inbox'} (and your spam folder) for our reply from <code>hello@medscihealthcare.com</code>.
          </p>
          <p style={{
            fontSize: 13, color: 'var(--fg-3)',
            lineHeight: 1.5, margin: 0,
            fontFamily: 'var(--font-mono)'
          }}>
            Reference · {Math.random().toString(36).slice(2, 8).toUpperCase()} · {new Date().toISOString().slice(0, 10)}
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
          }}>Send another message</button>
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
            <strong style={{ color: 'var(--error-500)' }}>Submission failed.</strong>{' '}
            We couldn't deliver your message — your input is preserved below. Try again, or
            email <code style={{ fontFamily: 'var(--font-mono)' }}>hello@medscihealthcare.com</code> directly.
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
            }}>Retry</button>
          </div>
        </div>
      )}

      {/* v3.0 routed-intent context badge (when ?intent=ai_*) */}
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
          }}>{routedIntent.replace(/_/g, ' ').toUpperCase()}</div>
          <strong style={{ display: 'block', fontSize: 14, marginBottom: 4 }}>{aiRoute.title}</strong>
          <span>{aiRoute.subtitle}</span>
          <input type="hidden" name="intent" value={routedIntent} />
          <input type="hidden" name="block" value={aiRoute.block} />
        </div>
      )}

      {!aiRoute && (
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={labelTextStyle}>What brings you here?</span>
          <select value={intent} onChange={e => setIntent(e.target.value)} required style={inputStyle}>
            <option value="">Select…</option>
            <option value="pilot">Book a pilot</option>
            <option value="expert">Talk to an expert</option>
            <option value="rfp">RFP / formal procurement</option>
            <option value="other">Other</option>
          </select>
        </label>
      )}

      {!aiRoute && (
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={labelTextStyle}>Business block of interest</span>
          <select value={block} onChange={e => setBlock(e.target.value)} required style={inputStyle}>
            <option value="">Select…</option>
            <option value="evidence">Medical Evidence</option>
            <option value="physicians">Physician Engagement</option>
            <option value="communications">Medical Communications</option>
            <option value="platform">AI-Enabled Platform</option>
            <option value="paths">Entering China / Going Global</option>
            <option value="sprint">Cross-Border Sprint</option>
            <option value="content-review">Content review & localization</option>
            <option value="other">Other</option>
          </select>
        </label>
      )}

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={labelTextStyle}>Name</span>
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
        <span style={labelTextStyle}>Work email</span>
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
        <span style={labelTextStyle}>Company / Organization</span>
        <input
          value={form.company}
          onChange={e => setForm({ ...form, company: e.target.value })}
          maxLength={160}
          autoComplete="organization"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={labelTextStyle}>What are you looking for?</span>
        <textarea
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          rows={5}
          maxLength={2000}
          placeholder="One or two sentences is enough."
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
          I agree to the{' '}
          <a href="/legal/privacy.html" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
            Privacy Policy
          </a>
          {' '}and consent to MedSci Healthcare contacting me about this inquiry.
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreesPrivacy || phase === 'submitting'}
        aria-busy={phase === 'submitting'}
        title={!agreesPrivacy ? 'Please confirm consent before submitting.' : undefined}
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
        {phase === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

if (typeof window !== 'undefined') window.SmartForm = SmartForm;

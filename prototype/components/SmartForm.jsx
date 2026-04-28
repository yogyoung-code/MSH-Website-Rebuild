/* SmartForm.jsx — Contact intake with business_block routing (B4) */
/*
 * Spec sources:
 *   - Plan §1796–1853 (verbatim structure: 4 intents + 7 business blocks +
 *     name/email/company/message + sprint-not-for-fit redirect heuristic)
 *   - Copy Deck v4.2 §10.1.3 (privacy consent + disabled submit) — hard
 *     legal requirement, added as surgical extension over plan code.
 *   - Copy Deck v4.2 §10.2 thank-you branches: deferred to V2 CMS;
 *     prototype keeps the plan's mock alert() for branches that are not
 *     the sprint-not-for-fit redirect.
 */

function SmartForm({ onSubmit }) {
  const [intent, setIntent] = React.useState('');
  const [block, setBlock] = React.useState('');
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [agreesPrivacy, setAgreesPrivacy] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sprint-not-for-fit routing (Copy Deck v4.2 §10.2.6 / §10.3 priority rule):
    // block='other' + message hints at individual / patient / hospital intent →
    // redirect to /services/other-engagements (anti-loop guard: never back to /contact).
    if (block === 'other' && /^(individual|patient|hospital).*$/i.test(form.message)) {
      window.location.href = '/services/other-engagements';
      return;
    }
    onSubmit && onSubmit({ intent, block, ...form });
    alert('Thanks. Mock submission. (Real backend + thank-you branches per Copy Deck §10.2 in V2 CMS.)');
  };

  const inputStyle = { display: 'block', width: '100%', padding: 10, marginBottom: 16 };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-2)', marginBottom: 4 }}>What brings you here?</span>
        <select value={intent} onChange={e => setIntent(e.target.value)} required style={{ width: '100%', padding: 10 }}>
          <option value="">Select...</option>
          <option value="pilot">Book a pilot</option>
          <option value="expert">Talk to an expert</option>
          <option value="rfp">RFP / formal procurement</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-2)', marginBottom: 4 }}>Business block of interest</span>
        <select value={block} onChange={e => setBlock(e.target.value)} required style={{ width: '100%', padding: 10 }}>
          <option value="">Select...</option>
          <option value="evidence">Medical Evidence</option>
          <option value="physicians">Physician Engagement</option>
          <option value="communications">Medical Communications</option>
          <option value="platform">AI-Enabled Platform</option>
          <option value="paths">Entering China / Going Global</option>
          <option value="sprint">Cross-Border Sprint</option>
          <option value="other">Other</option>
        </select>
      </label>

      <input value={form.name}    onChange={e => setForm({ ...form, name: e.target.value })}    placeholder="Name"    required style={inputStyle} />
      <input value={form.email}   onChange={e => setForm({ ...form, email: e.target.value })}   type="email" placeholder="Work email" required style={inputStyle} />
      <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company / Organization" style={inputStyle} />
      <textarea
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        placeholder="What are you looking for? One or two sentences is enough."
        rows={5}
        style={inputStyle}
      />

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
          <a href="/legal/privacy" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
            Privacy Policy
          </a>
          {' '}and consent to MedSci Healthcare contacting me about this inquiry.
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreesPrivacy}
        title={!agreesPrivacy ? 'Please confirm consent before submitting.' : undefined}
        style={{
          padding: '14px 28px',
          background: agreesPrivacy ? 'var(--brand-primary-700)' : 'var(--border-2)',
          color: 'var(--bg-1)',
          border: 'none',
          cursor: agreesPrivacy ? 'pointer' : 'not-allowed',
          fontFamily: 'var(--font-slogan)',
          fontSize: 14,
          letterSpacing: '0.08em'
        }}
      >
        Submit
      </button>
    </form>
  );
}

window.SmartForm = SmartForm;

/* ComplianceTableCN.jsx — /about-cn 合规与治理四支柱（中文孪生）
 *
 * 结构与 ComplianceTable.jsx 一一对应，仅内嵌文案改为中文：
 *   · 序号标签 "Pillar 01" → "支柱 01"
 * 四个支柱顺序固定，与英文版一致：
 *   01 每一份交付物都有医生在环
 *   02 中英双语医生审核
 *   03 来源链路与披露治理
 *   04 IR 级别的披露节奏
 */

function ComplianceTableCN({ pillars }) {
  if (!Array.isArray(pillars) || pillars.length === 0) return null;
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24
      }}>
        {pillars.map((p, i) => (
          <CompliancePillarCN
            key={i}
            index={i + 1}
            heading={p.heading}
            body={p.body}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}

function CompliancePillarCN({ index, heading, body, link }) {
  const indexLabel = String(index).padStart(2, '0');
  return (
    <article style={{
      borderTop: '2px solid var(--brand-primary-700)',
      paddingTop: 20,
      paddingRight: 8
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.16em',
        color: 'var(--brand-accent-700)',
        marginBottom: 8
      }}>
        支柱 {indexLabel}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        margin: '0 0 16px',
        color: 'var(--brand-primary-700)',
        lineHeight: 1.35
      }}>
        {heading}
      </h3>

      <p style={{
        fontSize: 15,
        color: 'var(--fg-1)',
        lineHeight: 1.75,
        margin: '0 0 16px'
      }}>
        {body}
      </p>

      {link && (
        <a
          href={link.href}
          {...(link.external ? { rel: 'external noopener' } : {})}
          style={{
            fontSize: 13,
            fontFamily: 'var(--font-ui)',
            color: 'var(--fg-link)',
            textDecoration: 'underline',
            letterSpacing: '0.02em'
          }}
        >
          → {link.label}
        </a>
      )}
    </article>
  );
}

window.ComplianceTableCN = ComplianceTableCN;
window.CompliancePillarCN = CompliancePillarCN;

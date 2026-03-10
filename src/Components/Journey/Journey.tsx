import React from 'react';

// Journey Timeline Component - Updated with Sub-Lead promotion (Feb 2026)
// Replace: src/components/Journey/Journey.tsx

const Journey: React.FC = () => {
  const milestones = [
    {
      year: '2017–2020',
      title: 'Professional Foundation',
      company: 'Eos Chimera Technologies',
      role: 'Junior Web Developer',
      description: 'Built e-commerce admin dashboard with Angular, NestJS, and PostgreSQL. Learned production workflows, code reviews, and team collaboration. Managed deployment pipeline with 99%+ uptime.',
      skills: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'Git'],
      color: '#6366f1',
      icon: '🏢',
      badge: null,
    },
    {
      year: '2020–2024',
      title: 'Skill Evolution & Production Apps',
      company: 'Independent Projects',
      role: 'Full-Stack Developer',
      description: 'Transitioned from Angular to React ecosystem. Built OGMOK membership system with real revenue (₱21.2K/month) and 93% efficiency improvements. Mastered TypeScript, serverless architecture, and modern practices.',
      skills: ['React', 'Next.js', 'TypeScript', 'Prisma', 'Supabase'],
      color: '#f59e0b',
      icon: '🚀',
      badge: null,
    },
    {
      year: 'Jun 2025–Jan 2026',
      title: 'Enterprise Contribution',
      company: 'Codebility',
      role: 'Contributing Developer',
      description: 'Ranked #3 contributor out of the entire cohort. Shipped 5+ major features: Attendance Points System, 10-Star Member Rating, Gmail-style Draft Tasks, Deadline tracker. Fixed critical auth ID mapping pattern now used team-wide. Reduced component duplication by 83%.',
      skills: ['Next.js 14', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind'],
      color: '#10b981',
      icon: '💼',
      badge: null,
    },
    {
      year: 'Feb 2026–Present',
      title: 'Team Leadership & Process Design',
      company: 'Codebility',
      role: 'Sub-Lead Developer',
      description: 'Promoted to Sub-Lead from #3 ranked contributor. Formalized team bug reporting process — severity tiers, Discord channel protocol, and Tuesday triage system adopted across all departments. Facilitated weekly team meetings, conducted code reviews, and maintained quality standards during team transition.',
      skills: ['Team Leadership', 'Process Design', 'Code Review', 'Next.js 14', 'TypeScript'],
      color: '#e879f9',
      icon: '⭐',
      // Highlighted badge for current promoted role
      badge: 'Promoted',
    },
  ];

  return (
    <section
      className="journey-section"
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #1e1e2e 0%, #27293d 100%)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            My Development Journey
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#a0aec0',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            From e-commerce systems to Sub-Lead driving team process and production impact
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {milestones.map((milestone, index) => (
            <div key={index} style={{ marginBottom: '3rem', position: 'relative' }}>
              <div
                style={{
                  background:
                    milestone.badge
                      ? 'rgba(232, 121, 249, 0.08)'
                      : 'rgba(99, 102, 241, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${milestone.badge ? 'rgba(232,121,249,0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                  borderRadius: '16px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Year Badge row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: milestone.color,
                      color: '#ffffff',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                    }}
                  >
                    {milestone.year}
                  </div>

                  {/* Promoted badge — only on sub-lead entry */}
                  {milestone.badge && (
                    <div
                      style={{
                        display: 'inline-block',
                        background: 'rgba(232,121,249,0.15)',
                        border: '1px solid #e879f9',
                        color: '#e879f9',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      ↑ {milestone.badge}
                    </div>
                  )}
                </div>

                {/* Title & Icon */}
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '1.75rem' }}>{milestone.icon}</span>
                  {milestone.title}
                </h3>

                {/* Company & Role */}
                <div
                  style={{
                    fontSize: '1.1rem',
                    color: milestone.color,
                    fontWeight: '600',
                    marginBottom: '1rem',
                  }}
                >
                  {milestone.role} · {milestone.company}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#a0aec0',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                  }}
                >
                  {milestone.description}
                </p>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {milestone.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '16px',
                        fontSize: '0.875rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats — updated to reflect sub-lead */}
        <div
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#6366f1', marginBottom: '0.5rem' }}>
              7+
            </div>
            <div style={{ color: '#a0aec0', fontSize: '1.1rem' }}>Years in Tech</div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#f59e0b', marginBottom: '0.5rem' }}>
              93%
            </div>
            <div style={{ color: '#a0aec0', fontSize: '1.1rem' }}>Efficiency Gain (OGMOK)</div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#10b981', marginBottom: '0.5rem' }}>
              5+
            </div>
            <div style={{ color: '#a0aec0', fontSize: '1.1rem' }}>Features Shipped at Codebility</div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#e879f9', marginBottom: '0.5rem' }}>
              ↑
            </div>
            <div style={{ color: '#a0aec0', fontSize: '1.1rem' }}>Promoted to Sub-Lead</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
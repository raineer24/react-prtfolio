import React, { useState } from 'react';

// OGMOK Case Study - Detailed problem-solving showcase
// This demonstrates development process beyond just the final product

const CaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('challenge');

  const tabs = [
    { id: 'challenge', label: 'The Challenge', icon: '⚠️' },
    { id: 'research', label: 'Research', icon: '🔍' },
    { id: 'solution', label: 'Solution', icon: '💡' },
    { id: 'impact', label: 'Impact', icon: '📈' },
    { id: 'technical', label: 'Technical', icon: '🛠️' }
  ];

  return (
    <section style={{
      padding: '6rem 2rem',
      background: '#1e1e2e',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(0, 255, 136, 0.2)',
            color: '#00ff88',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            📚 CASE STUDY
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            OGMOK Jiu-Jitsu Academy
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: '#a0aec0',
            maxWidth: '800px',
            lineHeight: '1.6'
          }}>
            How I reduced manual attendance logging by 93% and built a system 
            managing ₱21,200 in monthly revenue
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          minHeight: '500px'
        }}>

          {/* Challenge Tab */}
          {activeTab === 'challenge' && (
            <div>
              <h3 style={{
                fontSize: '2rem',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>
                ⚠️ The Problem
              </h3>

              <div style={{
                background: 'rgba(255, 107, 107, 0.1)',
                border: '2px solid rgba(255, 107, 107, 0.3)',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  <strong>Every weekend, coaches at OGMOK Jiu-Jitsu Academy faced the same frustration:</strong>
                </p>
                <ul style={{
                  fontSize: '1.1rem',
                  color: '#a0aec0',
                  lineHeight: '2',
                  paddingLeft: '1.5rem'
                }}>
                  <li><strong>15 minutes wasted</strong> manually recording attendance for 16 students</li>
                  <li><strong>Training delays</strong> while coaches filled out spreadsheets</li>
                  <li><strong>Data entry errors</strong> causing payment tracking issues</li>
                  <li><strong>No automated reminders</strong> for upcoming payments</li>
                  <li><strong>No visibility</strong> into student progress or payment history</li>
                </ul>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  { icon: '⏱️', value: '15 min', label: 'Per weekend session', color: '#ff6b6b' },
                  { icon: '👥', value: '23', label: 'Students to manage', color: '#ff6b6b' },
                  { icon: '❌', value: 'Manual', label: 'Spreadsheet tracking', color: '#ff6b6b' }
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: stat.color,
                      marginBottom: '0.5rem'
                    }}>{stat.value}</div>
                    <div style={{ color: '#a0aec0' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Research Tab */}
          {activeTab === 'research' && (
            <div>
              <h3 style={{
                fontSize: '2rem',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>
                🔍 User Research & Planning
              </h3>

              <h4 style={{
                fontSize: '1.5rem',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Key User Insights
              </h4>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
                {[
                  {
                    insight: 'Coaches want to focus on training, not admin work',
                    solution: 'Build fastest possible attendance logging system'
                  },
                  {
                    insight: 'Students forget payment due dates',
                    solution: 'Automated SMS reminders 3 days before due date'
                  },
                  {
                    insight: 'Need to track student progress over time',
                    solution: 'Individual student profiles with attendance history'
                  }
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '12px',
                    padding: '1.5rem'
                  }}>
                    <div style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>
                      {item.insight}
                    </div>
                    <div style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>→</div>
                    <div style={{ color: '#ffffff', fontWeight: '600' }}>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Solution Tab */}
          {activeTab === 'solution' && (
            <div>
              <h3 style={{
                fontSize: '2rem',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>
                💡 The Solution
              </h3>

              {[
                {
                  feature: '⚡ Bulk Attendance Modal',
                  description: 'One-click logging for 16+ students in under 30 seconds',
                  details: [
                    'Smart search with real-time filtering',
                    'Duplicate prevention to avoid errors',
                    'Visual confirmation with student names',
                    'Keyboard shortcuts for power users'
                  ]
                },
                {
                  feature: '📊 Real-time Dashboard',
                  description: 'Live statistics and student overview',
                  details: [
                    'Total students, active members, revenue tracking',
                    'Filter by payment status (paid/unpaid/overdue)',
                    'Quick actions for common tasks',
                    'Mobile-responsive card layout'
                  ]
                },
                {
                  feature: '💰 Payment Management',
                  description: 'Three-tier pricing with automated tracking',
                  details: [
                    '₱1,200 (Kids), ₱1,300 (Teens), ₱1,400 (Adults)',
                    'Payment history with timestamps',
                    'Next payment date calculations',
                    'Overdue payment indicators'
                  ]
                }
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '16px',
                  padding: '2rem',
                  marginBottom: '1.5rem'
                }}>
                  <h5 style={{
                    fontSize: '1.25rem',
                    color: '#10b981',
                    marginBottom: '0.5rem',
                    fontWeight: '700'
                  }}>
                    {item.feature}
                  </h5>
                  <p style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                  }}>
                    {item.description}
                  </p>
                  <ul style={{
                    color: '#a0aec0',
                    paddingLeft: '1.5rem',
                    lineHeight: '1.8'
                  }}>
                    {item.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Impact Tab */}
          {activeTab === 'impact' && (
            <div>
              <h3 style={{
                fontSize: '2rem',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>
                📈 Measurable Impact
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {[
                  { metric: '93%', label: 'Time Reduction', detail: '15 min → 30 sec', color: '#10b981' },
                  { metric: '₱21.2K', label: 'Monthly Revenue', detail: '23 active students', color: '#f59e0b' },
                  { metric: '100%', label: 'Error Elimination', detail: 'No manual mistakes', color: '#6366f1' },
                  { metric: '₱42', label: 'SMS Cost/Month', detail: 'Automated reminders', color: '#ec4899' }
                ].map((item, i) => (
                  <div key={i} style={{
                    background: `${item.color}15`,
                    border: `2px solid ${item.color}50`,
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      fontWeight: '800',
                      color: item.color,
                      marginBottom: '0.5rem'
                    }}>
                      {item.metric}
                    </div>
                    <div style={{
                      fontSize: '1.125rem',
                      color: '#ffffff',
                      fontWeight: '600',
                      marginBottom: '0.25rem'
                    }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#a0aec0' }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '2rem'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}>
                  💬 Real User Feedback
                </h4>
                <blockquote style={{
                  fontSize: '1.125rem',
                  color: '#a0aec0',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                  borderLeft: '4px solid #10b981',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  "Before this system, I spent 15 minutes every Saturday just recording who showed up. 
                  Now I click a few buttons and I'm done in 30 seconds. I can focus on teaching instead 
                  of paperwork."
                </blockquote>
                <div style={{ color: '#ffffff', fontWeight: '600', paddingLeft: '1.5rem' }}>
                  — OGMOK Head Instructor
                </div>
              </div>
            </div>
          )}

          {/* Technical Tab */}
          {activeTab === 'technical' && (
            <div>
              <h3 style={{
                fontSize: '2rem',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>
                🛠️ Technical Implementation
              </h3>

              <h4 style={{
                fontSize: '1.5rem',
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}>
                Architecture Overview
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem'
              }}>
                {[
                  {
                    layer: 'Frontend',
                    tech: ['React 18', 'Context API', 'React Router', 'Tailwind CSS'],
                    color: '#61dafb'
                  },
                  {
                    layer: 'Backend',
                    tech: ['Vercel Serverless', 'Node.js', 'Prisma ORM', 'JWT Auth'],
                    color: '#10b981'
                  },
                  {
                    layer: 'Database',
                    tech: ['PostgreSQL', 'Prisma Schema', 'Automated Migrations'],
                    color: '#336791'
                  }
                ].map((section, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${section.color}50`,
                    borderRadius: '16px',
                    padding: '2rem'
                  }}>
                    <h5 style={{
                      color: section.color,
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      marginBottom: '1rem'
                    }}>
                      {section.layer}
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {section.tech.map((item, j) => (
                        <span key={j} style={{
                          background: `${section.color}20`,
                          color: '#ffffff',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          border: `1px solid ${section.color}40`
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h4 style={{
                fontSize: '1.5rem',
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}>
                Key Technical Decisions
              </h4>

              {[
                {
                  decision: 'PostgreSQL over MongoDB',
                  reason: 'Relational data (students → payments → attendance) requires strong relationships and ACID compliance for financial accuracy'
                },
                {
                  decision: 'Prisma ORM',
                  reason: 'Type-safe database queries prevent runtime errors and provide excellent developer experience with auto-completion'
                },
                {
                  decision: 'Vercel Serverless',
                  reason: 'Zero maintenance, automatic scaling, and cost-effective for small application (free tier covers all traffic)'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    color: '#6366f1',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                  }}>
                    ✓ {item.decision}
                  </div>
                  <div style={{ color: '#a0aec0', lineHeight: '1.6' }}>
                    {item.reason}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '3rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '24px'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            See It In Action
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem'
          }}>
            Try the live application and explore the source code
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://student-membership-tracking-raineer24s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#ffffff',
                color: '#764ba2',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.125rem'
              }}
            >
              🌐 Live Demo
            </a>
            <a 
              href="https://github.com/raineer24/student-membership-tracking"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.125rem',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              📁 View Code
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
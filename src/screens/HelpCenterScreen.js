import React, { useState } from 'react';

const HelpCenterScreen = ({ showScreen, showToast }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📖' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'vehicle-control', name: 'Vehicle Control', icon: '🚗' },
    { id: 'charging', name: 'Charging', icon: '🔋' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' },
    { id: 'account', name: 'Account', icon: '👤' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I pair my vehicle with the app?',
      answer: 'To pair your vehicle: 1) Go to Vehicle Settings > Add Vehicle, 2) Scan the QR code in your vehicle, 3) Follow the on-screen instructions to complete pairing.',
      helpful: 45,
      notHelpful: 3
    },
    {
      id: 2,
      category: 'vehicle-control',
      question: 'Why can\'t I unlock my vehicle remotely?',
      answer: 'Remote unlock may fail due to: weak cellular signal, vehicle in sleep mode, or security settings. Ensure your phone has internet connectivity and try again.',
      helpful: 32,
      notHelpful: 8
    },
    {
      id: 3,
      category: 'charging',
      question: 'How do I schedule charging sessions?',
      answer: 'Go to Charging > Schedule, select your preferred time and days, set charge limit, and enable the schedule. Your vehicle will automatically start charging at the set time.',
      helpful: 28,
      notHelpful: 2
    },
    {
      id: 4,
      category: 'security',
      question: 'What is Sentry Mode and how do I enable it?',
      answer: 'Sentry Mode monitors your vehicle when parked and alerts you of potential threats. Enable it in Security Settings > Sentry Mode. Requires sufficient battery level.',
      helpful: 51,
      notHelpful: 1
    },
    {
      id: 5,
      category: 'troubleshooting',
      question: 'App is not connecting to my vehicle',
      answer: 'Try these steps: 1) Check internet connection, 2) Force close and restart app, 3) Ensure vehicle is awake, 4) Check for app updates, 5) Re-pair if necessary.',
      helpful: 67,
      notHelpful: 12
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I change my account password?',
      answer: 'Go to Profile > Security Settings > Change Password. Enter your current password, then your new password twice to confirm.',
      helpful: 23,
      notHelpful: 1
    },
    {
      id: 7,
      category: 'charging',
      question: 'What do the different charging status indicators mean?',
      answer: 'Blue: Preparing to charge, Green: Actively charging, Yellow: Charging paused/scheduled, Red: Charging error, Gray: Not connected.',
      helpful: 39,
      notHelpful: 4
    },
    {
      id: 8,
      category: 'vehicle-control',
      question: 'Can I control multiple vehicles with one account?',
      answer: 'Yes! You can add multiple vehicles to your account. Go to Vehicle Management > Add New Vehicle and follow the pairing process for each vehicle.',
      helpful: 19,
      notHelpful: 2
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      icon: '💬',
      desc: 'Chat with our support team',
      action: () => showScreen('contactSupport')
    },
    {
      title: 'Video Tutorials',
      icon: '🎥',
      desc: 'Watch step-by-step guides',
      action: () => showToast('Opening video tutorials...')
    },
    {
      title: 'User Manual',
      icon: '📚',
      desc: 'Download complete manual',
      action: () => showToast('User manual downloaded')
    },
    {
      title: 'Report Bug',
      icon: '🐛',
      desc: 'Report issues or bugs',
      action: () => showToast('Bug report form opened')
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="screen help-center">
      <div
        className="header"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: '#667eea',
          color: 'white',
          padding: '1rem'
        }}
      >
        <button
          className="back-button"
          onClick={() => showScreen('profile')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontWeight: '600'
          }}
        >
          ⬅ Back
        </button>
        <div
          className="vehicle-name"
          style={{ fontWeight: '600', fontSize: '1.2rem' }}
        >
          Help Center
        </div>
      </div>

      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>

        {/* Search */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <input
            type="text"
            placeholder="🔍 Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              style={{
                background: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{action.icon}</div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{action.title}</div>
              <div style={{ color: '#666', fontSize: '0.7rem' }}>{action.desc}</div>
            </button>
          ))}
        </div>

        {/* Categories */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Categories</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: selectedCategory === cat.id ? '#667eea' : '#f8f9fa',
                  color: selectedCategory === cat.id ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h3>
          {filteredFaqs.map((faq) => (
            <div key={faq.id} style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: expandedFaq === faq.id ? '#f8f9fa' : 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {faq.question} {expandedFaq === faq.id ? '▼' : '▶'}
              </button>
              {expandedFaq === faq.id && (
                <div style={{
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #e0e0e0',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 8px',
                  fontSize: '0.9rem',
                  color: '#555'
                }}>
                  {faq.answer}
                  <div style={{
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.8rem',
                    color: '#666'
                  }}>
                    <span>Was this helpful?</span>
                    <button
                      onClick={() => showToast('Thank you for your feedback!')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#2ecc71'
                      }}
                    >
                      👍 {faq.helpful}
                    </button>
                    <button
                      onClick={() => showToast('Feedback noted')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#e74c3c'
                      }}
                    >
                      👎 {faq.notHelpful}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterScreen;
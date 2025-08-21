import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header 
      className="navbar navbar-expand-lg navbar-dark px-4 shadow-lg border-bottom"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        position: 'relative'
      }}
    >
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
        animation: 'shimmer 3s ease-in-out infinite',
        pointerEvents: 'none'
      }}></div>

      <Link 
        to="/dashboard" 
        className="d-flex align-items-center text-white text-decoration-none hover-lift position-relative"
        style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 10 }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
      >
        <div 
          className="d-flex align-items-center justify-content-center me-3 rounded-4"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
            width: '56px',
            height: '56px',
            backdropFilter: 'blur(15px)',
            border: '2px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)',
            animation: 'rotate 4s linear infinite'
          }}></div>
          
          <div className="d-flex align-items-center justify-content-center position-relative" style={{ zIndex: 2 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#00f5ff', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#fc466b', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#3f5efb', stopOpacity: 1}} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
             
              <rect x="3" y="4" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.9"/>
              <rect x="10" y="4" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.9"/>
              <rect x="16" y="4" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.9"/>
              
              <rect x="3" y="10" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.7"/>
              <rect x="10" y="10" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.9"/>
              <rect x="16" y="10" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.7"/>
              
              <rect x="3" y="16" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.6"/>
              <rect x="10" y="16" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.8"/>
              <rect x="16" y="16" width="5" height="4" rx="1" fill="url(#iconGradient)" filter="url(#glow)" opacity="0.6"/>
              
              
              <path d="M8 6 L10 6" stroke="white" strokeWidth="1" opacity="0.6"/>
              <path d="M15 6 L16 6" stroke="white" strokeWidth="1" opacity="0.6"/>
              <path d="M8 12 L10 12" stroke="white" strokeWidth="1" opacity="0.6"/>
              <path d="M15 12 L16 12" stroke="white" strokeWidth="1" opacity="0.6"/>
            </svg>
          </div>
        </div>
        
        <div className="d-flex flex-column">
          <span className="navbar-brand fs-4 fw-bold mb-0" 
                style={{ 
                  letterSpacing: '-0.5px',
                  color: 'white',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  lineHeight: '1.1'
                }}>
            Resource Management
          </span>
          <span 
            style={{ 
              fontSize: '11px',
              color: 'rgba(255,255,255,0.8)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontWeight: '500',
              marginTop: '-2px'
            }}>
            Enterprise Suite
          </span>
        </div>
      </Link>
      
      <div className="ms-auto d-flex align-items-center position-relative" style={{ zIndex: 10 }}>
       
        <div 
          className="d-flex align-items-center text-white me-4 px-4 py-3 rounded-4"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <div 
            className="d-flex align-items-center justify-content-center me-3 rounded-circle position-relative"
            style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #fc466b 100%)',
              width: '42px',
              height: '42px',
              boxShadow: '0 4px 16px rgba(0,245,255,0.3)'
            }}
          >
            <i className="bi bi-person-workspace" 
               style={{ 
                 color: '#ffffff', 
                 fontSize: '18px',
                 filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
               }}></i>
            
            <div 
              className="position-absolute rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                background: '#00b894',
                top: '2px',
                right: '2px',
                border: '2px solid white',
                boxShadow: '0 0 0 2px rgba(0,184,148,0.3)'
              }}
            ></div>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-semibold" style={{ fontSize: '15px', lineHeight: '1.2' }}>
              {user?.username}
            </span>
            <span 
              className="badge rounded-pill mt-1"
              style={{
                background: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
                color: '#2d3436',
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                padding: '4px 12px',
                boxShadow: '0 2px 8px rgba(253,121,168,0.4)'
              }}
            >
              ⚡ {user?.role}
            </span>
          </div>
        </div>
        
        
        <button 
          className="btn btn-sm px-6 py-3 fw-bold rounded-4 position-relative"
          onClick={logout}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
            color: '#ffffff',
            border: '2px solid rgba(255,255,255,0.3)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '12px',
            minWidth: '120px',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)';
            e.target.style.transform = 'translateY(-3px) scale(1.05)';
            e.target.style.boxShadow = '0 12px 40px rgba(252,70,107,0.4)';
            e.target.style.borderColor = 'rgba(255,255,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.target.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
        >
          <i className="bi bi-box-arrow-right me-2" style={{ fontSize: '14px' }}></i>
          Sign Out
        </button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </header>
  );
};

export default Header;
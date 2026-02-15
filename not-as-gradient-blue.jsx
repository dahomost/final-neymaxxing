import React, { useState, useEffect } from 'react';
import { Camera, Search, Filter, MessageSquare, Calendar, Users, Bell, Settings, X, Check, MapPin, Briefcase, DollarSign, GraduationCap, ChevronRight, Menu, Zap, Globe, QrCode, ExternalLink, Phone, Video, Mic, Send } from 'lucide-react';

export default function NetMaxxingApp() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const screens = {
    welcome: <WelcomeScreen setScreen={setCurrentScreen} />,
    signup: <SignupScreen setScreen={setCurrentScreen} />,
    onboarding: <OnboardingScreen setScreen={setCurrentScreen} />,
    home: <HomeScreen setScreen={setCurrentScreen} setShowMenu={setShowMenu} />,
    profile: <ProfileScreen setScreen={setCurrentScreen} />,
    match: <MatchScreen setScreen={setCurrentScreen} />,
    messages: <MessagesScreen setScreen={setCurrentScreen} />,
    groups: <GroupsScreen setScreen={setCurrentScreen} />,
    events: <EventsScreen setScreen={setCurrentScreen} />,
    calendar: <CalendarScreen setScreen={setCurrentScreen} />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      {/* Navigation Menu */}
      {showMenu && (
        <div className="absolute inset-0 z-50 bg-blue-900/95 backdrop-blur-md">
          <div className="p-6">
            <button onClick={() => setShowMenu(false)} className="absolute top-6 right-6 text-white/80 hover:text-white">
              <X size={28} />
            </button>
            <nav className="mt-16 space-y-4">
              {[
                { name: 'Home', icon: Zap, screen: 'home' },
                { name: 'Messages', icon: MessageSquare, screen: 'messages' },
                { name: 'Groups', icon: Users, screen: 'groups' },
                { name: 'Events', icon: Calendar, screen: 'events' },
                { name: 'Calendar', icon: Calendar, screen: 'calendar' },
                { name: 'Profile', icon: Settings, screen: 'profile' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentScreen(item.screen);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-white text-lg"
                >
                  <item.icon size={24} />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Screen Container */}
      <div className="relative z-10">
        {screens[currentScreen]}
      </div>
    </div>
  );
}

function WelcomeScreen({ setScreen }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-8 max-w-md animate-fadeIn">
        <div className="space-y-4">
          <div className="flex items-center justify-center" style={{ gap: '0px' }}>
            <svg width="52" height="66" viewBox="0 0 52 66" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '-3px' }}>
              {/* ── BACK N — depth layer (+4,+4 offset, dim) ── */}
              <line x1="12" y1="54" x2="12" y2="20" stroke="#93c5fd" strokeWidth="1.6" strokeOpacity="0.2" strokeLinecap="round"/>
              <line x1="12" y1="20" x2="40" y2="54" stroke="#93c5fd" strokeWidth="1.6" strokeOpacity="0.2" strokeLinecap="round"/>
              <line x1="40" y1="54" x2="40" y2="20" stroke="#93c5fd" strokeWidth="1.6" strokeOpacity="0.2" strokeLinecap="round"/>
              {/* Back nodes (dim) */}
              <circle cx="12" cy="54" r="2.5" fill="#93c5fd" fillOpacity="0.25"/>
              <circle cx="12" cy="20" r="2.5" fill="#93c5fd" fillOpacity="0.25"/>
              <circle cx="40" cy="54" r="2.5" fill="#93c5fd" fillOpacity="0.25"/>
              <circle cx="40" cy="20" r="2.5" fill="#93c5fd" fillOpacity="0.25"/>
              <circle cx="26" cy="37" r="2"   fill="#60a5fa" fillOpacity="0.2"/>

              {/* ── DEPTH LINES — front corners to back corners ── */}
              <line x1="8"  y1="50" x2="12" y2="54" stroke="white" strokeWidth="1"   strokeOpacity="0.18" strokeLinecap="round"/>
              <line x1="8"  y1="16" x2="12" y2="20" stroke="white" strokeWidth="1"   strokeOpacity="0.18" strokeLinecap="round"/>
              <line x1="36" y1="50" x2="40" y2="54" stroke="white" strokeWidth="1"   strokeOpacity="0.18" strokeLinecap="round"/>
              <line x1="36" y1="16" x2="40" y2="20" stroke="white" strokeWidth="1"   strokeOpacity="0.18" strokeLinecap="round"/>

              {/* ── NETWORK FINE LINES ── */}
              <line x1="8"  y1="16" x2="36" y2="16" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.2"  strokeDasharray="2 3"/>
              <line x1="8"  y1="50" x2="36" y2="50" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.2"  strokeDasharray="2 3"/>
              <line x1="8"  y1="33" x2="36" y2="33" stroke="#60a5fa" strokeWidth="0.6" strokeOpacity="0.25"/>
              <line x1="8"  y1="16" x2="36" y2="50" stroke="#93c5fd" strokeWidth="0.4" strokeOpacity="0.12"/>
              <line x1="8"  y1="50" x2="36" y2="16" stroke="#93c5fd" strokeWidth="0.4" strokeOpacity="0.12"/>
              <line x1="8"  y1="16" x2="22" y2="33" stroke="#bfdbfe" strokeWidth="0.4" strokeOpacity="0.2"/>
              <line x1="36" y1="50" x2="22" y2="33" stroke="#bfdbfe" strokeWidth="0.4" strokeOpacity="0.2"/>
              {/* Extra fine lines to/from new nodes */}
              <line x1="8"  y1="33" x2="0"  y2="33" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.2"  strokeLinecap="round"/>
              <line x1="36" y1="33" x2="46" y2="33" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.2"  strokeLinecap="round"/>
              <line x1="22" y1="16" x2="22" y2="33" stroke="#bfdbfe" strokeWidth="0.5" strokeOpacity="0.2"/>
              <line x1="22" y1="50" x2="22" y2="33" stroke="#bfdbfe" strokeWidth="0.5" strokeOpacity="0.2"/>
              <line x1="8"  y1="16" x2="22" y2="16" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.18"/>
              <line x1="22" y1="16" x2="36" y2="16" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.18"/>
              <line x1="4"  y1="24" x2="8"  y2="16" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.2"  strokeLinecap="round"/>
              <line x1="4"  y1="42" x2="8"  y2="50" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.2"  strokeLinecap="round"/>
              <line x1="32" y1="24" x2="36" y2="16" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.2"  strokeLinecap="round"/>
              <line x1="32" y1="42" x2="36" y2="50" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.2"  strokeLinecap="round"/>
              <line x1="4"  y1="24" x2="8"  y2="33" stroke="#93c5fd" strokeWidth="0.4" strokeOpacity="0.15" strokeLinecap="round"/>
              <line x1="4"  y1="42" x2="8"  y2="33" stroke="#93c5fd" strokeWidth="0.4" strokeOpacity="0.15" strokeLinecap="round"/>
              <line x1="32" y1="24" x2="36" y2="33" stroke="#93c5fd" strokeWidth="0.4" strokeOpacity="0.15" strokeLinecap="round"/>
              <line x1="32" y1="42" x2="36" y2="33" stroke="#93c5fd" strokeWidth="0.4" strokeOpacity="0.15" strokeLinecap="round"/>

              {/* ── SATELLITE NODES + connections ── */}
              <line x1="8"  y1="16" x2="1"  y2="7"  stroke="#93c5fd" strokeWidth="1"   strokeOpacity="0.3"  strokeLinecap="round"/>
              <line x1="36" y1="16" x2="43" y2="7"  stroke="#93c5fd" strokeWidth="1"   strokeOpacity="0.3"  strokeLinecap="round"/>
              <line x1="8"  y1="50" x2="1"  y2="59" stroke="#93c5fd" strokeWidth="1"   strokeOpacity="0.3"  strokeLinecap="round"/>
              <line x1="36" y1="50" x2="43" y2="59" stroke="#93c5fd" strokeWidth="1"   strokeOpacity="0.3"  strokeLinecap="round"/>
              <circle cx="1"  cy="7"  r="2"   fill="#93c5fd" fillOpacity="0.5"/>
              <circle cx="43" cy="7"  r="2"   fill="#93c5fd" fillOpacity="0.5"/>
              <circle cx="1"  cy="59" r="2"   fill="#93c5fd" fillOpacity="0.5"/>
              <circle cx="43" cy="59" r="2"   fill="#93c5fd" fillOpacity="0.5"/>

              {/* ── MAIN N — front layer ── */}
              <line x1="8"  y1="50" x2="8"  y2="16" stroke="#93c5fd" strokeWidth="3"   strokeOpacity="0.85" strokeLinecap="round"/>
              <line x1="8"  y1="16" x2="36" y2="50" stroke="#93c5fd" strokeWidth="3"   strokeOpacity="0.85" strokeLinecap="round"/>
              <line x1="36" y1="50" x2="36" y2="16" stroke="#93c5fd" strokeWidth="3"   strokeOpacity="0.85" strokeLinecap="round"/>

              {/* ── MEDIUM NODES ── */}
              <circle cx="22" cy="16" r="2.5" fill="#60a5fa" fillOpacity="0.7"/>
              <circle cx="22" cy="50" r="2.5" fill="#60a5fa" fillOpacity="0.7"/>
              <circle cx="0"  cy="33" r="2.5" fill="#93c5fd" fillOpacity="0.5"/>
              <circle cx="46" cy="33" r="2.5" fill="#93c5fd" fillOpacity="0.5"/>

              {/* Mid-vertical nodes */}
              <circle cx="8"  cy="33" r="2.5" fill="#60a5fa" fillOpacity="0.75"/>
              <circle cx="36" cy="33" r="2.5" fill="#60a5fa" fillOpacity="0.75"/>

              {/* ── SMALL NODES ── */}
              <circle cx="4"  cy="24" r="1.5" fill="#bfdbfe" fillOpacity="0.55"/>
              <circle cx="4"  cy="42" r="1.5" fill="#bfdbfe" fillOpacity="0.55"/>
              <circle cx="32" cy="24" r="1.5" fill="#bfdbfe" fillOpacity="0.55"/>
              <circle cx="32" cy="42" r="1.5" fill="#bfdbfe" fillOpacity="0.55"/>
              <circle cx="15" cy="10" r="1.2" fill="#93c5fd" fillOpacity="0.45"/>
              <circle cx="29" cy="10" r="1.2" fill="#93c5fd" fillOpacity="0.45"/>
              <circle cx="15" cy="56" r="1.2" fill="#93c5fd" fillOpacity="0.45"/>
              <circle cx="29" cy="56" r="1.2" fill="#93c5fd" fillOpacity="0.45"/>

              {/* ── MAIN NODES — front ── */}
              <circle cx="8"  cy="50" r="4"   fill="#93c5fd" fillOpacity="0.95"/>
              <circle cx="8"  cy="16" r="4"   fill="#93c5fd" fillOpacity="0.95"/>
              <circle cx="36" cy="50" r="4"   fill="#93c5fd" fillOpacity="0.95"/>
              <circle cx="36" cy="16" r="4"   fill="none"    stroke="white" strokeWidth="1.8" strokeOpacity="0.95"/>

              {/* Mid-diagonal node */}
              <circle cx="22" cy="33" r="3.2" fill="none" stroke="white" strokeWidth="1.8" strokeOpacity="0.95"/>
              {/* Accent nodes on diagonal */}
              <circle cx="14" cy="23" r="2"   fill="#bfdbfe" fillOpacity="0.65"/>
              <circle cx="30" cy="43" r="2"   fill="#bfdbfe" fillOpacity="0.65"/>
            </svg>
            <span className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              et<span style={{ marginLeft: '8px' }}>Maxxing</span>
            </span>
          </div>
          <p className="text-xl text-blue-300" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Where Connections Become Opportunities
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-white/20 bg-white/[0.08]" style={{ maxWidth: '500px', minWidth: '400px', margin: '3rem auto 0' }}>
            <svg className="w-40 h-40 mx-auto mb-4" viewBox="0 0 100 100" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="sphereGrad" cx="38%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9"/>
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.95"/>
                </radialGradient>
                <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="softglow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <clipPath id="sphereClip">
                  <circle cx="50" cy="50" r="36"/>
                </clipPath>
              </defs>

              {/* Outer glow */}
              <circle cx="50" cy="50" r="46" fill="url(#glowGrad)"/>
              {/* Sphere */}
              <circle cx="50" cy="50" r="36" fill="url(#sphereGrad)"/>
              {/* Grid */}
              <g clipPath="url(#sphereClip)">
                <ellipse cx="50" cy="50" rx="36" ry="7"  stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="36" ry="14" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="36" ry="21" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="36" ry="28" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <line x1="14" y1="50" x2="86" y2="50" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="7"  ry="36" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="14" ry="36" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="21" ry="36" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <ellipse cx="50" cy="50" rx="28" ry="36" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
                <line x1="50" y1="14" x2="50" y2="86" stroke="white" strokeWidth="0.25" strokeOpacity="0.2"/>
              </g>
              {/* Highlight */}
              <ellipse cx="39" cy="35" rx="9" ry="5" fill="white" fillOpacity="0.12" transform="rotate(-20 39 35)"/>

              {/* ── CONNECTIONS ── */}
              {/* Front bold */}
              <g filter="url(#glow)">
                <line x1="47" y1="42" x2="66" y2="30" stroke="#93c5fd" strokeWidth="0.9" strokeOpacity="0.75"><animate attributeName="strokeOpacity" values="0.75;0.1;0.75" dur="2.2s" repeatCount="indefinite"/></line>
                <line x1="47" y1="42" x2="32" y2="33" stroke="#93c5fd" strokeWidth="0.9" strokeOpacity="0.75"><animate attributeName="strokeOpacity" values="0.75;0.1;0.75" dur="2.7s" begin="0.5s" repeatCount="indefinite"/></line>
                <line x1="47" y1="42" x2="62" y2="57" stroke="#93c5fd" strokeWidth="0.9" strokeOpacity="0.75"><animate attributeName="strokeOpacity" values="0.75;0.1;0.75" dur="3s" begin="0.8s" repeatCount="indefinite"/></line>
                <line x1="47" y1="42" x2="28" y2="56" stroke="#93c5fd" strokeWidth="0.9" strokeOpacity="0.75"><animate attributeName="strokeOpacity" values="0.75;0.1;0.75" dur="2.5s" begin="1.1s" repeatCount="indefinite"/></line>
                <line x1="66" y1="30" x2="73" y2="48" stroke="#93c5fd" strokeWidth="0.7" strokeOpacity="0.65"><animate attributeName="strokeOpacity" values="0.65;0.1;0.65" dur="2.8s" begin="0.3s" repeatCount="indefinite"/></line>
                <line x1="73" y1="48" x2="62" y2="57" stroke="#93c5fd" strokeWidth="0.7" strokeOpacity="0.65"><animate attributeName="strokeOpacity" values="0.65;0.1;0.65" dur="3.2s" begin="0.9s" repeatCount="indefinite"/></line>
                <line x1="62" y1="57" x2="54" y2="71" stroke="#93c5fd" strokeWidth="0.7" strokeOpacity="0.6"><animate attributeName="strokeOpacity" values="0.6;0.1;0.6" dur="2.4s" begin="1.4s" repeatCount="indefinite"/></line>
                <line x1="54" y1="71" x2="36" y2="68" stroke="#93c5fd" strokeWidth="0.7" strokeOpacity="0.6"><animate attributeName="strokeOpacity" values="0.6;0.1;0.6" dur="2.9s" begin="0.6s" repeatCount="indefinite"/></line>
                <line x1="36" y1="68" x2="28" y2="56" stroke="#93c5fd" strokeWidth="0.7" strokeOpacity="0.6"><animate attributeName="strokeOpacity" values="0.6;0.1;0.6" dur="3.4s" begin="1.7s" repeatCount="indefinite"/></line>
                <line x1="32" y1="33" x2="66" y2="30" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.5"><animate attributeName="strokeOpacity" values="0.5;0.07;0.5" dur="3.9s" begin="0.7s" repeatCount="indefinite"/></line>
                <line x1="73" y1="48" x2="54" y2="71" stroke="#93c5fd" strokeWidth="0.6" strokeOpacity="0.5"><animate attributeName="strokeOpacity" values="0.5;0.07;0.5" dur="3.5s" begin="1.2s" repeatCount="indefinite"/></line>
              </g>
              {/* Mid connections to edge nodes */}
              <g filter="url(#softglow)">
                <line x1="32" y1="33" x2="20" y2="19" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.4"><animate attributeName="strokeOpacity" values="0.4;0.06;0.4" dur="3.6s" begin="1s" repeatCount="indefinite"/></line>
                <line x1="66" y1="30" x2="79" y2="16" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.4"><animate attributeName="strokeOpacity" values="0.4;0.06;0.4" dur="3s" begin="0.4s" repeatCount="indefinite"/></line>
                <line x1="73" y1="48" x2="91" y2="40" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.4"><animate attributeName="strokeOpacity" values="0.4;0.06;0.4" dur="3.8s" begin="1.5s" repeatCount="indefinite"/></line>
                <line x1="54" y1="71" x2="62" y2="88" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.38"><animate attributeName="strokeOpacity" values="0.38;0.05;0.38" dur="4.2s" begin="0.8s" repeatCount="indefinite"/></line>
                <line x1="36" y1="68" x2="18" y2="82" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.38"><animate attributeName="strokeOpacity" values="0.38;0.05;0.38" dur="3.3s" begin="1.9s" repeatCount="indefinite"/></line>
                <line x1="28" y1="56" x2="8"  y2="50" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.38"><animate attributeName="strokeOpacity" values="0.38;0.05;0.38" dur="4s" begin="0.6s" repeatCount="indefinite"/></line>
                {/* Fine cross-links mid */}
                <line x1="47" y1="42" x2="73" y2="48" stroke="#93c5fd" strokeWidth="0.35" strokeOpacity="0.3"><animate attributeName="strokeOpacity" values="0.3;0.04;0.3" dur="4.5s" begin="1.3s" repeatCount="indefinite"/></line>
                <line x1="32" y1="33" x2="28" y2="56" stroke="#93c5fd" strokeWidth="0.35" strokeOpacity="0.3"><animate attributeName="strokeOpacity" values="0.3;0.04;0.3" dur="3.7s" begin="0.9s" repeatCount="indefinite"/></line>
                <line x1="66" y1="30" x2="54" y2="71" stroke="#93c5fd" strokeWidth="0.35" strokeOpacity="0.3"><animate attributeName="strokeOpacity" values="0.3;0.04;0.3" dur="4.8s" begin="2s" repeatCount="indefinite"/></line>
              </g>
              {/* Hairline far connections */}
              <line x1="20" y1="19" x2="8"  y2="50" stroke="#93c5fd" strokeWidth="0.25" strokeOpacity="0.2"><animate attributeName="strokeOpacity" values="0.2;0.03;0.2" dur="5s" begin="2.2s" repeatCount="indefinite"/></line>
              <line x1="79" y1="16" x2="91" y2="40" stroke="#93c5fd" strokeWidth="0.25" strokeOpacity="0.2"><animate attributeName="strokeOpacity" values="0.2;0.03;0.2" dur="4.6s" begin="1.4s" repeatCount="indefinite"/></line>
              <line x1="62" y1="88" x2="18" y2="82" stroke="#93c5fd" strokeWidth="0.25" strokeOpacity="0.2"><animate attributeName="strokeOpacity" values="0.2;0.03;0.2" dur="5.4s" begin="0.9s" repeatCount="indefinite"/></line>
              <line x1="20" y1="19" x2="79" y2="16" stroke="#93c5fd" strokeWidth="0.2" strokeOpacity="0.15"><animate attributeName="strokeOpacity" values="0.15;0.02;0.15" dur="6s" begin="1.8s" repeatCount="indefinite"/></line>
              <line x1="8"  y1="50" x2="18" y2="82" stroke="#93c5fd" strokeWidth="0.2" strokeOpacity="0.15"><animate attributeName="strokeOpacity" values="0.15;0.02;0.15" dur="5.8s" begin="2.5s" repeatCount="indefinite"/></line>
              <line x1="91" y1="40" x2="62" y2="88" stroke="#93c5fd" strokeWidth="0.2" strokeOpacity="0.15"><animate attributeName="strokeOpacity" values="0.15;0.02;0.15" dur="6.2s" begin="1.1s" repeatCount="indefinite"/></line>

              {/* ── DOTS ── */}
              {/* FRONT — large, white/bright */}
              <circle cx="47" cy="42" r="4" fill="white" fillOpacity="0.95" filter="url(#glow)"><animate attributeName="r" values="4;5.5;4" dur="2.1s" repeatCount="indefinite"/></circle>
              <circle cx="66" cy="30" r="3" fill="white" fillOpacity="0.9" filter="url(#glow)"><animate attributeName="r" values="3;4.4;3" dur="2.6s" begin="0.3s" repeatCount="indefinite"/></circle>
              <circle cx="32" cy="33" r="2.8" fill="#dbeafe" fillOpacity="0.9" filter="url(#glow)"><animate attributeName="r" values="2.8;4.1;2.8" dur="2.9s" begin="0.6s" repeatCount="indefinite"/></circle>
              <circle cx="73" cy="48" r="2.7" fill="#93c5fd" fillOpacity="0.9" filter="url(#glow)"><animate attributeName="r" values="2.7;4;2.7" dur="3.1s" begin="0.9s" repeatCount="indefinite"/></circle>
              <circle cx="62" cy="57" r="2.6" fill="#dbeafe" fillOpacity="0.85" filter="url(#glow)"><animate attributeName="r" values="2.6;3.9;2.6" dur="2.4s" begin="1.2s" repeatCount="indefinite"/></circle>
              <circle cx="28" cy="56" r="2.7" fill="#93c5fd" fillOpacity="0.85" filter="url(#glow)"><animate attributeName="r" values="2.7;4;2.7" dur="2.8s" begin="0.4s" repeatCount="indefinite"/></circle>
              <circle cx="54" cy="71" r="2.5" fill="#bfdbfe" fillOpacity="0.85" filter="url(#glow)"><animate attributeName="r" values="2.5;3.7;2.5" dur="3.3s" begin="0.7s" repeatCount="indefinite"/></circle>
              <circle cx="36" cy="68" r="2.4" fill="#93c5fd" fillOpacity="0.8" filter="url(#glow)"><animate attributeName="r" values="2.4;3.5;2.4" dur="2.7s" begin="1.5s" repeatCount="indefinite"/></circle>

              {/* MID — medium, on/near edge */}
              <circle cx="20" cy="19" r="2.1" fill="#93c5fd" fillOpacity="0.72" filter="url(#softglow)"><animate attributeName="r" values="2.1;3.2;2.1" dur="3.2s" begin="0.5s" repeatCount="indefinite"/></circle>
              <circle cx="79" cy="16" r="1.9" fill="#bfdbfe" fillOpacity="0.68" filter="url(#softglow)"><animate attributeName="r" values="1.9;3;1.9" dur="2.8s" begin="1.3s" repeatCount="indefinite"/></circle>
              <circle cx="91" cy="40" r="2"   fill="#93c5fd" fillOpacity="0.68" filter="url(#softglow)"><animate attributeName="r" values="2;3.1;2" dur="3.5s" begin="0.2s" repeatCount="indefinite"/></circle>
              <circle cx="62" cy="88" r="1.9" fill="#bfdbfe" fillOpacity="0.65" filter="url(#softglow)"><animate attributeName="r" values="1.9;3;1.9" dur="3.9s" begin="1.8s" repeatCount="indefinite"/></circle>
              <circle cx="18" cy="82" r="1.8" fill="#93c5fd" fillOpacity="0.62" filter="url(#softglow)"><animate attributeName="r" values="1.8;2.9;1.8" dur="3.6s" begin="0.9s" repeatCount="indefinite"/></circle>
              <circle cx="8"  cy="50" r="1.8" fill="#bfdbfe" fillOpacity="0.6"  filter="url(#softglow)"><animate attributeName="r" values="1.8;2.8;1.8" dur="4.1s" begin="0.3s" repeatCount="indefinite"/></circle>

              {/* SMALL — tiny scattered dots */}
              <circle cx="55" cy="22" r="1.2" fill="#93c5fd" fillOpacity="0.55"><animate attributeName="r" values="1.2;2;1.2" dur="3.4s" begin="1.1s" repeatCount="indefinite"/></circle>
              <circle cx="24" cy="44" r="1.1" fill="#bfdbfe" fillOpacity="0.5"><animate attributeName="r" values="1.1;1.9;1.1" dur="4s" begin="0.7s" repeatCount="indefinite"/></circle>
              <circle cx="76" cy="66" r="1.2" fill="#93c5fd" fillOpacity="0.5"><animate attributeName="r" values="1.2;2;1.2" dur="3.7s" begin="1.6s" repeatCount="indefinite"/></circle>
              <circle cx="40" cy="80" r="1" fill="#bfdbfe" fillOpacity="0.45"><animate attributeName="r" values="1;1.7;1" dur="4.4s" begin="2.1s" repeatCount="indefinite"/></circle>
              <circle cx="83" cy="26" r="1" fill="#93c5fd" fillOpacity="0.45"><animate attributeName="r" values="1;1.7;1" dur="3.9s" begin="0.4s" repeatCount="indefinite"/></circle>
              <circle cx="12" cy="66" r="0.9" fill="#bfdbfe" fillOpacity="0.4"><animate attributeName="r" values="0.9;1.5;0.9" dur="4.8s" begin="1.4s" repeatCount="indefinite"/></circle>
              <circle cx="68" cy="80" r="0.9" fill="#93c5fd" fillOpacity="0.38"><animate attributeName="r" values="0.9;1.5;0.9" dur="5s" begin="2.3s" repeatCount="indefinite"/></circle>
              <circle cx="86" cy="58" r="0.8" fill="#bfdbfe" fillOpacity="0.35"><animate attributeName="r" values="0.8;1.4;0.8" dur="4.6s" begin="0.6s" repeatCount="indefinite"/></circle>
            </svg>
            <p className="text-white/80 text-sm" style={{maxWidth: '300px', margin: '0 auto'}}>
            AI-powered networking that connects you with investors, VCs, and co-founders
            </p>
          </div>

        <div className="space-y-3 w-full">
          <button
            onClick={() => setScreen('signup')}
            className="w-full py-4 px-8 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105" style={{ background: '#cc0000' }} onMouseEnter={e => e.currentTarget.style.background='#aa0000'} onMouseLeave={e => e.currentTarget.style.background='#cc0000'}
          >
            Get Started
          </button>
          <button
            onClick={() => setScreen('home')}
            className="w-full py-4 px-8 bg-white/10 backdrop-blur-sm rounded-2xl text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            Sign In
          </button>
        </div>

        <p className="text-white/60 text-sm">
          (c) 2024 NetMaxxing. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function SignupScreen({ setScreen }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 animate-fadeIn">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            NetMaxxing
          </h1>
          <p className="text-white/80" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Create your account
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 space-y-5">
          <div className="space-y-2">
            <label className="text-white text-sm font-medium">Email *</label>
            <input
              type="email"
              placeholder="linadaho20@gmail.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">First Name *</label>
              <input
                type="text"
                placeholder="Lina"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Last Name *</label>
              <input
                type="text"
                placeholder="Daho"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-medium">Password *</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-medium">Confirm Password *</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={() => setScreen('onboarding')}
            className="w-full py-4 bg-blue-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-blue-600/40 transition-all transform hover:scale-105"
          >
            Create Account
          </button>

          <p className="text-center text-white/70 text-sm">
            Already have an account?{' '}
            <button onClick={() => setScreen('home')} className="text-blue-400 hover:text-blue-300 font-medium">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function OnboardingScreen({ setScreen }) {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6 animate-fadeIn">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i <= step ? 'w-12 bg-blue-600' : 'w-8 bg-white/20'
                }`}
              />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            {step === 1 && 'Tell us about yourself'}
            {step === 2 && 'What are you looking for?'}
            {step === 3 && 'Verify your identity'}
            {step === 4 && 'Choose your interests'}
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 space-y-6">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">What can you offer?</label>
                <textarea
                  placeholder="Describe your skills, experience, and what you bring to the table..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Current Role</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Founder</option>
                  <option>Investor</option>
                  <option>Student</option>
                  <option>Professional</option>
                </select>
              </div>
              <button className="w-full py-3 bg-white/10 border border-white/30 rounded-xl text-white/70 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Camera size={20} />
                Upload Resume (AI will fill your profile)
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-4">
                <label className="text-white text-sm font-medium">I'm looking for:</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Investors', 'Co-founders', 'Business Partners', 'Mentors', 'Advisors', 'Team Members'].map((item) => (
                    <button
                      key={item}
                      className="py-3 px-4 bg-white/5 border border-white/20 rounded-xl text-white hover:bg-blue-500/15 hover:border-blue-500 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Additional details</label>
                <textarea
                  placeholder="What specific qualities or criteria are you looking for?"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="bg-blue-500/20 rounded-2xl p-8 border border-blue-500/30">
                <Camera className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Identity Verification</h3>
                <p className="text-white/70 text-sm mb-6">
                  Take a photo from multiple angles and upload your ID or passport
                </p>
                <button className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:shadow-xl transition-all">
                  Start Verification
                </button>
              </div>
              <p className="text-white/60 text-xs">
                Your information is encrypted and secure. We verify all users to maintain a trusted community.
              </p>
            </div>
          )}

          {step === 4 && (
            <>
              <div className="space-y-4">
                <label className="text-white text-sm font-medium">Select your interests:</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Real Estate',
                    'Technology',
                    'Healthcare',
                    'Finance',
                    'E-commerce',
                    'SaaS',
                    'AI/ML',
                    'Blockchain',
                    'Marketing',
                    'Education',
                  ].map((item) => (
                    <button
                      key={item}
                      className="py-3 px-4 bg-white/5 border border-white/20 rounded-xl text-white hover:bg-blue-500/15 hover:border-blue-500 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all"
              >
                Back
              </button>
            )}
            <button
              onClick={() => (step === 4 ? setScreen('home') : setStep(step + 1))}
              className="flex-1 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-blue-600/40 transition-all"
            >
              {step === 4 ? 'Complete Setup' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ setScreen, setShowMenu }) {
  const [viewMode, setViewMode] = useState('swipe');
  const [scanning, setScanning] = useState(false);
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <button onClick={() => setShowMenu(true)} className="text-white">
          <Menu size={28} />
        </button>
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
          NetMaxxing
        </h1>
        <button onClick={() => setScreen('profile')} className="text-white">
          <Settings size={28} />
        </button>
      </div>

      {/* Filters */}
      <div className="px-6 pb-6 space-y-4">
        <button 
          onClick={() => setFiltersExpanded(!filtersExpanded)}
          className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-2 text-white font-semibold">
            <Filter size={20} />
            Filter Connections
          </div>
          <ChevronRight size={20} className={`text-white transition-transform ${filtersExpanded ? 'rotate-90' : ''}`} />
        </button>

        {filtersExpanded && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 space-y-4 animate-fadeIn">
            {/* User Type Filter */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">User Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['All', 'Investors', 'VCs', 'Founders', 'Students', 'Partners'].map((type) => (
                  <button
                    key={type}
                    className="py-2 px-3 bg-white/5 border border-white/20 rounded-xl text-white text-sm hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Filter */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Location</label>
              <select className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Local</option>
                <option>National</option>
                <option>International</option>
                <option>Custom Radius...</option>
              </select>
            </div>

            {/* Funding Range Filter */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Funding Range</label>
              <select className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>All Amounts</option>
                <option>$0 - $1M</option>
                <option>$1M - $10M</option>
                <option>$10M - $50M</option>
                <option>$50M - $100M</option>
                <option>$100M+</option>
              </select>
            </div>

            {/* Industry Filter */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Industries</label>
              <div className="flex gap-2 flex-wrap">
                {['SaaS', 'AI/ML', 'FinTech', 'HealthTech', 'E-commerce', 'Real Estate'].map((industry) => (
                  <button
                    key={industry}
                    className="py-1.5 px-3 bg-white/5 border border-white/20 rounded-full text-white text-xs hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Verified Filter */}
            <div className="flex items-center justify-between">
              <label className="text-white text-sm font-medium">Verified Only</label>
              <button className="w-12 h-6 bg-white/20 rounded-full relative transition-all hover:bg-white/30">
                <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 transition-all"></div>
              </button>
            </div>

            <button className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium hover:shadow-lg transition-all">
              Apply Filters
            </button>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('swipe')}
            className={`flex-1 py-2 rounded-xl font-medium transition-all ${
              viewMode === 'swipe'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-white/10 text-white/70 border border-white/20'
            }`}
          >
            Swipe Mode
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 py-2 rounded-xl font-medium transition-all ${
              viewMode === 'list'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-white/10 text-white/70 border border-white/20'
            }`}
          >
            List Mode
          </button>
        </div>
      </div>

      {/* Scanning Animation */}
      {scanning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900/80 backdrop-blur-sm">
          <div className="text-center space-y-4">
            <Globe className="w-24 h-24 mx-auto text-white animate-spin" />
            <p className="text-white text-xl font-semibold">Scanning for connections...</p>
            <p className="text-white/70">AI analyzing 1000s of profiles</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {viewMode === 'swipe' ? (
        <div className="px-6 space-y-4">
          <div className="relative max-w-sm mx-auto flex items-center gap-3">
            {/* Left Swipe Indicator */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                <X size={18} className="text-red-400" />
              </div>
              <span className="text-white/70 text-xs">Pass</span>
            </div>

            {/* Profile Card */}
            <div className="relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-blue-600/15 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 space-y-3">
                {/* Profile Photo */}
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">Sarah Chen</h3>
                    <p className="text-white/70 text-sm">Venture Capital Investor</p>
                    <span className="inline-block mt-1.5 px-2.5 py-1 bg-blue-600/80 rounded-full text-white text-xs font-medium border border-blue-600/50">
                      98% Match
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs border border-blue-500/30">
                    SaaS
                  </span>
                  <span className="px-2.5 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs border border-blue-500/30">
                    AI/ML
                  </span>
                  <span className="px-2.5 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs border border-blue-500/30">
                    Series A-C
                  </span>
                </div>

                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                  Looking for innovative AI startups. Focus on enterprise SaaS with proven traction. Previously invested in 12
                  successful companies.
                </p>

                <div className="space-y-1.5 text-white/60 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>Sequoia Capital</span>
                  </div>
                </div>

                {/* Portfolio/Projects */}
                <div className="pt-2 border-t border-white/10">
                  <p className="text-white/70 text-xs font-medium mb-2">Recent Investments</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=150&fit=crop" 
                        alt="Project"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop" 
                        alt="Project"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop" 
                        alt="Project"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3 bg-red-500/20 border-2 border-red-500 rounded-xl text-white font-medium hover:bg-red-500/30 transition-all flex items-center justify-center gap-2">
                    <X size={20} />
                    Pass
                  </button>
                  <button
                    onClick={() => setScreen('match')}
                    className="flex-1 py-3 bg-green-500/20 border-2 border-green-500 rounded-xl text-white font-semibold hover:bg-green-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Check size={20} />
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Right Swipe Indicator */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                <Check size={18} className="text-green-400" />
              </div>
              <span className="text-white/70 text-xs">Connect</span>
            </div>
          </div>

          <button
            onClick={handleScan}
            className="w-full py-3 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <Zap size={20} />
            Find More Matches
          </button>
        </div>
      ) : (
        <div className="px-6 space-y-3">
          {[
            { name: 'Sarah Chen', role: 'VC Investor', match: 98, location: 'San Francisco' },
            { name: 'Michael Park', role: 'Angel Investor', match: 95, location: 'New York' },
            { name: 'Emma Rodriguez', role: 'Startup Founder', match: 92, location: 'Austin' },
            { name: 'David Kim', role: 'Business Partner', match: 89, location: 'Seattle' },
          ].map((person) => (
            <button
              key={person.name}
              onClick={() => setScreen('match')}
              className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all text-left"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-white">{person.name}</h4>
                  <p className="text-white/70 text-sm">{person.role}</p>
                </div>
                <span className="px-2 py-1 bg-blue-600/80 rounded-full text-white text-xs font-medium border border-blue-600/50">
                  {person.match}%
                </span>
              </div>
              <div className="flex items-center gap-1 text-white/60 text-sm">
                <MapPin size={14} />
                <span>{person.location}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900/80 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex justify-around max-w-lg mx-auto">
          <button onClick={() => setScreen('home')} className="flex flex-col items-center gap-1 text-blue-400">
            <Zap size={24} />
            <span className="text-xs">Connect</span>
          </button>
          <button onClick={() => setScreen('messages')} className="flex flex-col items-center gap-1 text-white/60">
            <MessageSquare size={24} />
            <span className="text-xs">Messages</span>
          </button>
          <button onClick={() => setScreen('groups')} className="flex flex-col items-center gap-1 text-white/60">
            <Users size={24} />
            <span className="text-xs">Groups</span>
          </button>
          <button onClick={() => setScreen('events')} className="flex flex-col items-center gap-1 text-white/60">
            <Calendar size={24} />
            <span className="text-xs">Events</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function MatchScreen({ setScreen }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-8 animate-fadeIn">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
          <div className="relative w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-28 h-28 bg-blue-900 rounded-full flex items-center justify-center">
              🤝
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            It's a Match!
          </h2>
          <p className="text-white/80 text-lg">
            You and Sarah Chen are now connected
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 max-w-md mx-auto">
          <p className="text-white/70 text-sm mb-4">
            Start building your professional relationship by sending a message or scheduling a call
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setScreen('messages')}
              className="w-full py-3 bg-blue-600 rounded-xl text-white font-semibold hover:shadow-xl transition-all"
            >
              Send Message
            </button>
            <button
              onClick={() => setScreen('home')}
              className="w-full py-3 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all"
            >
              Keep Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessagesScreen({ setScreen }) {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, name: 'Sarah Chen', lastMessage: 'Looking forward to our call!', time: '2m ago', unread: 2 },
    { id: 2, name: 'Michael Park', lastMessage: 'Thanks for sharing the pitch deck', time: '1h ago', unread: 0 },
    { id: 3, name: 'Emma Rodriguez', lastMessage: 'Let\'s schedule a meeting', time: '3h ago', unread: 1 },
  ];

  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-white">
            <ChevronRight size={28} className="rotate-180" />
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Messages
          </h1>
          <div className="w-7"></div>
        </div>

        {!selectedChat ? (
          <div className="space-y-3">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all text-left"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">{chat.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 text-xs">{chat.time}</span>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-white/70 text-sm">{chat.lastMessage}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedChat(null)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronRight size={20} className="rotate-180" />
              Back to messages
            </button>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{selectedChat.name}</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                    <Phone size={20} className="text-white" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                    <Video size={20} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-6 h-96 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                    <p className="text-white text-sm">Hi! I saw your profile and would love to discuss potential investment opportunities.</p>
                    <span className="text-white/50 text-xs mt-1 block">10:30 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-3 max-w-xs">
                    <p className="text-white text-sm">Thanks for reaching out! I'd be happy to chat. What's your area of focus?</p>
                    <span className="text-white/80 text-xs mt-1 block">10:32 AM</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                  <Mic size={20} className="text-white" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-3 bg-blue-600 rounded-xl hover:shadow-lg transition-all">
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GroupsScreen({ setScreen }) {
  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-white">
            <ChevronRight size={28} className="rotate-180" />
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Groups
          </h1>
          <button className="text-white">
            <Filter size={28} />
          </button>
        </div>

        <button className="w-full py-4 bg-blue-600 rounded-2xl text-white font-semibold hover:shadow-xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2">
          <Users size={20} />
          Create New Group
        </button>

        <div className="space-y-3">
          {[
            { name: 'AI Founders Network', members: 234, type: 'Public' },
            { name: 'SaaS Investors Hub', members: 567, type: 'Private' },
            { name: 'Tech Startup Founders', members: 892, type: 'Public' },
            { name: 'Real Estate Investors', members: 156, type: 'Public' },
          ].map((group) => (
            <div
              key={group.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                  <p className="text-white/70 text-sm">{group.members} members</p>
                </div>
                <span className="px-2 py-1 bg-blue-500/30 rounded-full text-blue-200 text-xs border border-blue-500/50">
                  {group.type}
                </span>
              </div>
              <button className="w-full mt-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-all">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsScreen({ setScreen }) {
  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-white">
            <ChevronRight size={28} className="rotate-180" />
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Events
          </h1>
          <button className="text-white">
            <Filter size={28} />
          </button>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-blue-600 rounded-xl text-white font-medium">
            Upcoming
          </button>
          <button className="flex-1 py-2 bg-white/10 border border-white/20 rounded-xl text-white/70 font-medium">
            Past
          </button>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Startup Pitch Night', date: 'Feb 10, 2026', location: 'San Francisco', attendees: 87 },
            { name: 'VC Networking Mixer', date: 'Feb 15, 2026', location: 'New York', attendees: 124 },
            { name: 'Tech Founders Summit', date: 'Feb 20, 2026', location: 'Austin', attendees: 256 },
          ].map((event) => (
            <div
              key={event.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{event.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Users size={16} />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              <button className="w-full py-2 bg-blue-600 rounded-xl text-white font-medium hover:shadow-lg transition-all">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarScreen({ setScreen }) {
  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-white">
            <ChevronRight size={28} className="rotate-180" />
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Calendar
          </h1>
          <button className="text-white">
            <Settings size={28} />
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">February 2026</h2>
            <p className="text-white/70 text-sm">Your upcoming meetings and events</p>
          </div>

          <div className="space-y-3">
            {[
              { title: 'Call with Sarah Chen', time: '10:00 AM', date: 'Feb 5', type: 'Call' },
              { title: 'Startup Pitch Night', time: '6:00 PM', date: 'Feb 10', type: 'Event' },
              { title: 'Meeting with Michael Park', time: '2:00 PM', date: 'Feb 12', type: 'Meeting' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.time}</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-500/30 rounded-full text-blue-200 text-xs border border-blue-500/50">
                    {item.type}
                  </span>
                </div>
                <p className="text-white/60 text-xs">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-4 bg-blue-600 rounded-2xl text-white font-semibold hover:shadow-xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2">
          <Calendar size={20} />
          Add New Event
        </button>
      </div>
    </div>
  );
}

function ProfileScreen({ setScreen }) {
  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-white">
            <ChevronRight size={28} className="rotate-180" />
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Profile
          </h1>
          <button className="text-white">
            <Settings size={28} />
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            LD
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Lina Daho</h2>
            <p className="text-white/70">Startup Founder</p>
          </div>

          <div className="flex gap-2 justify-center">
            <button className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2">
              <QrCode size={18} />
              QR Code
            </button>
            <button className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2">
              <ExternalLink size={18} />
              LinkedIn
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { icon: Users, label: 'Edit Profile', screen: 'profile' },
            { icon: Bell, label: 'Notifications', screen: 'profile' },
            { icon: DollarSign, label: 'Subscription', screen: 'profile' },
            { icon: Settings, label: 'Settings', screen: 'profile' },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className="text-white" />
                <span className="text-white font-medium">{item.label}</span>
              </div>
              <ChevronRight size={20} className="text-white/50" />
            </button>
          ))}
        </div>

        <button className="w-full py-3 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-200 font-medium hover:bg-red-500/30 transition-all">
          Sign Out
        </button>
      </div>
    </div>
  );
}


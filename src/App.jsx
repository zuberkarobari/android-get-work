import React, { useState, useEffect, useMemo } from 'react';

/**
 * ==============================================================================
 * 🎨 DESIGN SYSTEM (Meta Philosophy)
 * ... (file contains icons, components, data and App)
 * ==============================================================================
 */

// --- 1. CORE ICON SYSTEM (Zero-Dependency) ---
const IconWrapper = ({ children, size = 20, className = "", fill = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ minWidth: size, minHeight: size }}>{children}</svg>
);

const Icons = {
  Briefcase: (p) => <IconWrapper {...p}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></IconWrapper>,
  Search: (p) => <IconWrapper {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></IconWrapper>,
  ArrowLeft: (p) => <IconWrapper {...p}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></IconWrapper>,
  MapPin: (p) => <IconWrapper {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconWrapper>,
  Clock: (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></IconWrapper>,
  User: (p) => <IconWrapper {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></IconWrapper>,
  CheckCircle: (p) => <IconWrapper {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></IconWrapper>,
  HardHat: (p) => <IconWrapper {...p}><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0"/><path d="M14 6h0a6 6 0 0 1 6 6v3"/></IconWrapper>,
  LayoutGrid: (p) => <IconWrapper {...p}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></IconWrapper>,
  Phone: (p) => <IconWrapper {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></IconWrapper>,
  Sparkles: (p) => <IconWrapper {...p}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></IconWrapper>,
  Loader2: (p) => <IconWrapper {...p}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></IconWrapper>,
  ChevronLeft: (p) => <IconWrapper {...p}><path d="m15 18-6-6 6-6"/></IconWrapper>,
  ImageOff: (p) => <IconWrapper {...p}><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 6.69C10.84 6.25 11.4 6 12 6c1.66 0 3 1.34 3 3 0 .6-.25 1.16-.69 1.59"/><path d="M15.18 10.51a3 3 0 0 1 2.31 4.3"/><path d="M14 14.5 12 12.5"/><path d="M6 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-5"/><path d="M10 22v-3.72"/><path d="M6.38 18.66c-.33-.33-.38-1.3-.12-2.34L8.6 10a2 2 0 0 1 3.55-.54l1.22 1.22"/></IconWrapper>,
  Globe: (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconWrapper>,
  PhoneCall: (p) => <IconWrapper {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></IconWrapper>,
  ShieldCheck: (p) => <IconWrapper {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></IconWrapper>,
  Users: (p) => <IconWrapper {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></IconWrapper>,
  Filter: (p) => <IconWrapper {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></IconWrapper>,
  Star: (p) => <IconWrapper {...p} fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></IconWrapper>,
  PlusCircle: (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></IconWrapper>,
  ChevronRight: (p) => <IconWrapper {...p}><path d="m9 18 6-6-6-6"/></IconWrapper>,
  IndianRupee: (p) => <IconWrapper {...p}><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></IconWrapper>,
  Calendar: (p) => <IconWrapper {...p}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></IconWrapper>,
};

// --- 2. ROBUST DATA MODEL ---
const PARENT_CATEGORIES = [
  {
    id: 'Home_Maintenance',
    label: 'Home Maintenance',
    image: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=300',
    subcategories: [
      { id: 'Maid', label: 'House Maid', image: 'https://images.unsplash.com/photo-1527512860163-416086e71697?auto=format&fit=crop&q=80&w=300', example: "e.g., Daily cleaning & mopping for 2BHK" },
      { id: 'Cook', label: 'Cook', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=300', example: "e.g., Prepare lunch for family of 4" },
      { id: 'Electrician', label: 'Electrician', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=300', example: "e.g., Fix ceiling fan and switchboard" },
      { id: 'Plumber', label: 'Plumber', image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=300', example: "e.g., Repair leaking kitchen sink tap" },
      { id: 'Carpenter', label: 'Carpenter', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=300', example: "e.g., Fix broken wardrobe hinge" },
    ]
  },
  {
    id: 'Logistics',
    label: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=300',
    subcategories: [
      { id: 'Delivery', label: 'Delivery', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=300', example: "e.g., Deliver documents to City Center" },
      { id: 'Driver', label: 'Driver', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=300', example: "e.g., Driver needed for outstation trip" },
      { id: 'Porter', label: 'Porter', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=300', example: "e.g., Shift household items to new flat" },
    ]
  },
  {
    id: 'Rural',
    label: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=300',
    subcategories: [
      { id: 'Farm', label: 'Farm Labour', image: 'https://images.unsplash.com/photo-1473643786229-37e0258d3434?auto=format&fit=crop&q=80&w=300', example: "e.g., Harvest wheat crop for 2 days" },
      { id: 'Tractor', label: 'Tractor', image: 'https://images.unsplash.com/photo-1534234828563-02511a8685ba?auto=format&fit=crop&q=80&w=300', example: "e.g., Plough 2-acre field" },
    ]
  }
];

const DURATIONS = [
  { label: '24 Hours', value: 1 },
  { label: '3 Days', value: 3 },
  { label: '7 Days', value: 7 },
];

const getAllSubcategories = () => {
  return PARENT_CATEGORIES.flatMap(parent =>
    parent.subcategories.map(sub => ({
      ...sub,
      parentId: parent.id,
      parentLabel: parent.label,
      color: parent.color
    }))
  );
};

const INITIAL_JOBS = [
  {
    id: 1,
    title: "Carpenter needed for Wardrobe Repair",
    category: "Carpenter",
    description: "3 door wardrobe hinges need replacement. Also need to fix one drawer channel.",
    budget: "₹800",
    location: "Koramangala 4th Block",
    postedBy: "Anjali M.",
    time: "20 min ago",
    contact: "9876543210",
    verified: true,
    rating: 4.8
  },
  {
    id: 2,
    title: "Full House Deep Cleaning",
    category: "Maid",
    description: "Diwali cleaning for 3BHK flat. Floor scrubbing, window cleaning, and fan dusting.",
    budget: "₹2,500",
    location: "Whitefield",
    postedBy: "Priya D.",
    time: "5 hrs ago",
    contact: "7766554433",
    verified: true,
    rating: 4.9
  }
];

// --- 3. REUSABLE COMPONENTS ---
const ReliableImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        <Icons.ImageOff size={20} className="opacity-40" />
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
};

const FilterChip = ({ label, isActive, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap snap-start
      ${isActive
        ? 'bg-gray-900 text-white shadow-md scale-105'
        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
      }
    `}
  >
    {Icon && <Icon size={16} className={isActive ? 'text-white' : 'text-gray-500'} />}
    {label}
  </button>
);

const JobCard = ({ job }) => (
  <article className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4 relative overflow-hidden group">
    {/* Top Row */}
    <div className="flex justify-between items-start">
      <div className="flex gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wide">
          {job.category}
        </span>
        {job.verified && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
            <Icons.CheckCircle size={12} /> Verified
          </span>
        )}
      </div>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        <Icons.Clock size={12} /> {job.time}
      </span>
    </div>

    {/* Content */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-orange-600 transition-colors">
        {job.title}
      </h3>
      <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
        <Icons.MapPin size={14} />
        {job.location}
      </div>
      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {job.description}
      </p>
    </div>

    {/* Footer */}
    <div className="pt-4 mt-auto border-t border-gray-50 flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase">Budget</p>
        <p className="text-lg font-extrabold text-gray-900">{job.budget}</p>
      </div>

      <a
        href={`tel:${job.contact}`}
        className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:scale-105 active:scale-95 transition-all no-underline"
      >
        <Icons.Phone size={18} fill="currentColor" />
        Call
      </a>
    </div>
  </article>
);

// --- 4. SCREEN: TAKE WORK (The New Design) ---
const TakeWork = ({ onNavigate, jobs }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allCategories = useMemo(() => PARENT_CATEGORIES.flatMap(p => p.subcategories), []);
  const filteredJobs = useMemo(() => jobs.filter(job => {
      const matchesCategory = activeFilter === 'All' || job.category === activeFilter;
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            job.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
  }), [jobs, activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white sticky top-0 z-30 border-b border-gray-100">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('landing')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
              <Icons.ArrowLeft size={24} className="text-gray-700" />
            </button>
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Find Work</h1>
          </div>
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold border-2 border-white shadow-sm">
            <Icons.User size={20} />
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icons.Search size={18} className="text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search jobs (e.g., Plumber, Mysore...)"
              className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex overflow-x-auto gap-2 px-4 pb-4 no-scrollbar items-center snap-x">
             <FilterChip label="All Jobs" isActive={activeFilter === 'All'} onClick={() => setActiveFilter('All')} icon={Icons.LayoutGrid} />
             {allCategories.map(cat => (
               <FilterChip
                 key={cat.id}
                 label={cat.label}
                 isActive={activeFilter === cat.id}
                 onClick={() => setActiveFilter(cat.id)}
               />
             ))}
        </div>
      </header>

      <main className="p-4 space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-between items-end px-1">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            {filteredJobs.length} Opportunities
          </h2>
          <span className="text-xs text-gray-400 flex items-center gap-1">
             <Icons.MapPin size={12} /> Near You
          </span>
        </div>

        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="text-center py-20 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
               <Icons.Search size={40} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No jobs found</h3>
            <p className="text-gray-500 max-w-xs mx-auto mt-1">Try adjusting your search or filters.</p>
            <button onClick={() => {setActiveFilter('All'); setSearchQuery('')}} className="mt-6 text-orange-600 font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

// --- 5. SCREEN: LANDING ---
const LandingPage = ({ onNavigate }) => {
  const [lang, setLang] = useState('en');
  const t = lang === 'en' ?
    { title: "Get-Work", sub: "India's Local Service Marketplace", give: "Give Work", take: "Take Work" } :
    { title: "Get-Work", sub: "भारत का अपना लोकल मार्केटप्लेस", give: "काम दें", take: "काम लें" };

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-br from-orange-500 to-orange-600 rounded-b-[3rem] z-0"></div>

      <div className="relative z-10 flex-1 flex flex-col px-6 pt-12 pb-6">
        <div className="flex justify-between items-center mb-10">
           <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
              <Icons.HardHat size={32} />
           </div>
           <button onClick={() => setLang(l => l === 'en' ? 'hi' : 'en')} className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2 hover:bg-white/30 transition">
             <Icons.Globe size={16} /> {lang === 'en' ? 'हिंदी' : 'English'}
           </button>
        </div>

        <div className="text-white text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-2 drop-shadow-sm">{t.title}</h1>
          <p className="text-orange-100 text-lg font-medium opacity-90">{t.sub}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-orange-900/20 p-2 space-y-2 mb-auto">
           <button onClick={() => onNavigate('give-work')} className="w-full p-6 bg-orange-50 hover:bg-orange-100 rounded-2xl flex items-center justify-between group transition-colors">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform"><Icons.PlusCircle size={24} /></div>
                 <div className="text-left"><h3 className="text-xl font-bold text-gray-900">{t.give}</h3><p className="text-sm text-gray-500">Hire workers</p></div>
              </div>
              <Icons.ChevronRight className="text-orange-300" />
           </button>

           <div className="h-px bg-gray-100 mx-4"></div>

           <button onClick={() => onNavigate('take-work')} className="w-full p-6 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-between group transition-colors">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"><Icons.Briefcase size={24} /></div>
                 <div className="text-left"><h3 className="text-xl font-bold text-gray-900">{t.take}</h3><p className="text-sm text-gray-500">Find jobs</p></div>
              </div>
              <Icons.ChevronRight className="text-gray-300" />
           </button>
        </div>

        <a href="tel:9999999999" className="absolute bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 no-underline z-20">
           <Icons.PhoneCall size={24} fill="white" />
           <span className="font-bold pr-2">Help</span>
        </a>
      </div>
    </div>
  );
};

// --- 6. SCREEN: GIVE WORK (Simplified for brevity) ---
const GiveWork = ({ onNavigate, onPostJob }) => (
  <div className="p-6 text-center pt-20">
      <h2 className="text-xl font-bold">Give Work Form</h2>
      <p className="mb-4 text-gray-500">Please use the full V1 code for the complete form logic.</p>
      <button onClick={() => onNavigate('landing')} className="text-blue-600 underline">Back Home</button>
  </div>
);

// ==========================================
// 7. APP ENTRY
// ==========================================

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [jobs, setJobs] = useState(INITIAL_JOBS);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans text-gray-900">
      {/* Mobile Wrapper to force mobile view on desktop */}
      <div className="w-full max-w-[430px] h-screen sm:h-[90vh] bg-white sm:rounded-3xl sm:shadow-2xl overflow-y-auto overflow-x-hidden relative no-scrollbar">
        {currentView === 'landing' && <LandingPage onNavigate={setCurrentView} />}
        {currentView === 'give-work' && <GiveWork onNavigate={setCurrentView} onPostJob={(job) => setJobs([job, ...jobs])} />}
        {currentView === 'take-work' && <TakeWork onNavigate={setCurrentView} jobs={jobs} />}
      </div>
    </div>
  );
};

export default App;

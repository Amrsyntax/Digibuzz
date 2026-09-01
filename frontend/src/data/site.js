export const site = {
  name: 'Digibuzz',
  tagline: 'Your all-in-one social tool',
};

export const navLinks = [
  { label: 'Directory', to: '/directory' },
];

export const heroTools = [
  { emoji: '📱', label: 'Bio pages', to: '#bio' },
  { emoji: '🔗', label: 'Short links', to: '#short-links' },
  { emoji: '📃', label: 'Transfer files', to: '#files' },
  { emoji: '👤', label: 'Share vcards', to: '#vcards' },
  { emoji: '📆', label: 'Event links', to: '#events' },
  { emoji: '🤳', label: 'QR codes', to: '#qr' },
];

export const features = [
  {
    id: 'bio',
    icon: 'users',
    title: 'Bio link pages',
    description: 'Create your own unique & highly customizable bio link page with ease.',
    points: [
      'Custom colors & branding',
      'Tons of ready-to-use components',
      'SEO settings',
      'Password protection, sensitive content warning',
      'Countless pre-made templates & themes',
    ],
    visual: 'bio',
    reverse: false,
  },
  {
    id: 'short-links',
    icon: 'link',
    title: 'Shortened links',
    description: 'A state of the art URL shortener service.',
    points: [
      'Scheduling & expiration limits',
      'Country, device & language targeting',
      'A/B Rotation',
      'Password protection, sensitive content warning',
      'Deep links support for apps',
      'Advanced URL cloaking',
    ],
    visual: 'short',
    reverse: true,
  },
  {
    id: 'qr',
    icon: 'qr',
    title: 'QR Codes',
    description: 'Fully featured QR code generator system with easy to use templates.',
    points: [
      'Custom colors with gradients',
      'Custom logo & background branding',
      'Multiple QR shapes to choose from',
      'Customizable QR Code Frames',
      'Vcard, WiFi, Calendar, Location, Templates',
    ],
    visual: 'qr',
    reverse: true,
  },
];

export const extraProducts = [
  { emoji: '📁', label: 'File links' },
  { emoji: '🪪', label: 'Vcard links' },
  { emoji: '🎟️', label: 'Event links' },
  { emoji: '💧', label: 'Splash pages' },
  { emoji: '🌐', label: 'Custom domains' },
];

export const stats = [
  { label: 'Links', value: '5+' },
  { label: 'QR Codes', value: '0+' },
  { label: 'Tracked pageviews', value: '107+' },
];

export const pixels = [
  { name: 'Facebook', color: '#1877F2' },
  { name: 'Google Analytics', color: '#E37400' },
  { name: 'Google Tag Manager', color: '#4285F4' },
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'Pinterest', color: '#E60023' },
  { name: 'X', color: '#ffffff' },
  { name: 'Quora', color: '#B92B27' },
  { name: 'TikTok', color: '#25F4EE' },
  { name: 'Snapchat', color: '#FFFC00' },
];

export const apiSnippet = `curl --request POST \\
  --url 'https://digibuzz.app/api/links' \\
  --header 'Authorization: Bearer {api_key}' \\
  --header 'Content-Type: multipart/form-data' \\
  --form 'url=example' \\
  --form 'location_url=https://digibuzz.app/'`;

export const apiTopics = ['Links', 'Links statistics', 'QR codes', 'Pixels', 'Custom domains'];

export const testimonials = [
  {
    quote:
      'This platform completely transformed the way we manage our workflows. It’s intuitive, fast, and has saved our team countless hours every week.',
    name: 'Andrea Wilson',
    role: 'Editor, Writer’s Weekly',
    initials: 'AW',
    tone: '#7c5cff',
  },
  {
    quote:
      'I was skeptical at first, but within days, I saw how much more productive our team became. The support team is also incredibly responsive.',
    name: 'George Parker',
    role: 'Founder, BrightPath Solutions',
    initials: 'GP',
    tone: '#0e9ee1',
  },
  {
    quote:
      'We’ve tried multiple tools before, but nothing comes close to this. The onboarding was smooth, and our entire team was up and running in no time.',
    name: 'Calvin Mitchell',
    role: 'CEO, FlowWorks Inc.',
    initials: 'CM',
    tone: '#12b886',
  },
];

export const pricingPlan = {
  name: 'Free',
  price: '0',
  features: [
    '0 biolink pages',
    '0 biolink blocks',
    '7 biolink blocks',
    '0 shortened links',
    '0 bulk links',
    '0 file links',
    '0 vcard links',
    '0 event links',
    '0 static sites',
    '0 QR codes',
    '0 bulk QR codes Limit',
    '0 splash pages',
    '0 pixels',
    'Notification handlers',
    '0 custom domains',
    '0 days stats retention',
    '0 additional domains',
  ],
  extras: [
    '0 biolink themes',
    '0 biolink templates',
    'No forced splash page',
    'Custom back-half',
    'Deep linking',
    'Removable branding',
    'Custom branding',
    'Dofollow links',
    'Leap link',
    'SEO features',
    'Additional fonts',
    'Custom CSS',
    'Custom JS',
    'Indepth statistics',
    'Links scheduling & limiter',
    'Cloaking short URLs',
    'Auto open app on mobile',
    'Advanced targeting',
    'UTM parameters',
    'Password protection',
    'Sensitive content',
    'No ads',
    'API access',
    '3 export features',
  ],
};

export const faqs = [
  {
    question: 'How do I get started?',
    answer:
      'Simply sign up for an account and follow the onboarding steps. You’ll be ready to use the platform in just a few minutes.',
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'Yes, our support team is available 24/7 via email and live chat. We aim to respond to all inquiries within a few hours.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'We take data security seriously. All information is encrypted and backed up regularly to ensure your data is safe and protected.',
  },
  {
    question: 'Will I need technical skills to use this?',
    answer: 'Not at all. Our platform is designed to be user-friendly, with no coding required to get started.',
  },
  {
    question: 'What makes this different from other tools?',
    answer:
      'We focus on simplicity and performance. Our platform is lightweight, easy to use, and designed to help you achieve results faster.',
  },
];

export const directoryProfiles = [
  { name: 'Jane Doe', handle: 'jane', color: '#12b886' },
  { name: 'John Doe', handle: 'john', color: '#c084fc' },
  { name: 'Bright Path', handle: 'brightpath', color: '#0e9ee1' },
  { name: 'FlowWorks', handle: 'flowworks', color: '#f97316' },
];

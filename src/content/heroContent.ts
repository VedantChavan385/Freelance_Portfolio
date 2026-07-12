export interface HeroContent {
  brand: string;
  navLinks: string[];
  contactLabel: string;
  skillTags: { left: string[]; right: string[] };
  speechBubbles: { text: string; position: 'left' | 'right' }[];
  name: string;
  watermarkText: string;
  portraitSrc: string;
}

export const heroContent: HeroContent = {
  brand: 'VC WORKS',
  navLinks: ['Work', 'Services', 'Process', 'About', 'FAQ'],
  contactLabel: 'Contact',
  skillTags: {
    left: ['Web Design', 'Branding', '3D Motion'],
    right: ['App Design', 'Illustration', 'Logo Design'],
  },
  speechBubbles: [
    { text: 'Hey there, I am', position: 'left' },
    { text: "Let's work together!", position: 'right' },
  ],
  name: 'Vedant Chavan',
  watermarkText: 'DESIGNER',
  portraitSrc: '/VCPortrait.png',
  // portraitSrc: '/portrait-transparent-user.png',
};

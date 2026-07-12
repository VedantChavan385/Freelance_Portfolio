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
  brand: 'Novaire',
  navLinks: ['Work', 'Services', 'Process', 'About', 'FAQ'],
  contactLabel: 'Contact',
  skillTags: {
    left: ['Web Design', 'Branding', '3D Motion'],
    right: ['App Design', 'Illustration', 'Logo Design'],
  },
  speechBubbles: [
    { text: 'Hello, my name is', position: 'left' },
    { text: "Let's work together!", position: 'right' },
  ],
  name: 'Elian Moreau',
  watermarkText: 'DESIGNER',
  portraitSrc: '/short.png',
  // portraitSrc: '/ChatGPT Image Jun 21, 2026, 11_05_09 PM.png',
  portraitSrc: '/VCPortrait.png',
  // portraitSrc: '/portrait-transparent-user.png',
};

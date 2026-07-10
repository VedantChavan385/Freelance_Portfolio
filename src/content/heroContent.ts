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
  navLinks: ['Work', 'Blog', 'About'],
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
  portraitSrc: '/portrait-black-man-transparent.png',
};

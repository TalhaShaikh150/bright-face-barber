"use client";
import { createContext, useContext, useState, useEffect } from 'react';

export const FONTS = [
  {
    id: 'cormorant',
    name: 'Cormorant Garamond',
    family: "'Cormorant Garamond', Georgia, serif",
    category: 'Heritage Luxury Serif',
    tag: 'Default',
    description: 'Classic Mayfair & Fitzrovia editorial sophistication with graceful italics.'
  },
  {
    id: 'playfair',
    name: 'Playfair Display',
    family: "'Playfair Display', Georgia, serif",
    category: 'High-Society Editorial',
    tag: 'Classic',
    description: 'Crisp transitional serif with high contrast, reminiscent of British gentleman journals.'
  },
  {
    id: 'bodoni',
    name: 'Bodoni Moda',
    family: "'Bodoni Moda', Georgia, serif",
    category: 'Haute Couture',
    tag: 'Dramatic',
    description: 'Extreme vertical contrast and geometric serifs for an opulent, Italian luxury feel.'
  },
  {
    id: 'cinzel',
    name: 'Cinzel',
    family: "'Cinzel', Georgia, serif",
    category: 'Regal Roman Inscription',
    tag: 'Stately',
    description: 'Proportions inspired by classic Roman lapidary inscriptions. Authoritative and noble.'
  },
  {
    id: 'syne',
    name: 'Syne',
    family: "'Syne', sans-serif",
    category: 'Architectural Avant-Garde',
    tag: 'Modern',
    description: 'Bold, sculptural contemporary European display font with distinct personality.'
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    family: "'Space Grotesk', sans-serif",
    category: 'London Brutalist Grotesque',
    tag: 'Editorial',
    description: 'Clean typographic aesthetics suited for modern Soho & Shoreditch barbers.'
  },
  {
    id: 'fraunces',
    name: 'Fraunces',
    family: "'Fraunces', Georgia, serif",
    category: 'Warm Craftsman Serif',
    tag: 'Classic',
    description: 'Old-school British apothecary warm organic curves with heavy character.'
  },
  {
    id: 'oswald',
    name: 'Oswald',
    family: "'Oswald', sans-serif",
    category: 'Heritage Barber Signage',
    tag: 'Industrial',
    description: 'Bold condensed Gothic lettering reminiscent of historic London shopfronts.'
  },
  {
    id: 'italiana',
    name: 'Italiana',
    family: "'Italiana', Georgia, serif",
    category: 'Graceful Renaissance',
    tag: 'Understated',
    description: 'Delicate, refined lettering influenced by classic Italian calligraphy.'
  },
  {
    id: 'jakarta',
    name: 'Plus Jakarta Sans',
    family: "'Plus Jakarta Sans', sans-serif",
    category: 'Minimalist Contemporary',
    tag: 'Clean',
    description: 'Ultra-modern, highly legible geometric sans with subtle refined warmth.'
  },
  {
    id: 'poppins',
    name: 'Poppins',
    family: "'Poppins', sans-serif",
    category: 'Geometric Modern Sans',
    tag: 'Modern',
    description: 'Clean, balanced geometric sans-serif with crisp legibility and contemporary aesthetic.'
  }
];

const FontContext = createContext({
  activeFont: FONTS[0],
  setActiveFontById: () => {},
  fonts: FONTS
});

export function FontProvider({ children }) {
  const [activeFont] = useState(FONTS[0]);

  useEffect(() => {
    try {
      localStorage.removeItem('bfb_active_font');
    } catch (e) {
      // ignore localStorage errors
    }
    // Lock brand typography default: Cormorant Garamond for headings, Poppins for buttons
    document.documentElement.style.setProperty('--font-heading', "'Cormorant Garamond', Georgia, serif");
    document.documentElement.style.setProperty('--font-button', "'Poppins', sans-serif");
  }, []);

  return (
    <FontContext.Provider value={{ activeFont, setActiveFontById: () => {}, fonts: FONTS }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  return useContext(FontContext);
}

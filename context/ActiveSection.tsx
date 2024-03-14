"use client";
import React, { createContext, useContext, useState } from 'react'
import { links } from '../lib/data';
import { type } from 'os';

export type SectionName = typeof links[number]['name'];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSection({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>("About");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSection must be used within a ActiveSectionProvider')
  }
  return context
}
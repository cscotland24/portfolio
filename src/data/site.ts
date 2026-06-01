export const site = {
  name: "Calum Scotland",
  title: "Mechanical Engineering & Business Student",
  tagline:
    "Whatever you do, work at it with all your heart, as working for the Lord. — Colossians 3:23",
  email: "calumscotland29@gmail.com",
  phone: "587-306-9485",
  linkedin: "https://linkedin.com/in/calum-scotland",
  github: "https://github.com/cscotland24",
  location: "Calgary, Alberta",
  resume: "/resume.pdf",
};

export const about = {
  bio: [
    "Second-year dual degree student at the University of Calgary, majoring in Mechanical Engineering and Business. I'm passionate about working hard, serving others, and doing my part to make the world a better place.",
    "Disciplined, reliable, and quick to learn — effective in team settings with proven leadership experience. I'm committed to doing things right, solving problems, and gaining hands-on experience across engineering and the field.",
  ],
  highlights: [
    "2026 Hexagon Geomatics Engineering Hackathon — Champion",
    "President's Admission Scholarship, University of Calgary",
    "National Honor Society",
  ],
  education: [
    {
      degree: "BEng Mechanical Engineering / BCom Management",
      institution: "University of Calgary",
      location: "Calgary, AB",
      dates: "2025–2030",
      details: ["GPA 3.6", "President's Admission Scholarship"],
    },
    {
      degree: "High School Diploma",
      institution: "Rift Valley Academy",
      location: "Kijabe, Kenya",
      dates: "2020–2024",
      details: ["GPA 4.0", "National Honor Society"],
    },
  ],
  skills: {
    engineering: [
      "SolidWorks",
      "Fusion 360",
      "CAD",
      "MATLAB",
      "Python",
      "C++",
      "3D Printing",
      "Technical Drawing",
    ],
    handsOn: [
      "Construction",
      "Carpentry",
      "Concrete Work",
      "Welding & Soldering",
    ],
  },
};

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary?: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Construction Laborer",
    company: "OPUS Corporation",
    location: "Calgary, AB",
    dates: "2024–2025",
    summary: "Gap year · 11 months",
    highlights: [
      "Power tools, framing, concrete, electrical, and plumbing work on active construction sites.",
    ],
  },
  {
    role: "Plumbing & HVAC Laborer",
    company: "Kansas Ridge Mechanical",
    location: "Rimbey, AB",
    dates: "2022",
    summary: "Summer · 2 months",
    highlights: [
      "Supported plumbing and HVAC installation and maintenance in residential and commercial settings.",
    ],
  },
  {
    role: "Mission Logistics Support",
    company: "AIM South Sudan",
    location: "Torit, South Sudan",
    dates: "2016–2020",
    highlights: [
      "Construction and maintenance of airstrips in remote areas — land clearing, grading, and surface preparation.",
      "Construction and maintenance of housing in remote field locations.",
      "Aircraft ground operations including cargo handling and fueling.",
      "Logistics coordination for supply transport in remote areas.",
    ],
  },
];

export const leadership = [
  "Varsity Men's Rugby & Soccer Captain (High School)",
  "Summer Camp Group Leader",
  "High School Prom Manager",
  "Varsity Soccer Team Manager",
  "Junior High Mentorship Program",
];

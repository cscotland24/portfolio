export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  aspect?: string;
  fit?: "cover" | "contain";
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  tags: string[];
  year: string;
  role: string;
  coverImage?: string;
  coverImagePosition?: string;
  coverImageFit?: "cover" | "contain";
  liveUrl?: string;
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "robotic-arm",
    title: "Robotic Arm",
    summary:
      "A multi-axis robotic arm designed for precise, controlled motion.",
    description: [ "Designed the robotic arm in Fusion 360, focusing on overall structure and motion layout for smooth articulated movement.", "Built a custom linear motion system for the base using a rail-guided track to enable precise horizontal movement.", "Fabricated all mechanical components using 3D-printed PLA parts, balancing strength, weight, and manufacturability.", "Integrated a 12V DC motor to drive the motion system and developed the supporting electronics for control and power.", "Programmed the control system using MicroPython and C++, coordinating motion between mechanical and electronic components." ],
    tags: ["Fusion 360", "Robotics", "Motion Control", "Embedded Systems", "C++", "MicroPython", "3D Printing"],
    year: "2026",
    role: "Lead Designer",
    coverImage: "/projects/robotic-arm/base-card.jpeg",
    media: [
      {
        type: "image",
        src: "/projects/robotic-arm/base-1.jpeg",
        alt: "3D-printed linear track base for the robotic arm",
        caption:
          "Custom rail-guided base with truss side walls and rack-and-pinion drive.",
        aspect: "3/4",
        fit: "contain",
        position: "center",
      },
      {
        type: "video",
        src: "/projects/robotic-arm/demo.mov",
        alt: "Robotic arm motion demo",
        caption: "Base motion and early integration testing.",
      },
    ],
  },
  {
    slug: "rc-boat",
    title: "RC Boat",
    summary:
      "A remotely controlled boat designed as a class project, focused on stable and controllable water-based motion.",
    description: [
      "Designed the boat hull in Fusion 360 with emphasis on stability, buoyancy, and efficient hydrodynamic shape.",
      "Led the propulsion system design, selecting and integrating the motor and drive setup to achieve reliable thrust and control.",
      "Built and assembled the physical structure using lightweight materials suitable for water operation and testing.",
      "Integrated onboard electronics for remote control of propulsion and steering systems.",
      "Tested and refined performance on water to improve responsiveness and control under real operating conditions.",
    ],
    tags: [
      "Fusion 360",
      "RC Systems",
      "Propulsion Systems",
      "Electronics",
      "Prototyping",
    ],
    year: "2026",
    role: "Propulsion Design Lead",
    coverImage: "/projects/rc-boat/photo.jpeg",
    coverImagePosition: "center 72%",
    media: [
      {
        type: "image",
        src: "/projects/rc-boat/photo.jpeg",
        alt: "RC boat on the water",
        caption: "Completed hull during water testing.",
        aspect: "4/3",
        fit: "cover",
        position: "center 72%",
      },
      {
        type: "video",
        src: "/projects/rc-boat/demo.mov",
        alt: "RC boat performance video",
        caption: "On-water run showing propulsion and steering control.",
      },
    ],
  },
  {
    slug: "prepdeck",
    title: "PrepDeck",
    summary:
      "A student-focused meal planning and grocery management web app built as a full-stack prototype.",
    description: [
      "Built a full-stack Next.js application for meal discovery, pantry tracking, and grocery planning in a unified workflow.",
      "Designed and implemented swipe-based meal selection UI with persistent state management using localStorage.",
      "Developed multiple interconnected features including Mealdex (saved meals), inventory tracking, shopping list, and meal planning chat interface.",
      "Created a mock AI meal planner system to simulate intelligent recipe suggestions and shopping optimization.",
      "Structured a multi-route application with modular pages and reusable components to support a mobile-first user experience.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "UI/UX Design",
      "Frontend Development",
    ],
    year: "2026",
    role: "Backend, Authentication & Security Lead",
    liveUrl: "https://cursor-hackathon-eight-iota.vercel.app/mealdex",
    coverImage: "/projects/prepdeck/cover.png",
    media: [
      {
        type: "image",
        src: "/projects/prepdeck/cover.png",
        alt: "PrepDeck home page with meal card branding and sign-up flow",
        caption: "Landing page — swipe meals, update pantry, shop smarter.",
        aspect: "16/10",
        fit: "cover",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

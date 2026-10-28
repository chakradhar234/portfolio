export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Engineering Apprentice",
    company: "Diligent",
    startDate: "Nov 2025",
    endDate: "Present",
    location: "Bengaluru, India",
    bullets: [
      "Work on TPM, Diligent's enterprise SaaS platform for third-party risk management, shipping features and fixing bugs for global client teams.",
      "Traced a recurring duplicate-attachment bug in a multi-tenant system to an upstream INSERT logic issue in the frontend, and fixed the root cause instead of patching the symptom.",
      "Debug and ship full-stack work across C#, ASP.NET, React, TypeScript, and MSSQL/MySQL, from UI issues to database fixes.",
      "Work with Product, QA, SRE, and Support to resolve client-reported issues, and increasingly diagnose them independently.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "KPTCL (Karnataka Power Transmission Corporation Limited)",
    startDate: "Nov 2023",
    endDate: "Dec 2023",
    location: "Karnataka, India",
    bullets: [
      "Supported internal web pages and content updates for the organization's public-facing site.",
      "Collaborated with staff to improve layout consistency and basic accessibility across key pages.",
    ],
  },
];

// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'PriscillaGgit', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['PriscillaGgit/genomeanalysis', 'PriscillaGgit/microbiometutorial'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Plasmodium falciparum',
          description:
            'This is a research presentation of plasmodium species, with case studies.',
          imageUrl:
            'https://github.com/PriscillaGgit/PriscillaGgit.github.io/raw/main/parasite%20image.png',
          link: 'https://github.com/PriscillaGgit/PriscillaGgit.github.io/raw/main/Plasmodium%20falciparum.pdf',
        },
        {
          title: 'A Descriptive Study of CSU Stanislaus Students Experiences surrounding Secondhand Smoke Exposure',
          description:
            'Creation of tolerance scale, understanding tolerance based on environmental and childhood factors.',
          imageUrl:
            'https://github.com/PriscillaGgit/PriscillaGgit.github.io/raw/main/poster%20image.png',
          link: 'https://github.com/PriscillaGgit/PriscillaGgit.github.io/raw/main/Poster%20Presentation.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Project website of Priscilla Garcia',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'priscillajacquelinegarcia',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.PriscillaGgit.github.io',
    phone: '',
    email: 'punsketti@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/PriscillaGgit/PriscillaGgit.github.io/rob/main/PriscillaGCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'R',
    'Python',
    'JavaScript',
    'Android Mobile App development',
    'Bioinformatics',
    'BioPac',
    'MySQL',
    'Excel',
    'Git',
    'BLAST',
    'Ubuntu',
  ],
  experiences: [
    {
      company: 'SVFSI CASA, CSU Stanislaus',
      position: 'Research Scholar',
      from: 'Summer 2024',
      to: 'Present',
      companyLink: 'https://www.csustan.edu/casa/svfsi',
    },
    {
      company: 'Toulumne County Public Health Department',
      position: 'Cessation Intern',
      from: 'January 2025',
      to: 'Present',
      companyLink: 'https://www.tuolumnecounty.ca.gov/250/Public-Health',
    },
    {
      company: 'American Red Cross Heart of the Valley',
      position: 'Blood Donor Ambassador',
      from: 'April 2024',
      to: 'Jan 2025',
      companyLink: 'https://www.redcross.org/local/california/northern-california-coastal/about-us/locations/heart-of-the-valley.html?srsltid=AfmBOoqQQWhbYAfbfmsVou6Sh9dOY6_AwBbzFZYmHS8M6HsFZVw7rRSr',
    },
    {
      company: 'IHSS of Stanislaus County',
      position: 'Caregiver',
      from: 'April 2023',
      to: 'Present',
      companyLink: 'https://www.cdss.ca.gov/in-home-supportive-services',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S Biological Sciences',
      from: '2021',
      to: '2025',
    },
    ],
  publications: [
    {
      title: 'Genome Sequence of the Antibiotic-Resistant Pathogen Elizabethkingia miricola DSM 14571 Isolated from a Russian Space Station',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Lillyanna Azevedo, Julian Garcia, Priscilla Garcia, Taylor Hedley, Tricia Van Laar',
      link: 'https://example.com',
      description:
        'Draft manuscript in the works of being published: Elizabethkingia miricola DSM 14571 is a Gram-negative opportunistic and antibiotic-resistant human pathogen Isolated from a Russian space station. The genome contains 4,064 genes, including virulence factors and secondary metabolic clusters. This research could offer further insight into pathogenicity, environmental resilience, resistance mechanisms, and zoonotic risks.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

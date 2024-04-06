type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mncedisi Hlonzi — Portfolio",
    fullName: "Mncedisi Hlonzi",
    email: "mncedisinhlonzi37@mail.com",
  },
  hero: {
    name: "Mncedisi",
    p: ["Crafting Digital Solutions", "Unleashing creativity through the Power of Code"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a highly skilled software developer, I specialize in TypeScript and JavaScript, boasting expertise in frameworks such as React, Node.js, and Three.js. Alongside these, I possess proficiency in a diverse range of programming languages including Java, C#, Python, and PHP, as well as cross-platform technologies like Flutter and Ionic. With a strong aptitude for learning, I excel in collaborating closely with clients to craft efficient, scalable, and user-friendly solutions that address real-world challenges. Let's join forces to transform your ideas into dynamic, impactful realities !`,
    },
    experience: {
      p: "Proficient in diverse tech stacks",
      h2: "Full Stack.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The projects in my portfolio illustrate my ability to solve complex problems, work with diverse technologies, and manage projects effectively, showcasing real-world examples of my skills and experience.`,
    },
  },
};

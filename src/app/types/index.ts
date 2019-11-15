export type TSkill = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  shouldNotReturnValue?: boolean;
};

export type TFormObject = {
  firstname: string;
  lastname: string;
  subject?: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export type TExperience = {
  title: string;
  date: string;
  description: string;
  siteLink?: string;
  projects: TProject[];
};

export type TProject = {
  title: string;
  date: string;
  description: string;
  projectLink?: string;
  skills: string[];
};

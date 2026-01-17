export interface NavItem {
  label: string;
  routerLink: string;
  exact: boolean;
  icon?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  routerLink?: string;
  href?: string;
  external?: boolean;
}

export interface ProjectLink {
  title: string;
  githubUrl: string;
  href?: string;
  imageUrl?: string;
  description?: string;
  external?: boolean;
}

export function createProjectLink(
  title: string,
  githubUrl: string,
  href: string,
  imageUrl: string = 'images/tools.png',
  description: string = 'This project is still under development. Stay tuned!',
  external: boolean = true,
): ProjectLink {
  return {
    title,
    githubUrl,
    href,
    imageUrl,
    description,
    external,
  };
}

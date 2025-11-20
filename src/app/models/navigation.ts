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

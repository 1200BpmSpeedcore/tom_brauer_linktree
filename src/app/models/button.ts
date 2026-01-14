export interface ButtonConfig {
  label: string;
  tooltip: string;
  icon?: string;
  variant: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'success' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
};

export interface InternalNavButton extends ButtonConfig {
  routerLink: string;
  exact: boolean;
}

export interface ExternalLinkButton extends ButtonConfig {
  href: string;
}

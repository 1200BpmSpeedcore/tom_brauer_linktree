export interface ButtonConfig {
  label: string;
  tooltip: string;
  icon: string;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'success' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
};

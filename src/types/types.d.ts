export interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  icon?: string;
  ariaLabel?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  containerClass?: string;
  classes?: Record<string, string | Record<string, string>>;
  animate?: boolean;
}

export interface HeadlineProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  titleAs?: string;
}

export interface HeroProps extends HeadlineProps {
  description?: string;
  actions?: string | CallToAction[];
}

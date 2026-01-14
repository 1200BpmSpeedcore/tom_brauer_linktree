export type SocialPlatform = 'XING'
  | 'LinkedIn'
  | 'GitHub'
  | 'Email';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  // Path to image (header)
  iconPath: string;
  // Emoji (homepage)
  iconEmoji: string;
  label: string;
  external: boolean;
  color?: string;
}

export function createSocialLink(
  platform: SocialPlatform,
  url: string,
  iconPath: string,
  iconEmoji: string,
  label?: string,
  external: boolean = true
): SocialLink {
  return {
    platform,
    url,
    iconPath,
    iconEmoji,
    label: label || platform,
    external,
    ...getPlatformStyle(platform)
  };
}

function getPlatformStyle(platform: SocialPlatform): Partial<SocialLink> {
  const styles: Record<SocialPlatform, Partial<SocialLink>> = {
    GitHub: { color: '#1f2328' },
    LinkedIn: { color: '#0a66c2' },
    XING: { color: '#346608ff' },
    Email: { color: '#EA4335', external: false },
  };

  return styles[platform] || {};
}

export const PATHS = Object.freeze({
  CHAT: '/chat',
  RESET_PASSWORD: '/reset-password',
  FREE_TRIAL: '/free-trial',
  PROJECT_RESPONSE: '/project-response',
  AI_RESPONSE: '/ai-response',
  REFERRAL_SYSTEM: '/reffer',
  CHECKOUT: '/checkout',
  SUPPORT_CENTER: '/support-center',
  PROMOTED_ARTICLES: '/support-center/promoted-articles',
  HOME_VALUATION: '/home-valuation',

  //COMMON
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',

  //ADMIN PATHS
  HOME: '/',
  BOOKS: '/books',
  MEMBERS: '/member',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  EVENT: '/event',
  //USER PATHS
  USER_HOME: '/user',
  USER_SETTINGS: '/user/settings',
});

type TitleType = {
  [key: string]: string;
};

export const TITLE_PATHS: TitleType = Object.freeze({
  [PATHS.SIGN_UP]: 'Sign up',
  [PATHS.SIGN_IN]: 'Sign in',
  [PATHS.RESET_PASSWORD]: 'Reset password',

  //ADMIN PATHS
  [PATHS.HOME]: 'Dashboard',
  [PATHS.BOOKS]: 'Books',
  [PATHS.SETTINGS]: 'Settings',
  [PATHS.MEMBERS]: 'Members',

  //USER PATHS
  [PATHS.USER_HOME]: 'Dashboard',
  [PATHS.USER_SETTINGS]: 'Settings',

  [PATHS.CHAT]: 'Chat',
  [PATHS.FREE_TRIAL]: 'payment',
  [PATHS.PROJECT_RESPONSE]: 'Project response',
  [PATHS.AI_RESPONSE]: 'AI response',
  [PATHS.REFERRAL_SYSTEM]: 'Referral system',
  [PATHS.CHECKOUT]: 'Checkout',
  [PATHS.SUPPORT_CENTER]: 'Support center',
  [PATHS.PROMOTED_ARTICLES]: 'Promoted articles',
  [PATHS.HOME_VALUATION]: 'Home Valuation',
});

export const BLOG_SECTION_RETURN = '/#blog'

type BlogNavigationState = {
  returnTo?: string
}

/**
 * Blog routes are also valid direct-entry pages. Only carry the known home
 * section anchor between routes; direct visits fall back to the homepage.
 */
export function getBlogReturnTo(state: unknown): string {
  if (
    state &&
    typeof state === 'object' &&
    'returnTo' in state &&
    (state as BlogNavigationState).returnTo === BLOG_SECTION_RETURN
  ) {
    return BLOG_SECTION_RETURN
  }

  return '/'
}

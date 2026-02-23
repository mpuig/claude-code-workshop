import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Claude Code Workshop</strong>,
  project: {
    link: 'https://github.com/mpuig/claude-code-workshop',
  },
  docsRepositoryBase: 'https://github.com/mpuig/claude-code-workshop/tree/main/website',
  feedback: {
    content: 'Give us feedback →',
    useLink: () => 'https://github.com/mpuig/claude-code-workshop/issues/new?title=Feedback%20for%20%E2%80%9CClaude%20Code%20Workshop%E2%80%9D&labels=feedback',
  },
  darkMode: true,
  color: {
    hue: 169,
    saturation: 60,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  head: function Head() {
    const { asPath } = useRouter()
    const title = asPath === '/'
      ? 'Claude Code Workshop'
      : `Claude Code Workshop`
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Practical training for consultancy teams on using Claude Code" />
        <meta property="og:type" content="website" />
      </>
    )
  },
  footer: {
    content: (
      <span>
        Claude Code Workshop &middot; {new Date().getFullYear()}
      </span>
    ),
  },
}

export default config

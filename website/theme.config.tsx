import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Claude Code Workshop</strong>,
  project: {
    link: 'https://github.com/your-org/claude-code-training',
  },
  docsRepositoryBase: 'https://github.com/your-org/claude-code-training/tree/main/website',
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

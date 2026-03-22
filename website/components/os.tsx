import { type ReactNode } from 'react'
import { useOs } from './os-context'

/** Inline text substitution: <Os mac="~/.claude" win="C:\Users\you\.claude" /> */
/** Add code prop to render as inline code: <Os code mac="~/.claude" win="C:\Users\you\.claude" /> */
export function Os({ mac, win, code }: { mac: string; win: string; code?: boolean }) {
  const { os } = useOs()
  const text = os === 'mac' ? mac : win
  if (code) return <code className="os-code">{text}</code>
  return <>{text}</>
}

/** Block content shown only on macOS: <Mac>...</Mac> */
export function Mac({ children }: { children: ReactNode }) {
  const { os } = useOs()
  if (os !== 'mac') return null
  return <>{children}</>
}

/** Block content shown only on Windows: <Win>...</Win> */
export function Win({ children }: { children: ReactNode }) {
  const { os } = useOs()
  if (os !== 'win') return null
  return <>{children}</>
}

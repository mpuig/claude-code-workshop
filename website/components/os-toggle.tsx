import { useOs } from './os-context'

export function OsToggle() {
  const { os, toggle } = useOs()
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${os === 'mac' ? 'Windows' : 'macOS'}`}
      title={`Showing ${os === 'mac' ? 'macOS' : 'Windows'} content. Click to switch.`}
      className="os-toggle"
    >
      <span className={os === 'mac' ? 'os-toggle-active' : 'os-toggle-inactive'}>
        macOS
      </span>
      <span className="os-toggle-separator">/</span>
      <span className={os === 'win' ? 'os-toggle-active' : 'os-toggle-inactive'}>
        Win
      </span>
    </button>
  )
}

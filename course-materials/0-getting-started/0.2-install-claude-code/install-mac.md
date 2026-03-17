# Claude Code Installation Guide for Mac

> **Time:** ~10 to 15 minutes | **Prerequisites:** macOS 10.15 (Catalina) or later

Most users only need the **Quick Start** below. The advanced sections are only for corporate VPN/proxy issues or managed setups.

---

## Quick Start

1. Open **Terminal**. Press `Cmd + Space`, type "Terminal", and press Enter.

2. Run the installer:

   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```

3. When it finishes, close Terminal completely and open it again.

4. If `claude` is not found after reopening Terminal, run:

   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

5. Start Claude Code:

   ```bash
   claude
   ```

6. Claude Code should ask you to sign in in your browser. After login, return to Terminal.

7. Confirm it works:

   ```bash
   claude --version
   ```

---

<details>
<summary>Advanced: install with Homebrew or npm instead</summary>

If you prefer a different install method:

**Homebrew**

```bash
brew install claude-code
```

**npm** (requires Node.js 18+)

```bash
npm install -g @anthropic-ai/claude-code
```

</details>

---

<details>
<summary>Advanced: corporate VPN or proxy certificate setup</summary>

Only use this if Claude Code installs but cannot connect because of SSL or certificate errors.

```bash
security find-certificate -a -p /System/Library/Keychains/SystemRootCertificates.keychain > ~/system-roots.pem
security find-certificate -a -p /Library/Keychains/System.keychain >> ~/system-roots.pem
echo 'export NODE_EXTRA_CA_CERTS=~/system-roots.pem' >> ~/.zshrc
source ~/.zshrc
```

</details>

---

<details>
<summary>Advanced: API key setup for managed environments</summary>

Most trainees should use normal browser login. Only use this if your organization requires API-key authentication.

```bash
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

Replace `your-api-key-here` with your real key, then run `claude`.

</details>

---

## Troubleshooting

### `command not found: claude`

- Close Terminal completely (`Cmd + Q`) and reopen it.
- If it still does not work, run:
  ```bash
  echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
  ```

### Unable to connect to API / Certificate errors

- Complete the **corporate VPN or proxy certificate setup** section above.
- Verify the environment variable is set:
  ```bash
  echo $NODE_EXTRA_CA_CERTS
  ```

### API key invalid

- Check that your API key is correct. It should start with `sk-ant-`.
- Run `echo $ANTHROPIC_API_KEY` to verify it is set.

---

## Quick reference

| Command | What it does |
|---------|-------------|
| `claude` | Start Claude Code |
| `claude status` | Check connection |
| `claude --help` | List all options |
| `claude --version` | Print version |

Full docs: [docs.anthropic.com](https://docs.anthropic.com)

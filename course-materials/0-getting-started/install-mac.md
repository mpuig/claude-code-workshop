# Claude Code Installation Guide for Mac

> **Time:** ~10 to 15 minutes | **Prerequisites:** macOS 10.15 (Catalina) or later

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

## Quick reference

| Command | What it does |
|---------|-------------|
| `claude` | Start Claude Code |
| `claude status` | Check connection |
| `claude --help` | List all options |
| `claude --version` | Print version |

Full docs: [docs.anthropic.com](https://docs.anthropic.com)

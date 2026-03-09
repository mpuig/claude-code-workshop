# Claude Code Installation Guide for Mac

> **Time:** ~15 minutes | **Prerequisites:** macOS 10.15 (Catalina) or later

Follow these steps in order to get Claude Code running on your Mac.

---

## Part 1: Anthropic Account Setup

Before installing Claude Code, you need an Anthropic API key.

1. Go to [console.anthropic.com](https://console.anthropic.com) and create an account (or sign in)
2. Go to **API Keys**
3. Click **Create Key**
4. Copy and save your API key somewhere safe — you'll need it in Part 4

> **Important:** Your API key starts with `sk-ant-`. Keep it secret and never commit it to version control.

---

## Part 2: Install Claude Code

1. Open **Terminal** — press `Cmd + Space`, type "Terminal", and press Enter

2. Run the installer:

   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```

3. Wait for the installation to complete. You should see: `Claude Code successfully installed!`

4. If the installer indicates that `~/.local/bin` is not in your PATH, run:

   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
   ```

5. **Close Terminal completely** (`Cmd + Q`) and reopen it for the PATH changes to take effect

### Alternative: Install via Homebrew

If you use Homebrew, you can install with:

```bash
brew install claude-code
```

### Alternative: Install via npm

If you have Node.js 18+ installed:

```bash
npm install -g @anthropic-ai/claude-code
```

---

## Part 3: SSL certificates (corporate networks)

> **Skip this part** if you're on a personal network with no VPN or proxy.

Corporate networks often use custom SSL certificates for traffic inspection. Node.js (which Claude Code runs on) won't trust these by default, so connections fail. The fix: export your Mac's trusted certificates and point Node.js at them.

Run each command in Terminal:

1. Export system root certificates:

   ```bash
   security find-certificate -a -p /System/Library/Keychains/SystemRootCertificates.keychain > ~/system-roots.pem
   ```

2. Append additional system certificates:

   ```bash
   security find-certificate -a -p /Library/Keychains/System.keychain >> ~/system-roots.pem
   ```

3. Set the environment variable permanently:

   ```bash
   echo 'export NODE_EXTRA_CA_CERTS=~/system-roots.pem' >> ~/.zshrc
   ```

4. Reload your shell configuration:

   ```bash
   source ~/.zshrc
   ```

---

## Part 4: Set up your API key

Point Claude Code at the API key you created in Part 1.

### Option A: Environment Variable (Simplest)

Add your API key as an environment variable:

```bash
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

Replace `your-api-key-here` with your actual API key.

### Option B: API Key Helper Script

If you prefer not to store the key in your shell profile:

1. Create the Claude configuration directory:

   ```bash
   mkdir -p ~/.claude
   ```

2. Create an API key script:

   ```bash
   nano ~/.claude/anthropic_key.sh
   ```

   Paste the following (replace `YOUR_API_KEY` with your actual key):

   ```bash
   #!/bin/bash
   echo "YOUR_API_KEY"
   ```

   Save with `Ctrl + O`, press Enter, then exit with `Ctrl + X`.

3. Make the script executable:

   ```bash
   chmod +x ~/.claude/anthropic_key.sh
   ```

4. Create the settings file:

   ```bash
   nano ~/.claude/settings.json
   ```

   Paste the following:

   ```json
   {
     "apiKeyHelper": "~/.claude/anthropic_key.sh"
   }
   ```

   Save with `Ctrl + O`, press Enter, then exit with `Ctrl + X`.

---

## Part 5: Test it

Run `claude` in Terminal. It should start up without asking you to log in.

A couple of other commands to try:

```bash
claude status    # check connection
claude --help    # see all options
```

---

## Part 6: (Optional) Git and GitHub setup

If you need to work with Git repositories:

1. **Install Xcode Command Line Tools** (includes Git):

   ```bash
   xcode-select --install
   ```

2. **Install GitHub CLI** (requires [Homebrew](https://brew.sh)):

   ```bash
   brew install gh
   ```

3. **Authenticate with GitHub:**

   ```bash
   gh auth login
   ```

   When prompted, select:
   - GitHub.com
   - HTTPS
   - Yes (authenticate Git)
   - Login with a web browser

4. **Clone a repository:**

   ```bash
   git clone https://github.com/your-org/your-repo.git
   cd your-repo
   ```

---

## Troubleshooting

### `command not found: claude`

- Close Terminal completely (`Cmd + Q`) and reopen it
- If still not working, run:
  ```bash
  echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
  ```

### Unable to connect to API / Certificate errors

- Make sure you completed Part 3 (Certificate Configuration)
- Verify the environment variable is set:
  ```bash
  echo $NODE_EXTRA_CA_CERTS
  ```
  Should output: `/Users/<your-username>/system-roots.pem`

### API key invalid

- Check that your API key is correct — it should start with `sk-ant-`
- If using Option A: run `echo $ANTHROPIC_API_KEY` to verify
- If using Option B: run `cat ~/.claude/anthropic_key.sh` to verify

---

## Quick reference

| Command | What it does |
|---------|-------------|
| `claude` | Start Claude Code |
| `claude status` | Check connection |
| `claude --help` | List all options |
| `claude --version` | Print version |

Full docs: [docs.anthropic.com](https://docs.anthropic.com)

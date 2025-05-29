# ts-starter

A modern TypeScript monorepo starter template with integrated development tools and best practices.

## Features

- ⚡️ TypeScript 5.x
- 📦 pnpm Workspace (Monorepo)
- 🔧 ESLint with flat config (eslint.config.ts)
- 🎯 VSCode Integration
- 🔄 Husky for Git Hooks
- 📊 Example Package Included

## Project Structure

```
ts-starter/
├── core/           # Core package
├── example/        # Example package
├── .husky/         # Git hooks
├── .vscode/        # VSCode configuration
├── eslint.config.ts # ESLint flat configuration
├── pnpm-workspace.yaml # Workspace configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ts-starter.git

# Navigate to the project directory
cd ts-starter

# Install dependencies
pnpm install
```

### Available Scripts

```bash
# Development mode
pnpm dev

# Build project
pnpm build

# Code linting
pnpm lint
```

## Workspace Configuration

The project uses pnpm workspace for monorepo management. The workspace is configured in `pnpm-workspace.yaml`:

```yaml
packages:
  - "core"
  - "example"
```

## License

[MIT](LICENSE)

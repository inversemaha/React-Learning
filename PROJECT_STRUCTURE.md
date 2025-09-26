# React Learning Projects Structure

This repository contains multiple React projects for learning purposes.

## Folder Structure

```
React/
├── .gitignore              # Global gitignore for all projects
├── .vscode/               # VS Code workspace settings
│   └── settings.json
├── README.md              # Main repository README
├── PROJECT_STRUCTURE.md   # This file
├── docs/                  # Learning documentation
│   └── LEARNING_NOTES.md  # Learning journey notes
├── my-react-app/          # Project 1: Basic React app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── react-router-app/      # Project 2: React Router learning
│   ├── src/
│   ├── package.json
│   └── ...
├── state-management-app/  # Project 3: State management (Redux, Context)
│   ├── src/
│   ├── package.json
│   └── ...
├── api-integration-app/   # Project 4: API integration
│   ├── src/
│   ├── package.json
│   └── ...
└── full-stack-app/        # Project 5: Full-stack application
    ├── frontend/
    ├── backend/
    └── ...
```

## Git Strategy

- **Single Repository**: All projects are in one repository for easy management
- **Branch Strategy**:
  - `main` - Production-ready code
  - `learning/v1.0.x` - Learning iterations
  - `feature/project-name` - Individual project features

## Benefits

1. **Centralized Learning**: All React learning in one place
2. **Shared Configuration**: Common VS Code settings, ESLint, Prettier
3. **Progressive Learning**: Build complexity across projects
4. **Portfolio Ready**: Easy to showcase multiple projects

## Getting Started with New Projects

```bash
# Create new project
cd React
npx create-vite new-project-name --template react
cd new-project-name
npm install

# Add to git
git add .
git commit -m "Add: new React project - project-name"
git push origin main
```

## VS Code Workspace

The `.vscode/settings.json` contains shared settings for:

- Prettier formatting
- ESLint configuration
- Tailwind CSS support
- React snippets

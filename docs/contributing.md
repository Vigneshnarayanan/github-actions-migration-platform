# Contributing

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes
5. Test your changes
6. Push to your fork
7. Create a pull request

## Development Setup

```bash
npm install
npm run lint
npm test
```

## Code Style

- Use ESLint for code quality
- Follow Node.js best practices
- Add JSDoc comments for public functions
- Write tests for new features

## Testing

Run tests before submitting a pull request:

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

## Linting

Check code quality:

```bash
npm run lint
```

Fix linting errors automatically:

```bash
npm run lint:fix
```

## Commit Messages

Write clear commit messages:

```
feat: Add support for new patch type

- Implement new patch type in PatchEngine
- Add tests for new functionality
- Update documentation
```

## Pull Request Process

1. Ensure tests pass
2. Update documentation if needed
3. Add entry to CHANGELOG
4. Request review from maintainers
5. Address review feedback

## Reporting Bugs

Include:
- Reproduction steps
- Expected behavior
- Actual behavior
- Environment details
- Logs/output

## Feature Requests

Describe:
- Problem you're trying to solve
- Proposed solution
- Alternatives considered
- Potential implementation approach

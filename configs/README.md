# Example Application Configuration

This directory contains YAML configuration files for legacy applications to be migrated to GitHub Actions.

## Configuration Format

```yaml
name: my-legacy-app
type: nodejs  # or: python, docker, etc.
source:
  type: github  # github, gitlab, bitbucket, etc.
  url: https://github.com/org/repo
ci:
  platform: jenkins  # jenkins, gitlab-ci, circle-ci, travis, etc.
  config_path: /path/to/ci/config
patches:
  enabled: true
  frequency: weekly
  types:
    - dependency
    - security
build:
  commands:
    - npm install
    - npm run build
test:
  commands:
    - npm test
deploy:
  enabled: true
  environments:
    - staging
    - production
```

## Example Files

See `example-app.yaml` for a complete example.

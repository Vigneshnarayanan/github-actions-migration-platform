# Configuration Guide

## Configuration File Format

Application configurations are stored as YAML files in the `configs/` directory.

### Basic Structure

```yaml
name: my-legacy-app
type: nodejs
source:
  type: github
  url: https://github.com/myorg/my-app
ci:
  platform: jenkins
  config_path: Jenkinsfile
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

## Sections

### name
Application name (required, must match filename without .yaml)

### type
Application type: `nodejs`, `python`, `docker`, `java`, etc.

### source
Source code repository information:
- `type` - Repository platform: github, gitlab, bitbucket
- `url` - Repository URL

### ci
Existing CI/CD configuration:
- `platform` - Current platform: jenkins, gitlab-ci, circle-ci, travis, github-actions
- `config_path` - Path to CI configuration file

### patches
Patch configuration:
- `enabled` - Enable automated patching
- `frequency` - Patch frequency: daily, weekly, monthly
- `types` - Patch types to apply: dependency, security, version

### build
Build configuration:
- `commands` - Array of build commands

### test
Test configuration:
- `commands` - Array of test commands
- `coverage` (optional) - Coverage reporting configuration

### deploy
Deployment configuration:
- `enabled` - Enable automated deployment
- `environments` - Deployment targets: staging, production, etc.
- `commands` - Deployment commands

## Examples

### Node.js Application

```yaml
name: node-app
type: nodejs
source:
  type: github
  url: https://github.com/myorg/node-app
ci:
  platform: jenkins
  config_path: Jenkinsfile
build:
  commands:
    - npm ci
    - npm run build
test:
  commands:
    - npm test
    - npm run lint
```

### Python Application

```yaml
name: python-app
type: python
source:
  type: github
  url: https://github.com/myorg/python-app
ci:
  platform: gitlab-ci
  config_path: .gitlab-ci.yml
build:
  commands:
    - pip install -r requirements.txt
test:
  commands:
    - pytest
    - flake8 .
```

### Docker Application

```yaml
name: docker-app
type: docker
source:
  type: github
  url: https://github.com/myorg/docker-app
ci:
  platform: circle-ci
  config_path: .circleci/config.yml
build:
  commands:
    - docker build -t myapp .
    - docker run myapp npm test
```

## Environment Variables

Configuration files can reference environment variables:

```yaml
name: ${APP_NAME}
source:
  url: https://github.com/${GITHUB_ORG}/${APP_NAME}
```

Environment variables are expanded at load time.

## Validation

Configuration files are validated on load. Required fields:
- `name`
- `type`
- `ci.platform`

## Best Practices

1. Keep configurations in sync with actual application state
2. Use version control for configuration changes
3. Document custom configurations
4. Test configuration changes before applying
5. Review configuration in pull requests

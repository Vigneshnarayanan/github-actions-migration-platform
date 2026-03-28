#!/bin/bash

# GitHub Actions Migration Platform - Quick Start Script

echo "🚀 GitHub Actions Migration Platform - Quick Start"
echo "=================================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🧪 Running tests..."
npm test

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run: npm run analyze example-app"
echo "  2. Run: npm run status"
echo "  3. Read: docs/getting-started.md"
echo ""
echo "Available commands:"
echo "  npm run analyze <app>      - Analyze application"
echo "  npm run migrate <app>      - Migrate to GitHub Actions"
echo "  npm run patch <app>        - Apply patches"
echo "  npm run status [app]       - Check status"
echo ""

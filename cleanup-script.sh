#!/bin/bash

echo "Starting cleanup process..."

# Clean build directories
echo "Removing build directories..."
rm -rf dist
rm -rf .next

# Remove duplicate config files
echo "Removing duplicate config files..."
rm -f postcss.config.js

# Remove duplicate favicons
echo "Removing duplicate favicons..."
rm -f src/app/favicon.ico
rm -f dist/favicon.ico

# Consolidate components
echo "Consolidating components..."
if [ -d "src/components/ui" ]; then
    mv src/components/ui/* src/app/components/ui/
    rm -rf src/components
fi

echo "Verifying files..."
files=(
    "public/favicon.ico"
    "src/app/components/layout/PresentationDeck.tsx"
    "src/app/globals.css"
    "src/app/page.tsx"
    "tailwind.config.ts"
    "postcss.config.mjs"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ Found: $file"
    else
        echo "✗ Missing: $file"
    fi
done

echo "Cleanup completed."

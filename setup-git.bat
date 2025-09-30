@echo off
echo Setting up Git repository...

echo Initializing Git...
git init

echo Adding all files...
git add .

echo Making initial commit...
git commit -m "Initial commit: Complete Price Comparator web app with AI search, bookmarks, and price history"

echo Setting main branch...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/moekhoui/price-comparator.git

echo Pushing to GitHub...
git push -u origin main

echo Done! Your code has been pushed to GitHub.
pause



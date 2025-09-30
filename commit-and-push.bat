@echo off
echo Committing and pushing to GitHub...

echo Adding all files...
git add .

echo Making commit...
git commit -m "Complete Price Comparator web app with AI search, bookmarks, and price history"

echo Pushing to GitHub...
git push origin main

echo Done! Your code has been pushed to GitHub.
pause



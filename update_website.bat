@echo off
echo ========================================================
echo       UPDATE WEBSITE SCRIPT
echo ========================================================
echo.

echo 1. Adding all changes...
git add .

echo.
set /p commit_msg="2. Enter a short description of changes: "
git commit -m "%commit_msg%"

echo.
echo 3. Pushing to GitHub...
git push

echo.
echo ========================================================
echo DONE!
echo Your changes are on their way to GitHub.
echo Vercel/Netlify will detect this and update your live site
echo in about 1-2 minutes.
echo ========================================================
pause

@echo off
REM ===== Git Add =====
git add .

REM ===== Take Commit Message Input =====
set /p commitMsg=Enter commit message: 

REM ===== Git Commit =====
git commit -m "%commitMsg%"

REM ===== Git Push =====
git push

pause

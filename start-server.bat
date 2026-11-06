@echo off
rem Local server for the study pages at http://127.0.0.1:5510
rem   - serves the generated HTML pages
rem   - saves ticks and course names from the timetable into study-progress.json and the timetable markdown
rem   - the Sync button on the timetable commits, pulls and pushes the progress files
rem VS Code starts it automatically when the folder is opened, see .vscode/tasks.json
rem Keep this file ASCII only: cmd misreads other characters.
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 goto nonode
netstat -ano | findstr ":5510 " | findstr "LISTENING" >nul
if %errorlevel%==0 goto running
echo   Daily guide:   http://127.0.0.1:5510/AI_ENGINEER_DAILY_LEARNING_GUIDE.html
echo   Daily plan:    http://127.0.0.1:5510/Reports/AI_ENGINEER_TRANSITION_PLAN.html
echo   Problem list:  http://127.0.0.1:5510/Reports/AI_ENGINEER_LEETCODE_DAILY_LIST.html
node study-tools\server.cjs 5510
exit /b %errorlevel%

:nonode
echo Node.js was not found. Install it from https://nodejs.org and run this again.
exit /b 1

:running
echo Port 5510 is already in use. The study server is probably already running.
exit /b 0

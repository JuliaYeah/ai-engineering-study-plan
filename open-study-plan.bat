@echo off
rem Opens a study page in Chrome and starts the local server first when it is not running yet.
rem Nothing runs at login: the server only starts when you open one of the links below.
rem
rem Setup, once per computer: double-click this file. It registers the studyplan:// link for your
rem Windows user (no admin needed) and opens the timetable. Then bookmark one of these in Chrome:
rem   studyplan://plan       daily timetable   Reports/AI_ENGINEER_TRANSITION_PLAN.html
rem   studyplan://guide      daily guide       AI_ENGINEER_DAILY_LEARNING_GUIDE.html
rem   studyplan://leetcode   problem list      Reports/AI_ENGINEER_LEETCODE_DAILY_LIST.html
rem Chrome asks whether to open the link each time: click Open.
rem If you move the repo, double-click this file again. "open-study-plan.bat remove" unregisters the link.
rem The server keeps running in the background until you log out or end node.exe in Task Manager.
rem Keep this file ASCII only: cmd misreads other characters.
setlocal
cd /d "%~dp0"
set "SELF=%~f0"
set "ARG=%~1"
if /i "%ARG%"=="remove" goto remove
if "%ARG%"=="" call :register || goto failed

set "PAGE=Reports/AI_ENGINEER_TRANSITION_PLAN.html"
echo "%ARG%" | findstr /i "guide" >nul && set "PAGE=AI_ENGINEER_DAILY_LEARNING_GUIDE.html"
echo "%ARG%" | findstr /i "leetcode" >nul && set "PAGE=Reports/AI_ENGINEER_LEETCODE_DAILY_LIST.html"

call :listening && goto open
rem Without Node.js the page still opens; ticks are then kept only in this browser.
where node >nul 2>nul || goto open
rem Own hidden console, so the server survives this script and any window it was started from.
start "" "%WINDIR%\System32\conhost.exe" --headless cmd.exe /d /c node study-tools\server.cjs 5510
for /l %%i in (1,1,15) do (
  ping -n 2 127.0.0.1 >nul
  call :listening && goto open
)

:open
set "URL=http://127.0.0.1:5510/%PAGE%"
set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (start "" "%CHROME%" "%URL%") else (start "" "%URL%")
exit /b 0

:listening
netstat -ano | findstr ":5510 " | findstr "LISTENING" >nul
exit /b %errorlevel%

:register
rem Windows runs: conhost --headless cmd /c "<this file>" studyplan://...   (hidden, no window)
powershell -NoProfile -ExecutionPolicy Bypass -Command "$q=[char]34; $k='HKCU:\Software\Classes\studyplan'; New-Item -Path ($k+'\shell\open\command') -Force | Out-Null; Set-ItemProperty -Path $k -Name '(default)' -Value 'URL:Study Plan'; Set-ItemProperty -Path $k -Name 'URL Protocol' -Value ''; Set-ItemProperty -Path ($k+'\shell\open') -Name 'FriendlyAppName' -Value 'Study Plan'; Set-ItemProperty -Path ($k+'\shell\open\command') -Name '(default)' -Value ($q+$env:WINDIR+'\System32\conhost.exe'+$q+' --headless cmd.exe /d /c '+$q+$env:SELF+$q+' %%1')"
if errorlevel 1 exit /b 1
echo Registered the studyplan:// link. Bookmark studyplan://plan in Chrome to open the timetable.
exit /b 0

:remove
powershell -NoProfile -Command "Remove-Item -Path 'HKCU:\Software\Classes\studyplan' -Recurse -ErrorAction SilentlyContinue"
echo Removed the studyplan:// link. A server that is already running keeps running until you log out.
pause
exit /b 0

:failed
echo Could not register the studyplan:// link.
pause
exit /b 1

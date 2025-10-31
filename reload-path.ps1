# Reload PATH in current PowerShell session
$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')
Write-Host "PATH reloaded. Git should now work!" -ForegroundColor Green
git --version


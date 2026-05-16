$paths = @(
    'C:/Program Files/nodejs',
    'C:/Program Files (x86)/nodejs',
    Join-Path $env:LOCALAPPDATA 'Programs/nodejs',
    Join-Path $env:USERPROFILE 'AppData/Roaming/npm'
)
foreach ($path in $paths) {
    if (Test-Path $path) {
        Get-ChildItem -Path $path -Recurse -Filter node.exe -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName
    }
}
if ($LASTEXITCODE -eq 0) { Write-Host 'Search complete' } else { Write-Host 'Search ran with errors' }

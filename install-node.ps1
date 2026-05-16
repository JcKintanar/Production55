[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$installerPath = Join-Path $env:TEMP 'node-v26.1.0-x64.msi'
Invoke-WebRequest 'https://nodejs.org/dist/latest/node-v26.1.0-x64.msi' -OutFile $installerPath
Write-Host "Downloaded Node.js installer to $installerPath"
Start-Process msiexec.exe -Wait -ArgumentList '/i', $installerPath, '/quiet', '/norestart'
Write-Host 'Node.js installation command completed'
Stop-Process -Name 'node' -Force -ErrorAction SilentlyContinue
Start-Sleep 2
Start-Process cmd -ArgumentList '/c cd /d C:\Users\alban\eightbyte-studio && npx next dev --port 3099' -WindowStyle Hidden
Start-Sleep 15

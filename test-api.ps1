try {
    $response = Invoke-WebRequest -Uri 'http://localhost:3099/api/reviews' -UseBasicParsing
    Write-Output "Status: $($response.StatusCode)"
    Write-Output "Body: $($response.Content)"
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $body = $reader.ReadToEnd()
    Write-Output "Status: $statusCode"
    Write-Output "Body: $body"
}

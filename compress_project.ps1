
# Define variables
$sourceDir = "c:\Users\Oloruntobi Adebola\Downloads\testycare-global-services---premium-car-dealership---v1"
$zipFile = "c:\Users\Oloruntobi Adebola\Downloads\testycare-global-services---premium-car-dealership---v1\testycare_project_upload.zip"
$tempDir = Join-Path $env:TEMP "testycare_temp"

# Clean up previous runs
if (Test-Path $tempDir) { Remove-Item -Path $tempDir -Recurse -Force }
if (Test-Path $zipFile) { Remove-Item -Path $zipFile -Force }

# Create temp directory
New-Item -Path $tempDir -ItemType Directory | Out-Null

# List of items to EXCLUDE
$excludeItems = @('node_modules', 'dist', '.git', '.gemini', 'testycare_project_upload.zip', 'package-lock.json')

# Copy files
Get-ChildItem -Path $sourceDir | ForEach-Object {
    if ($excludeItems -notcontains $_.Name) {
        Copy-Item -Path $_.FullName -Destination $tempDir -Recurse -Force
    }
}

# Compress
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipFile -Force

# Cleanup
Remove-Item -Path $tempDir -Recurse -Force

# Report
$size = (Get-Item $zipFile).Length / 1MB
Write-Host "Successfully created zip file: $zipFile"
Write-Host "Size: $([math]::Round($size, 2)) MB"

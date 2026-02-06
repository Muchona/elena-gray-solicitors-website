
Add-Type -AssemblyName System.Drawing

$sourcePath = "C:/Users/mucho/.gemini/antigravity/brain/a20bba32-69dd-4de4-a2f8-121b08bdb20a/uploaded_media_1770292942802.png"
$destDir = "c:\Users\mucho\.gemini\antigravity\scratch\Gray_solicitors\public"

if (-not (Test-Path $sourcePath)) {
    Write-Host "Source file not found: $sourcePath"
    exit 1
}

$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $bmp.Width
$height = $bmp.Height
$thirdWidth = [int]($width / 3)

Write-Host "Original Dimensions: $width x $height"
Write-Host "Third segment width: $thirdWidth"

# Function to crop and save
function New-CroppedImage {
    param (
        [System.Drawing.Bitmap]$source,
        [int]$x,
        [int]$y,
        [int]$w,
        [int]$h,
        [string]$outputPath
    )

    $rect = New-Object System.Drawing.Rectangle $x, $y, $w, $h
    $cropped = $source.Clone($rect, $source.PixelFormat)
    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved: $outputPath"
}

# Crop 1: Surgical (Left)
# Trimming sides to avoid separators and bottom to remove text
$bottomTrim = 80
$sideTrim = 40
$cropWidth = $thirdWidth - ($sideTrim * 2)
$cropHeight = $height - $bottomTrim

New-CroppedImage -source $bmp -x $sideTrim -y 0 -w $cropWidth -h $cropHeight -outputPath "$destDir\illustration_surgical_crop.png"

# Crop 2: GP (Middle)
New-CroppedImage -source $bmp -x ($thirdWidth + $sideTrim) -y 0 -w $cropWidth -h $cropHeight -outputPath "$destDir\illustration_gp_crop.png"

# Crop 3: Misdiagnosis (Right)
New-CroppedImage -source $bmp -x (($thirdWidth * 2) + $sideTrim) -y 0 -w $cropWidth -h $cropHeight -outputPath "$destDir\illustration_misdiagnosis_crop.png"

$bmp.Dispose()

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videosDir = path.join(__dirname, 'public');
const videoFiles = fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4') && f.startsWith('clip-'));

videoFiles.sort().forEach(file => {
  const fullPath = path.join(videosDir, file);
  const stats = fs.statSync(fullPath);
  console.log(`\n${file}:`);
  console.log(`  Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  
  try {
    // Try to get dimensions and frame rate
    const output = execSync(`ffmpeg -i "${fullPath}" 2>&1 || true`, { encoding: 'utf8' });
    const durationMatch = output.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
    if (durationMatch) {
      const [, hrs, mins, secs] = durationMatch;
      const totalSecs = parseInt(hrs)*3600 + parseInt(mins)*60 + parseFloat(secs);
      const frames = Math.round(totalSecs * 30);
      console.log(`  Duration: ${totalSecs.toFixed(2)}s (${frames} frames at 30fps)`);
    }
    const resMatch = output.match(/(\d+)x(\d+)/);
    if (resMatch) {
      console.log(`  Resolution: ${resMatch[1]}x${resMatch[2]}`);
    }
  } catch (e) {
    console.log('  (Could not probe - ffmpeg not available)');
  }
});

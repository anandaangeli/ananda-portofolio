const fs = require('fs');
const path = require('path');

const colorMap = {
  '#9890a8': 'var(--muted-fg)',
  '#e2dceb': 'var(--fg)',
  '#4c3e69': 'var(--border)'
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      for (const [hex, cssVar] of Object.entries(colorMap)) {
        const regex = new RegExp(`\\[${hex}\\]`, 'gi');
        content = content.replace(regex, `[${cssVar}]`);
      }
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(path.join(__dirname, 'app'));
console.log('Done second pass!');

const fs = require('fs');
const path = require('path');

const colorMap = {
  '#0c0a13': 'var(--bg)',
  '#f3f0f8': 'var(--fg)',
  '#a78bfa': 'var(--primary)',
  '#15121e': 'var(--card)',
  '#2d2541': 'var(--border)',
  '#818cf8': 'var(--accent)',
  '#a59eb5': 'var(--muted-fg)',
  '#746c87': 'var(--muted-fg-dark)',
  '#1a1528': 'var(--card-alt)'
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace arbitrary Tailwind classes like text-[#0c0a13] to text-[var(--bg)]
      for (const [hex, cssVar] of Object.entries(colorMap)) {
        // Regex for classes like bg-[#hex], text-[#hex], border-[#hex], etc.
        const regex = new RegExp(`\\[${hex}\\]`, 'gi');
        content = content.replace(regex, `[${cssVar}]`);

        // Also replace inline styles like `color: "#hex"` to `color: "var(--color)"`
        const regexInline = new RegExp(`"${hex}"`, 'gi');
        content = content.replace(regexInline, `"${cssVar}"`);
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(path.join(__dirname, 'app'));
console.log('Done replacing colors!');

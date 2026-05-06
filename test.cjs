const fs = require('fs'); 
['1','2','3','4','5'].forEach(i => { 
  const data = fs.readFileSync('public/assets/logos/image' + i + '.svg', 'utf8'); 
  const fills = [...data.matchAll(/fill=\"(#[A-Fa-f0-9]{3,6})\"/g)].map(m => m[1]); 
  console.log('image' + i + ' fills: ' + [...new Set(fills)].slice(0, 10).join(', ')); 
});

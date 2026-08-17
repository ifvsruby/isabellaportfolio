const https = require('https');

https.get('https://uiverse.io/barisdogansutcu/fuzzy-bullfrog-72', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Save the raw HTML so we can read it easily
    require('fs').writeFileSync('button.html', data);
    console.log('Saved to button.html');
  });
}).on('error', err => console.log(err.message));

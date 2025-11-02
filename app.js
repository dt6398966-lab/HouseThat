const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from multiple directories (MUST be before routes)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve home.html as index
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Also serve home.html explicitly
app.get('/home.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Serve about.html
app.get('/about', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/about.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Serve contact.html
app.get('/contact', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/contact.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Serve terms.html
app.get('/terms', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/terms.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'terms.html'));
});

// Serve blogs.html
app.get('/blogs', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'blogs.html'));
});

app.get('/blogs.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'blogs.html'));
});

// Serve emi_calculator.html
app.get('/emi-calculator', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'emi_calculator.html'));
});

app.get('/emi_calculator.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'emi_calculator.html'));
});

// Serve loan_eligibility.html
app.get('/loan-eligibility', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'loan_eligibility.html'));
});

app.get('/loan_eligibility.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'loan_eligibility.html'));
});

// Serve area_converter.html
app.get('/area-converter', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'area_converter.html'));
});

app.get('/area_converter.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'area_converter.html'));
});

// Serve why-property-prices-same-locality-vary.html
app.get('/why-property-prices-same-locality-vary', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'why-property-prices-same-locality-vary.html'));
});

app.get('/why-property-prices-same-locality-vary.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'why-property-prices-same-locality-vary.html'));
});

// Serve homebuying-trends-post-covid-19.html
app.get('/homebuying-trends-post-covid-19', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'homebuying-trends-post-covid-19.html'));
});

app.get('/homebuying-trends-post-covid-19.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'homebuying-trends-post-covid-19.html'));
});

// Serve other HTML files (only catch .html files, not CSS/JS)
app.get('/:page.html', (req, res) => {
  // Skip if it's not an actual HTML file request
  if (!req.params.page.match(/^[a-zA-Z0-9-_]+$/)) {
    return res.status(404).send('File not found');
  }
  const filePath = path.join(__dirname, `${req.params.page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { name: 'cta-bg.jpg', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
    { name: 'hospital.jpg', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop' },
    { name: 'corporate.jpg', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
    { name: 'building.jpg', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
    { name: 'security.jpg', url: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=2072&auto=format&fit=crop' },
    { name: 'lighting.jpg', url: 'https://images.unsplash.com/photo-1565538810643-b5bdbfc70152?q=80&w=1964&auto=format&fit=crop' },
    { name: 'control-hub.jpg', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
    { name: 'smart-switches.jpg', url: 'https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop' },
    { name: 'sensors.jpg', url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2158&auto=format&fit=crop' },
    { name: 'controllers.jpg', url: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1925&auto=format&fit=crop' },
    { name: 'faq.jpg', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop' },
    { name: 'about.jpg', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop' }
];

const downloadDir = path.join(__dirname, 'src', 'assets', 'images');

images.forEach(img => {
    const filePath = path.join(downloadDir, img.name);
    const file = fs.createWriteStream(filePath);
    https.get(img.url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close();
            console.log(`Downloaded ${img.name}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${img.name}:`, err.message);
    });
});

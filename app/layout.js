import './globals.css';

export const metadata = {
    title: 'Phish-Me-Not | Cybersecurity Training Game',
    description: 'Learn to identify phishing attempts with humor and education',
    keywords: ['cybersecurity', 'phishing', 'security training', 'game', 'education'],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}

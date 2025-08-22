import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="description" content="Anna Belenko - Software Engineer & Computer Science Student at Brooklyn College. Passionate about accessibility, innovative solutions, and creating meaningful impact through technology." />
        <meta name="keywords" content="Anna Belenko, Software Engineer, Computer Science, Brooklyn College, Web Development, Accessibility, React, Next.js, JavaScript, TypeScript" />
        <meta name="author" content="Anna Belenko" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://annabelenko.com/" />
        <meta property="og:title" content="Anna Belenko - Software Engineer & Developer" />
        <meta property="og:description" content="Software Engineer passionate about accessibility and innovative solutions. Currently studying Computer Science at Brooklyn College in NYC." />
        <meta property="og:image" content="https://annabelenko.com/headshot.jpeg" />
        <meta property="og:site_name" content="Anna Belenko Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://annabelenko.com/" />
        <meta name="twitter:title" content="Anna Belenko - Software Engineer & Developer" />
        <meta name="twitter:description" content="Software Engineer passionate about accessibility and innovative solutions. Currently studying Computer Science at Brooklyn College in NYC." />
        <meta name="twitter:image" content="https://annabelenko.com/headshot.jpeg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Google Fonts - Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

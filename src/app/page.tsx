export default function RootPage() {
  return (
    <>
      {/* Static export can't server-redirect; meta refresh + inline script run before hydration */}
      <meta httpEquiv="refresh" content="0; url=/ko/" />
      <script
        dangerouslySetInnerHTML={{ __html: "window.location.replace('/ko/');" }}
      />
      <p style={{ padding: '2rem', textAlign: 'center' }}>
        <a href="/ko/">jaywapp.github.io/ko/</a>
      </p>
    </>
  );
}

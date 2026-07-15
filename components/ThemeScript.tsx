// Runs before the body paints: marks the document as JS-enabled (so the
// `.reveal` animations can hide their initial state) and applies any stored
// theme preference to avoid a flash of the wrong color scheme.
const script = `
(function () {
  try {
    document.documentElement.classList.add('js');
    var saved = localStorage.getItem('theme-preference');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

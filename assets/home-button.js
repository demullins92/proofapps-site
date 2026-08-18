/* Proof Apps — Home Button
   Include on every sub-page with:
   <link rel="stylesheet" href="/assets/home-button.css">
   <script src="/assets/home-button.js" defer></script>
   That's it — no HTML needed on the page itself, this injects it.
*/
(function () {
  var btn = document.createElement('a');
  btn.href = 'https://proofapps.co';
  btn.className = 'pa-home-btn';
  btn.innerHTML =
    '<img src="/assets/proof-logo.png" alt="Proof Apps" />' +
    '<span>Back to Proof Apps</span>' +
    '<svg class="pa-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="5" y1="12" x2="19" y2="12"/>' +
      '<polyline points="13 6 19 12 13 18"/>' +
    '</svg>';
  document.body.insertBefore(btn, document.body.firstChild);
})();

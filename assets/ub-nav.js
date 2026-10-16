// UtilityBelt shared nav — auto-injects a floating "back home" badge.
// Usage in any applet's <head>:
//   <link rel="stylesheet" href="../assets/ub-nav.css">
//   <script src="../assets/ub-nav.js" defer></script>
// That's it — no HTML needed in the applet itself.

(function () {
  function init() {
    var a = document.createElement("a");
    a.id = "ub-nav";
    a.href = "../index.html";
    a.innerHTML =
      '<span class="ub-icon">\u2190</span>' +
      '<span class="ub-label">Back to</span>' +
      '<span class="ub-name">UtilityBelt</span>';
    document.body.appendChild(a);

    // Shared favicon, unless the applet declares its own.
    if (!document.querySelector('link[rel~="icon"]')) {
      var icon = document.createElement("link");
      icon.rel = "icon";
      icon.type = "image/png";
      icon.href = "../assets/utility-belt.png";
      document.head.appendChild(icon);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


```
if (window.innerWidth < 768) { // adjust the width value as needed
  document.getElementById("mobile-content").style.display = "block";
  document.getElementById("desktop-content").style.display = "none";
} else {
  document.getElementById("mobile-content").style.display = "none";
  document.getElementById("desktop-content").style.display = "block";
}
```

```
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  document.getElementById("mobile-content").style.display = "block";
  document.getElementById("desktop-content").style.display = "none";
} else {
  document.getElementById("mobile-content").style.display = "none";
  document.getElementById("desktop-content").style.display = "block";
}
```

```
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.getElementById("mobile-content").style.display = "block";
  document.getElementById("desktop-content").style.display = "none";
} else {
  document.getElementById("mobile-content").style.display = "none";
  document.getElementById("desktop-content").style.display = "block";
}
```

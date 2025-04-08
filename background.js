const blockedUrls = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googleadservices.com/*",
    "*://*.adsafeprotected.com/*",
    "*://*.adnxs.com/*",
    "*://*.adform.net/*",
    "*://*.youtube.com/api/stats/ads*",       // YouTube ad telemetry
    "*://*.youtube.com/pagead/*",             // YouTube ad delivery
    "*://*.youtube.com/yva_video_*",          // Some video ad URLs
    "*://*.googlevideo.com/videoplayback?*adformat*", // Some skippable ads
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      return { cancel: true };
    },
    { urls: blockedUrls },
    ["blocking"]
  );
  
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.js >> Home page
- Location: tests/visual.spec.js:11:1

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /var/folders/22/yybqvj7x4gn803pgk5z5z_jh0000gn/T/cursor-sandbox-cache/24e6ef08e42d3775a3db47023f2e7389/playwright/chromium_headless_shell-1223/chrome-headless-shell-mac-x64/chrome-headless-shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/22/yybqvj7x4gn803pgk5z5z_jh0000gn/T/playwright_chromiumdev_profile-6EtmUs --remote-debugging-pipe --no-startup-window
<launched> pid=1856
[pid=1856][err] Received signal 11 SEGV_MAPERR 000000000010
[pid=1856][err]  [0x00010aabc073]
[pid=1856][err]  [0x00010aabfa33]
[pid=1856][err]  [0x7ff80bdf137d]
[pid=1856][err]  [0x00000000010b]
[pid=1856][err]  [0x00010764a475]
[pid=1856][err]  [0x00010828220a]
[pid=1856][err]  [0x00010721d436]
[pid=1856][err]  [0x0001089b2bb2]
[pid=1856][err]  [0x0001089b3bdc]
[pid=1856][err]  [0x00020f904781]
[pid=1856][err] [end of stack trace]
Call log:
  - <launching> /var/folders/22/yybqvj7x4gn803pgk5z5z_jh0000gn/T/cursor-sandbox-cache/24e6ef08e42d3775a3db47023f2e7389/playwright/chromium_headless_shell-1223/chrome-headless-shell-mac-x64/chrome-headless-shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/22/yybqvj7x4gn803pgk5z5z_jh0000gn/T/playwright_chromiumdev_profile-6EtmUs --remote-debugging-pipe --no-startup-window
  - <launched> pid=1856
  - [pid=1856][err] Received signal 11 SEGV_MAPERR 000000000010
  - [pid=1856][err]  [0x00010aabc073]
  - [pid=1856][err]  [0x00010aabfa33]
  - [pid=1856][err]  [0x7ff80bdf137d]
  - [pid=1856][err]  [0x00000000010b]
  - [pid=1856][err]  [0x00010764a475]
  - [pid=1856][err]  [0x00010828220a]
  - [pid=1856][err]  [0x00010721d436]
  - [pid=1856][err]  [0x0001089b2bb2]
  - [pid=1856][err]  [0x0001089b3bdc]
  - [pid=1856][err]  [0x00020f904781]
  - [pid=1856][err] [end of stack trace]
  - [pid=1856] <gracefully close start>
  - [pid=1856] <kill>
  - [pid=1856] <will force kill>
  - [pid=1856] exception while trying to kill process: Error: kill EPERM
  - [pid=1856] <process did exit: exitCode=null, signal=SIGSEGV>
  - [pid=1856] starting temporary directories cleanup
  - [pid=1856] finished temporary directories cleanup
  - [pid=1856] <gracefully close end>

```
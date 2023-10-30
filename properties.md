# Properties of Uniqueness

app: Navigator App ( String )


arch: Device Architecture ( Function )


browser: Browser, based on the User Agent ( Function )


color: Screen Color Depth ( Number )


cookie: Is Cookies Enabled? ( Boolean )


cpuCores: Processor Cores ( Number )


darkmode: Is Dark Mode Enabled ( Boolean )


date: UTC Date when Uniqueness was loaded ( String ) 


dnt: do not track ( Null or Number )


fullscreen: Is The Browser Fullscreen ( Function )


functions: required functions ( Object )


  - getFPS: a function to get the screen refresh rate ( Function ) 


  - scanUA: a function required for *arch()* to work. ( Function )


getIP: promise to get IP Address ( Function )


gpu: Info About GPU ( Function )


ip: sets the *window.ip* variable to the IP address. ( Function )


java: Is Java Enabled ( Boolean )


localdate: Local Date of the Client ( Object ) 

os: Client Operating System ( Function )

supports: browser support for features, return boolean ( Object ) 


- base64: does the browser support base64 encoding? ( Function )


- cookie: does the browser support cookies? ( Function )


- encode: does the browser support base64 encoding? ( Function )


- html5: does the browser support HTML 5? ( Function )


- localstorage: does the browser support Local Storage? ( Function )


- notification: does the browser support Notifications? ( Function )


- sessionstorage: does the browser support session storage? ( Function )


- share: does the browser support Share? ( Function )


- speech: does the browser support Speech Recognition? ( Function )


- storage: does the browser support Navigator Storage? ( Function )



- vibrate: does the browser support Vibrate? ( Function )


timezone: timezone ( String )

utc:  Universal Time Coordinated (UTC) ( Date )

vendor: vendor ( String )

chromiumVersion: Chromium Version ( Function ) 

browserVersion: Browser Version based on User Agent ( Function ) 




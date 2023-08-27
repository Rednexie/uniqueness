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


  | ___ getFPS: a function to get the screen refresh rate ( Function ) 


  | ___ scanUA: a function required for *arch()* to work. ( Function )


getIP: promise to get IP Address ( Function )


gpu: Info About GPU ( Function )


ip: sets the *window.ip* variable to the IP address. ( Function )


java: Is Java Enabled ( Boolean )


localdate: Local Date of the Client ( Object ) 

os: Client Operating System ( Function )

supports: browser support for features, return boolean ( Object ) 


| ___ base64: does the browser support base64 encoding? ( Function )


| ___ cookie: does the browser support cookies? ( Function )


| ___ encode: does the browser support base64 encoding? ( Function )


| ___ html5: does the browser support HTML 5? ( Function )


| ___ localstorage: does the browser support Local Storage? ( Function )


| ___ notification: does the browser support Notifications? ( Function )


| ___ sessionstorage: does the browser support session storage? ( Function )


| ___ share: does the browser support Share? ( Function )


| ___ speech: does the browser support Speech Recognition? ( Function )


| ___ storage: does the browser support Navigator Storage? ( Function )



| ___ vibrate: does the browser support Vibrate? ( Function )


timezone: timezone ( String )

utc:  Universal Time Coordinated (UTC) ( Date )

vendor: vendor ( String )

chromiumVersion: Chromium Version ( Function ) 

browserVersion: Browser Version based on User Agent ( Function ) 




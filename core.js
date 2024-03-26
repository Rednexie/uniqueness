var ip
let sc; // latest stable Chrome release
let sf; // latest stable firefox release
let hz; // screen hertz, based on fps
var uniqueness = {
    date: new Date().toUTCString(),
    utc: new Date().toUTCString(),
    localdate: new Date(),

    getIP: () => {
        return fetch('//ip.rednexie.repl.co/json')
          .then(response => response.json())
          .catch(err => console.error(err));
      },

    ip: () => {
        fetch('//ip.rednexie.repl.co/json')
        .then(response => response.json())
        .then(data => {
            ip = data;
            return "sa";
        })
        .catch(err => {
            console.error(err)
        })

    },
    gpu: () => {
        try{
        let canvas = document.createElement('canvas');
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        return {
            debugInfo,
            vendor,
            renderer,
        }
        
        }
        catch(err){
            console.error("Error obtaining GPU Info")
            return null;
        }
    },

    browser: () => {
        
            let ua = window.navigator.userAgent || null;
            let browser = "unknown";
        
            if(ua.includes("Chrome")){
            
                browser = "Google Chrome"
        
            if(ua.toLowerCase().includes("ucbrowser")){
                browser = "UC Browser"
            }
            if(ua.includes("EdgA")){
                browser = "Microsoft Edge on Android";
            }
            if(ua.includes("UCBrowser")){
                browser = "UC Browser"
            }
            if(ua.includes("Edge")){
                browser =  "Microsoft Legacy Edge";
            }
            if(ua.includes("Edg")){
                browser =  "Microsoft Edge";
            }
            if(ua.includes("OPRGX")){
                browser =  "Opera GX";
            }
            if(ua.includes("OPX")){
                browser = "Opera GX"
            }
            if(ua.includes("Opera")){
                browser =  "Opera Mini";
            }
            if(ua.includes("OPR")){
                browser =  "Opera";
            }
            if(ua.includes("YaBrowser")){
                browser =  "Yandex Browser";
             }
            if(ua.includes("Yowser")){
                browser =  "Yandex Browser";
            }
            if(ua.includes("MMS")){
                browser =  "Opera Neon";
            }
            if(ua.includes("MMS")){
                browser =  "Opera Neon";
            }
            if(ua.includes("MMS")){
                browser =  "Opera Neon";
            }
            if(ua.includes("MMS")){
                browser =  "Opera Neon";
            }
            if(ua.includes("DuckDuckGo")){
                browser = "DuckDuckGo"
            }
            if(ua.includes("Build") && ua.includes("Android")){
                browser =  "Android WebView";
            }
            if(ua.includes("Samsung Browser")){
                browser = "Samsung Browser";
            }
            if(ua.includes("AvastSecureBrowser")){
                browser = "Avast Secure Browser Android"
            }
            
            }
            else{
            if(ua.includes("MSIE")){
                browser = "Microsoft Edge"
            }
            if(ua.includes("Firefox")){
                browser = "Mozilla Firefox"    
            }
        }

        return browser;
    },

    screen: () => {

        let width;
        let height;
        let resolution;

        width = Math.max(
            window.screen.availWidth,
            window.screen.width
            )
        
        height = Math.max(
            window.screen.availHeight,
            window.screen.height
            )

        resolution = width + " x " + height;
            
        return {
            resolution,
            height,
            width
            }
    },
    supports: {
        html5: function(){
            var test_canvas = document.createElement("canvas") 
            return test_canvas.getContext ? true : false 
        },

        vibrate: function(){
        if(window.navigator.vibrate && typeof window.navigator.vibrate == "function"){
            return true;
        }
        else{
            return false;   
        }
        },
        
        
        localstorage: function () {
        if(window.localStorage){
            return true;
        }
        if(window.localStorage == null){
            return null;
        }
        else
        {
            return false;
        }
        },
        cookie: function(){
        if(typeof document.cookie == "string"){
            return true
        }
        else
        {
            return false
        }},
        notification: function () {
        if(window.Notification){
            if(typeof Notification !== "function"){
                return false;
            }
            return true;
        }
        else{
            return false;
        }
        },
        sessionstorage: function() {
            if(window.sessionStorage){
                if(window.sessionStorage == null){
                    return null;
                }
                return true;
            }
        
        else{
            return false;
        }
        },
        storage: function() {
         if(navigator.storage){
            if(navigator.storage == null){
                return null;
            
            }
             return true;
         }
         else{
            return false;
         }
        },
    
        
        encode: function() {
        let status = "started";
        if(window.encodeURI && window.encodeURIComponent){
            return true;
        }
        if(window.encodeURI || window.encodeURIComponent){
            return "partial";
        }
        else{
            return false;
        }
        console.log("ended but with an error");
        },
    
    
        base64: function() {
        if(window.atob && window.btoa){
            if(window.atob == null || window.btoa == null){
                return null;
            
            }
            return true;
        }
        else{
            return false;
        }
        },
    
        speech: function() {
        if(window.speechRecognition || window.webkitSpeechRecognition){
            if(window.speechRecognition && window.webkitSpeechRecognition){
                return null;
            
            }
            return true;
        }
        else{
            return false;
        }   
        },
    
        share: function() {
        let shareData = {
            title: "timtal <3",
            text: "mekan",
            url: "https://teknoparkistanbul.meb.k12.tr/",
            };
    
    
        if(!window.navigator.canShare || window.navigator.share){
            return false;
        }
        else{
            if(navigator.canShare(shareData)){
                return true;
            }
            else{
        return false;
            }
        }   
        },
        
        
        
        },

        os: function() {




            // system
            var os = null;
            var clientStrings = [
                {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
                {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
                {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
                {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
                {s:'Windows Vista', r:/Windows NT 6.0/},
                {s:'Windows Server 2003', r:/Windows NT 5.2/},
                {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
                {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
                {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
                {s:'Windows 98', r:/(Windows 98|Win98)/},
                {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
                {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                {s:'Windows CE', r:/Windows CE/},
                {s:'Windows 3.11', r:/Win16/},
                {s:'Android', r:/Android/},
                {s:'Open BSD', r:/OpenBSD/},
                {s:'Sun OS', r:/SunOS/},
                {s:'Chrome OS', r:/CrOS/},
                {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
                {s:'iOS', r:/(iPhone|iPad|iPod)/},
                {s:'Mac OS X', r:/Mac OS X/},
                {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                {s:'QNX', r:/QNX/},
                {s:'UNIX', r:/UNIX/},
                {s:'BeOS', r:/BeOS/},
                {s:'OS/2', r:/OS\/2/},
                {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(window.navigator.userAgent)) {
                    os = cs.s;
                    break;
                }
            }
    
            var osVersion = null;
    
            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }
    
            switch (os) {
                case 'Mac OS':
                case 'Mac OS X':
                case 'Android':
                    osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                    break;
    
                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
    
            return os + ' ' + osVersion;
    
    
    },
        oldos: () => {
            platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'darwin'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE', 'Windows NT'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
      
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(ua)) {
          os = 'Android';
        } else if (/Linux/.test(platform)) {
          os = 'Linux';
        }
      
        return os;
      },

      
      arch: function() {

        var platform = window.navigator.platform || window.navigator.userAgentData.platform;
        var className = '';
        if (
            uniqueness.functions.scanUA('x86_64') ||
            uniqueness.functions.scanUA('x86-64') ||
            uniqueness.functions.scanUA('Win64') ||
            uniqueness.functions.scanUA('x64;') ||
            uniqueness.functions.scanUA('amd64') ||
            uniqueness.functions.scanUA('AMD64') ||
            uniqueness.functions.scanUA('WOW64') ||
            uniqueness.functions.scanUA('x64_64') ||
            platform === 'MacIntel' ||
            platform === 'Linux x86_64'
        ){
            className = 'arch64';
    
        } else if (
            platform === 'Linux armv7l' ||
            platform === 'iPad' ||
            platform === 'iPhone' ||
            platform === 'Android' ||
            platform === 'iPod' ||
            platform === 'BlackBerry'
        ) {
            className = 'mobile';
        //This one doesn't report accurately, set it to unknown
        } else if ( platform === 'Linux i686' ) {
            className = 'unknown';
        //Anything else will just be lumped into 32-bit
        } else {
            className = 'arch32';
        }
    
        return className;
    },

        darkmode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        timezone: window.Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        vendor: window.navigator.vendor,
        app: window.navigator.appCodeName,
        cookies: window.navigator.cookieEnabled,
        cpuCores: navigator.hardwareConcurrency,
        java: navigator.javaEnabled(),
        color: window.screen.colorDepth,
        orientation: window.screen.orientation.type,
        chromiumVersion: window.navigator.userAgentData ? window?.navigator.userAgentData.brands[2].version || window?.navigator.userAgentData.brands[1].version : null,
        dnt: navigator.doNotTrack, 
        browserVersion: () => {
            const userAgent = window.navigator.userAgent || "";
            const matches = userAgent.match(/(chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
            if (matches) {
              const browser = matches[1].toLowerCase();
              const version = parseInt(matches[2], 10);
              return { browser, version }; // Extracted browser and version
            }
            return null; // Browser version not found
          },
        fullscreen: function() {
            return window.screen.availWidth == window.outerWidth && window.screen.availHeight == window.outerHeight;
        },


        ram: () => {
            if(navigator.deviceMemory && !isNaN(Number(navigator.deviceMemory))){
                return navigator.deviceMemory + "+ GB";
            }
            else return "undetected"
            
        },
        ramgb: () => { 
            return typeof Number(navigator.deviceMemory) === "number" ? Number(navigator.deviceMemory) : 0;
        },


        functions: {
            
        scanUA: (str) => {
            return window.navigator.userAgent.indexOf(str) > -1;
        },

         getFPS: () =>
            new Promise(resolve =>
                requestAnimationFrame(t1 =>
                requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
            )
  )
    },
    
    
}

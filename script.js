document.addEventListener('DOMContentLoaded', function () {
    (async function () {
        const domain = window.location.hostname;
        const killSwitchDomain = 'kill.yourdomain.com';

        try {
            const response = await fetch(`https://dns.google/resolve?name=${killSwitchDomain}&type=TXT&nocache=${new Date().getTime()}`);
            const data = await response.json();

            if (data.Answer) {
                const txtRecord = data.Answer[0].data.replace(/"/g, '');
                const killSwitchData = txtRecord.split(';').reduce((acc, kvp) => {
                    const [key, value] = kvp.split('=');
                    if (key && value) {
                        acc[key.trim()] = value.trim();
                    }
                    return acc;
                }, {});

                if (killSwitchData[domain] && killSwitchData[domain] === "1") {
                    document.body.innerHTML = '';
                    document.body.style.backgroundColor = 'white';
                }
            }
        } catch {
        }
    })();
});

function initialize()
{
    timeNow = getHours();
    defineImage(timeNow);
}

function defineImage(timeNow)
{
    if (timeNow <= 12) { 
        let textTimeNow = window.document.getElementById('nowTime'); // Texto que falará as horas pro usuário
        textTimeNow.innerHTML = `Bom dia! Agora são ${timeNow} horas.`

        let img = window.document.getElementById('circleImg');
        img.style.backgroundImage = "url('assets/images/goodMorning.jpg')";
    } else if (timeNow <= 18) {
        let textTimeNow = window.document.getElementById('nowTime');
        textTimeNow.innerHTML = `Boa tarde! Agora são ${timeNow} horas.`

        let img = window.document.getElementById('circleImg');
        img.style.backgroundImage = "url('assets/images/goodAfternoon.jpg')";
    } else {
        let textTimeNow = window.document.getElementById('nowTime');
        textTimeNow.innerHTML = `Boa noite! Agora são ${timeNow} horas.`

        let img = window.document.getElementById('circleImg');
        img.style.backgroundImage = "url('assets/images/goodEvening.jpg')";
    }
}

function getHours()
{
    // Pegar hora atual (0 a 23)
    const data = new Date();
    let timeNow =  data.getHours();

    return timeNow
}

initialize();
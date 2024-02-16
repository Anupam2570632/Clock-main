
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


function newDate() {
    let date = new Date();
    let d = date.getDate();
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = days[date.getDay()];
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';
    if (m <= 9) {
        m = '0' + m;
    }
    if (s <= 9) {
        s = '0' + s;
    }
    if (h > 11) {
        session = 'PM'
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h <= 9) {
        h = '0' + h;
    }

    const time = h + ':' + m + ':' + s + ' ' + session;
    document.getElementById('clock').innerText = time;

    const today = month + ' ' + d + ', ' + year;
    document.getElementById('tarikh').innerText = today;
    document.getElementById('today').innerHTML = day;

    setTimeout("newDate()", 100);
}

newDate();
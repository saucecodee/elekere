const unitWords = ["", "otu", "abuo", "ato", "ano", "ise", "isi", "asa", "asato", "itolu"]

function showTime() {
     let tense = getverbTense().tense;
     let minute = getverbTense().minute;
     let verb = getverbTense().verb;
     let hour = getverbTense().hour;
     let period = getPeriod();
     document.querySelector('#time').innerHTML = new Date().toLocaleTimeString()
     document.querySelector('#elekere').innerHTML = `O ${tense} nkeji ${convertNumToWords(minute)} ${verb} elekere ${convertNumToWords(hour)} nke ${period}`
}

function getTime() {
     return new Date().toTimeString().split(' ')[0].split(':')
}

function getPeriod() {
     let hour = parseInt(getTime()[0])

     if (hour >= 0 && hour < 12) {
          return "ututu"
     } else if (hour >= 12 && hour < 16) {
          return "ehihe"
     } else {
          return "abali"
     }
}

function getverbTense() {
     let min = parseInt(getTime()[1])
     let hour = getHour()

     if (min > 0 && min < 30) {
          return { tense: "jirila", verb: "gafee", minute: min, hour: hour }
     } else if (min > 30 && min < 60) {
          return { tense: "foduru", verb: "na-aga", minute: 60 - min, hour: hour + 1 }
     } else if (min == 0) {
          return { tense: "kuola", verb: " ", minute: " ", hour: hour }
     } else {
          return "loadin"
     }
}

function getHour() {
     const hour = parseInt(getTime()[0])

     if (hour > 12) {
          return hour - 12
     } else {
          return hour
     }
}

function convertNumToWords(num) {
     const numString = String(num)
     if (numString.length < 2) {
          return unitWords[num]
     } else {
          let tense = numString.split('')
          return `iri${num < 20 ? '' : ' ' + unitWords[tense[0]]} ${tense[1] == 0 ? '' : 'na'} ${unitWords[tense[1]]}`
     }
}

setInterval(() => {
     showTime()
}, 1000);

var ctx = (id) => document.getElementById(id).getContext('2d');

var deliveredData = (color) => {
     return {
          labels: [
               "Value"
          ],
          datasets: [
               {
                    data: [100, 25],
                    backgroundColor: [
                         color,
                         "rgba(255,255,255,0.1)"
                    ],
                    hoverBackgroundColor: [
                         "#3ec556",
                         "rgba(0,0,0,0)"
                    ],
                    borderWidth: [
                         0, 0
                    ]
               }
          ]
     }
}

var deliveredOpt = {
     cutoutPercentage: 88,
     animation: {
          animationRotate: true,
          duration: 2000
     },
     legend: {
          display: false
     },
     tooltips: {
          enabled: false
     }
};

var chart = new Chart(ctx("event-doughnut"), {
     type: 'doughnut',
     data: deliveredData("#3ec556"),
     options: deliveredOpt
});

var chart = new Chart(ctx("todo-doughnut"), {
     type: 'doughnut',
     data: deliveredData("#d34431"),
     options: deliveredOpt
});


// console.log(new Date().toDateString())
// console.log(new Date().toISOString())
// console.log(new Date().toJSON())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleString())
// console.log(new Date().toLocaleTimeString())
// console.log(new Date().toString())
// console.log(new Date().toTimeString())
// console.log(new Date().toUTCString())
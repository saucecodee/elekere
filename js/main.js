const S = (selector) => document.querySelector(selector)
const unitWords = ["", "otu", "abụọ", "atọ", "anọ", "ise", "isii", "asaa", "asatọ", "itoolu"]

function showTime() {
     let tense = getverbTense().tense;
     let minute = getverbTense().minute;
     let verb = getverbTense().verb;
     let hour = getverbTense().hour;
     let period = getPeriod();
     S('#time').innerHTML = new Date().toLocaleTimeString()
     S('#date').innerHTML = new Date().toDateString()
     S('#elekere').innerHTML = `O ${tense} nkeji ${convertNumToWords(minute)} ${verb} elekere ${convertNumToWords(hour)} nke ${period}`
}

function getTime() {
     return new Date().toTimeString().split(' ')[0].split(':')
}

function getPeriod() {
     let hour = parseInt(getTime()[0])

     if (hour >= 0 && hour < 12) {
          return "ụtụtụ"
     } else if (hour >= 12 && hour < 16) {
          return "ehihe"
     } else {
          return "abalị"
     }
}

function getverbTense() {
     let min = parseInt(getTime()[1])
     let hour = getHour()

     if (min > 0 && min < 30) {
          return { tense: "jirila", verb: "gafee", minute: min, hour: hour }
     } else if (min > 30 && min < 60) {
          return { tense: "fọdụrụ", verb: "na-aga", minute: 60 - min, hour: hour + 1 }
     } else if (min == 0) {
          return { tense: "kụọla", verb: " ", minute: " ", hour: hour }
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

document.addEventListener("click", function () {
     S('.side-modal').classList.add("side-modal-out")
});
// S('#sm-close-btn').addEventListener("click", function () {
//      S('.side-modal').classList.add("side-modal-out")
// });


// console.log(new Date().toDateString())
// console.log(new Date().toISOString())
// console.log(new Date().toJSON())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleString())
// console.log(new Date().toLocaleTimeString())
// console.log(new Date().toString())
// console.log(new Date().toTimeString())
// console.log(new Date().toUTCString())
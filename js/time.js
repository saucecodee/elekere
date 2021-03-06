const unitWords = ["", "otu", "abụọ", "atọ", "anọ", "ise", "isii", "asaa", "asatọ", "itoolu"]

function showTime() {
     let tense = getTenseVerbMinuteHour().tense;
     let minute = getTenseVerbMinuteHour().minute;
     let verb = getTenseVerbMinuteHour().verb;
     let hour = getTenseVerbMinuteHour().hour;
     let period = getPeriod();
     $("#time").innerHTML = new Date().toLocaleTimeString()
     $("#date").innerHTML = new Date().toDateString()
     $("#elekere").innerHTML = `O ${tense} nkeji ${convertNumToWords(minute)} ${verb} elekere ${convertNumToWords(hour)} nke ${period}`
}

function showGreeting() {
     let period = getPeriod();
     let first = period[0]
     period = period.replace(first, first.toUpperCase())
     $("#greeting-period").innerHTML = period
}

function getTime() {
     return new Date().toTimeString().split(" ")[0].split(":")
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

function getTenseVerbMinuteHour() {
     let min = parseInt(getTime()[1])
     let hour = getHour()

     if (min > 0 && min < 30) {
          return { tense: "jirila", verb: "gafee", minute: min, hour: hour }
     } else if (min > 30 && min < 60) {
          return { tense: "fọdụrụ", verb: "na-aga", minute: 60 - min, hour: hour + 1 }
     } else if (min == 0) {
          return { tense: "kụọla", verb: " ", minute: " ", hour: hour }
     } else if (min == 30) {
          return { tense: "kụọla", verb: " ", minute: "okara", hour: hour }
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
          let tense = numString.split("")
          return `iri${num < 20 ? "" : " " + unitWords[tense[0]]} ${tense[1] == 0 ? "" : "na"} ${unitWords[tense[1]]}`
     }
}

// Show time and update every second
showTime()
showGreeting()

setInterval(() => {
     showTime()
     showGreeting()
}, 1000);
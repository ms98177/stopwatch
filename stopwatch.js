// button controls
const start = document.querySelector('button.start')
const stop = document.querySelector('button.stop')
const lap = document.querySelector('button.lap')
const reset = document.querySelector('button.reset')

// DOM elements that I need to update
const lapList = document.querySelector('#lapList')
const stopwatchTime = document.querySelector('#stopwatchTime')

// constants that shouldn't ever change
const laps = []
const intervalRate = 10 // update the stopwatch every 10 milliseconds

// values that will change pretty often
let intervalId = null
let rawTime = 0

// turns the time into a human readable format
function formatTime (raw) {
  let seconds = Math.floor(raw / 1000)
  let fractionalSeconds = (raw % 1000) / 1000
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes) + fractionalSeconds

  return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
}

// start the stopwatch by creating a new interval
// we'll store the interval id so we can manipulate the interval later
function stopwatchStart (event) {
  event.preventDefault()
  console.log("started! (intervalId) = " + intervalId)


  // every 10 milliseconds, update the stopwatch
  intervalId = setInterval(stopwatchUpdate, intervalRate)
}

// adds the interval to the stopwatch time since the last "tick"
// then update the DOM with the new stopwatch time
function stopwatchUpdate () {
  rawTime += intervalRate
  stopwatchTime.innerHTML = formatTime(rawTime)
}

// get the lap time
function stopwatchLapold(event) {
  event.preventDefault()
  laps.push(rawTime)
  lapList.innerHTML = formatTime(rawTime)
  console.log("Lap time (rawTime) = " + rawTime)
  }

  function stopwatchLap(event)
  {
   event.preventDefault()
    console.log('Lap time: ' + formatTime(rawTime));
    let li=document.createElement('li');
    li.innerText=formatTime(rawTime);
    lapList.appendChild(li);
  }

// stops the stopwatch by clearing the interval
function stopwatchStop (event) {
  event.preventDefault()
  console.log('stopped!')
  clearInterval(intervalId)
}



// resets the stopwatch by setting the rawTime to 0
function stopwatchReset (event) {
  event.preventDefault()

// reset values
  console.log('Reset')
  console.log("   reset! (lapList.innerHTML) = " + lapList.innerHTML)
  console.log("   reset! (lapList) = " + lapList.children)
  // clear intervalId
  let intervalId = null
  
  // clear rawTime
  var rawTime = 0
  var raw = 0
  formatTime (raw)

  //


  lapList.innerHTML = formatTime(rawTime)
   //laps.push(lapList)


  // clears the lapList
  console.log("   reset! (lapList.innerHTML) = " + lapList.innerHTML)
  lapList.innerHTML = ""
  console.log("   reset! (lapList.innerHTML) = " + lapList.innerHTML)
  //

  // clears the stopwatchTime
  clearInterval(intervalId)
  stopwatchTime.innerHTML = ""
  stopwatchTime.innerHTML = formatTime(rawTime)
  console.log("   reset! (rawTime) = " + rawTime)
  console.log("   reset! (raw) = " + raw)


  // clear the interval
  //intervalId = setInterval(stopwatchUpdate, intervalRate)
  console.log("   reset! (intervalId) = " + intervalId)
  console.log("   reset! (intervalRate) = " + intervalRate)


  // document.getElementById("stopwatchTime").innerHTML = "";
  // console.log("reset! (stopwatchTime) = " + stopwatchTime)

  // stopwatchTime.innerHTML = formatTime(rawTime)
  // console.log("reset! (stopwatchTime) = " + stopwatchTime)

  // laps.push(rawTime)
  // lapList.innerHTML = formatTime(rawTime)

  // console.log("reset! (stopwatchTime) = " + stopwatchTime)

  //document.getElementById("laps").innerHTML = ""
}



// adds a leading zero because humans like them
function zeroPad (value) {
  let pad = value < 10 ? '0' : ''
  return `${pad}${value}`
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('ready!')


  start.addEventListener("click", stopwatchStart)
  stop.addEventListener("click", stopwatchStop)
  lap.addEventListener("click", stopwatchLap)
  reset.addEventListener("click", stopwatchReset)
})

const time = document.querySelector('.time')
const setTimer = document.querySelector('.set-timer')
const confirm = document.querySelector('.btn-confirm')
const reset = document.querySelector('.btn-reset')

confirm.addEventListener('click', timer)

let countdown

function timer() {

	let minutes = setTimer.value
	let seconds = 0

	// disabling confirm button
	confirm.removeEventListener('click', timer)
	confirm.classList.add('disable')

	function updateTime() {

		// formatting minutes and seconds
		let displayMinute = minutes.toString().padStart(2, '0')
		let displaySeconds = seconds.toString().padStart(2, '0')

		time.textContent = `${displayMinute}:${displaySeconds}`

		if(minutes === 0 && seconds === 0) {

			clearInterval(countdown)
			time.textContent = '00:00'
		} else {

			if(seconds === 0) {
				minutes--
				seconds = 59
			} else {
				seconds--
			}
		}

		reset.addEventListener('click', () => {

			// stopping countdown
			clearInterval(countdown)
			time.textContent = '00:00'

			// activating confirm button
			confirm.addEventListener('click', timer)
			confirm.classList.remove('disable')
		})
	}

	// calling function per second
	countdown = setInterval(updateTime, 1000)
}
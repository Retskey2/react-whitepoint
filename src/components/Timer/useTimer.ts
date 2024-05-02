import { useEffect, useState } from 'react'

export const useTimer = () => {
	const [minute, setMinute] = useState<number>(0)
	const [time, setTime] = useState({
		isTiming: false,
		isReady: false,
		hours: 0,
		minutes: 0,
		seconds: 0
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		const value = e.target.value

		if (value === '' || /^\d+$/.test(value)) {
			setMinute(+value)
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && minute > 0) {
			setTime(() => ({
				isReady: false,
				isTiming: true,
				hours: Math.floor(minute / 60),
				minutes: Math.floor(minute % 60),
				seconds: 0
			}))
		}
	}

	useEffect(() => {
		if (time.isTiming) {
			const interval = setInterval(() => {
				setTime(prevState => {
					const { hours, minutes, seconds } = prevState
					if (hours === 0 && minutes === 0 && seconds === 0) {
						clearInterval(interval)
						return { ...prevState, isTiming: false, isReady: true }
					}

					const newHours = minutes === 0 && seconds === 0 ? hours - 1 : hours
					const newMinutes =
						seconds === 0 ? (minutes === 0 ? 59 : minutes - 1) : minutes
					const newSeconds = seconds === 0 ? 59 : seconds - 1

					return {
						...prevState,
						hours: newHours,
						minutes: newMinutes,
						seconds: newSeconds
					}
				})
			}, 1000)

			return () => clearInterval(interval)
		}
	}, [time])

	return {
		timer: {
			hours: time.hours,
			minutes: time.minutes,
			seconds: time.seconds
		},
		isReady: time.isReady,
		value: minute,
		handleChange,
		handleKeyDown
	}
}

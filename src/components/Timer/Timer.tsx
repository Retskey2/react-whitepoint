import { formatToPad } from '../../utils/format'

import './Timer.css'
import { useTimer } from './useTimer'

export const Timer = () => {
	const { timer, isReady, value, handleChange, handleKeyDown } = useTimer()
	const { hours, minutes, seconds } = timer

	const result = isReady
		? 'Готово'
		: `${formatToPad(hours)}:${formatToPad(minutes)}:${formatToPad(seconds)}`

	return (
		<section>
			<h1>Timer</h1>
			<div className='input-container'>
				<div>Минуты: </div>
				<input
					placeholder='Введите минуты'
					type='text'
					value={value == undefined ? '' : value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<div className='input-timer'>
				<div>Времени осталось:</div>
				<div>{result}</div>
			</div>
		</section>
	)
}

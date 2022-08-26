import classes from './Input.module.scss'
import { ChangeEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler } from 'react'

interface IInput {
  type: HTMLInputTypeAttribute
  value: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: string
  required?: boolean
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  min?: number
  minLength?: number
  max?: number
  maxLength?: number
}

function Input({min, max, minLength, maxLength, type, onChange, value, placeholder, className, required, onKeyUp}: IInput) {
  const cls = [
    classes.Input,
    className || ''
  ]
  return (
    <div className={cls.join(' ')}>
      <label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onKeyUp={onKeyUp}
          min={min}
          minLength={minLength}
          max={max}
          maxLength={maxLength}
        />
        {required && <span>*</span>}
      </label>
    </div>
  )
}

export default Input
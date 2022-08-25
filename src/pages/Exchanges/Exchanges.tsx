import React, { MouseEventHandler, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Button from '../../components/UI/Button/Button'
import { addExchange } from '../../features/exchange/exchange'
import { IExchange } from '../../models/IExchange'
import Input from '../../components/UI/Input/Input'
import currency from '../Currency/Currency'

const nextExchangeId = (todos: IExchange[]) => {
  console.log(todos)
  return todos.reduce((maxId: number, exchange) =>
    Math.max(maxId, exchange.id), 0) + 1
}

function Exchanges() {
  const {exchanges} = useAppSelector(state => state.exchange)
  const {currencies} = useAppSelector(state => state.currency)
  const [currency1, setCurrency1] = useState<string>('')
  const [currency2, setCurrency2] = useState<string>('')
  const [exchange, setExchange] = useState<number>()

  const dispatch = useAppDispatch()

  const onCreateExchange: MouseEventHandler = event => {
    event.preventDefault()
    if (!currency1) {
      return alert('Выберите первую валюту')
    }
    if (!currency2) {
      return alert('Выберите вторую валюту')
    }
    if (!exchange) {
      return alert('Пишите курс')
    }

    dispatch(addExchange({
      id: nextExchangeId(exchanges),
      currency1,
      currency2,
      exchange
    }))
  }

  return (
    <div>
      <h1>Курсы</h1>

      <form>
        <label>
          <select
            onChange={(event) => {
              setCurrency1(event.target.value)
            }}
            required={true}
          >
            {currencies.map(currency => {
              if (currency.code === currency2) {
                return null
              }
              return (
                <option
                  key={currency.code}
                  value={currency.code}
                >{currency.name}</option>
              )
            })}
          </select>

          <select
            onChange={(event) => {
              setCurrency2(event.target.value)
            }}
            required={true}
          >
            {currencies.map(currency => {
              if (currency.code === currency1) {
                return null
              }
              return (
                <option
                  key={currency.code}
                  value={currency.code}
                >{currency.name}</option>
              )
            })}
          </select>
          <Input
            type="number"
            value={exchange?.toString() || ''}
            placeholder="Курс"
            onChange={event => setExchange(+event.target.value)}
          />
        </label>
        <Button
          onClick={onCreateExchange}
        >
          Добавить курс
        </Button>
      </form>

      <ul>
        {exchanges.map(exchange =>
          <li
            key={exchange.id}
          >
            {exchange.currency1}, {exchange.currency2}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Exchanges
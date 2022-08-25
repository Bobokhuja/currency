import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

function Main() {
  const [currency1Exchange, setCurrency1Exchange] = useState<string>('')
  const [currency2Exchange, setCurrency2Exchange] = useState<string>('')
  const [currency1, setCurrency1] = useState<string>('')
  const [currency2, setCurrency2] = useState<string>('')

  const {exchanges} = useAppSelector(state => state.exchange)
  const {currencies} = useAppSelector(state => state.currency)

  const calculateExchange1 = (value: string): number => {
    const find = exchanges.find(exchange => {
      if (exchange.currency1 === currency1 || exchange.currency1 === currency2) {
        if (exchange.currency2 === currency1 || exchange.currency2 === currency2) {
          return true
        }
      }
      return false
    })

    if (!find) return 0

    if (currency1 === find.currency1) {
      setCurrency2Exchange((+value * find.exchange).toString())
    }

    // console.log(find)
    return 1
  }

  const calculateExchange2 = (value: string): number => {
    const find = exchanges.find(exchange => {
      if (exchange.currency1 === currency1 || exchange.currency1 === currency2) {
        if (exchange.currency2 === currency1 || exchange.currency2 === currency2) {
          return true
        }
      }
      return false
    })

    if (!find) return 0

    if (currency1 === find.currency1) {
      setCurrency1Exchange((+value / find.exchange).toString())
    }

    // console.log(find)
    return 1
  }

  return (
    <div>
      <h1>Главная</h1>

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
            value={currency1Exchange}
            onChange={event => {
              setCurrency1Exchange(event.target.value)
              calculateExchange1(event.target.value)
            }}
            placeholder="Курс 1"
          />
          <Input
            type="number"
            value={currency2Exchange}
            onChange={event => {
              setCurrency2Exchange(event.target.value)
              calculateExchange2(event.target.value)
            }}
            placeholder="Курс 2"
          />
        </label>
      </form>
    </div>
  )
}

export default Main
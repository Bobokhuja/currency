import classes from './ModalCreate.module.scss'
import Modal from '../Modal'
import Input from '../../UI/Input/Input'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Button from '../../UI/Button/Button'
import { addCurrency } from '../../../features/currency/currencySlice'

function ModalCreate({onHide, isShow}: { isShow: boolean, onHide: () => void }) {
  const [name, setName] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const dispatch = useAppDispatch()
  const {currencies} = useAppSelector(state => state.currency)

  const onCreateHandler = (event: any) => {
    event.preventDefault()

    if (name) {
      if (!currencies.find(currency => currency.code.toUpperCase() === code.toUpperCase())) {
        dispatch(addCurrency({
          name,
          code: code.toUpperCase()
        }))
        onHide()
        setName('')
        setCode('')
        setErrorMessage('')
      } else {
        setErrorMessage('Такая валюта существует')
      }
    }
  }

  return (
    <Modal isShow={isShow} onHide={() => {
      onHide()
      setName('')
      setCode('')
      setErrorMessage('')
    }}>
      <h2 className={classes.Title}>Создать Валюту</h2>

      <form>
        <Input
          type="text"
          value={name}
          placeholder="Название валюты"
          onChange={event => setName(event.target.value)}
          className={classes.Input}
          required={true}
        />

        <Input
          type="text"
          value={code}
          placeholder="Код валюты"
          onChange={event => setCode(event.target.value)}
          className={`${classes.Input} ${classes.InputCode}`}
          required={true}
          maxLength={3}
        />
        <small className={classes.ErrorMessage}>{errorMessage}</small>

        <Button
          type="submit"
          className={classes.Button}
          onClick={onCreateHandler}
        >Создать</Button>
      </form>
    </Modal>
  )
}

export default ModalCreate
import classes from './ModalCreate.module.scss'
import Modal from '../Modal'
import Input from '../../UI/Input/Input'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Button from '../../UI/Button/Button'
import { addCurrency } from '../../../features/currency/currencySlice'
import { ICurrency } from '../../../models/ICurrency'

function ModalCreate({onHide, isShow}: { isShow: boolean, onHide: () => void }) {
  const [name, setName] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const dispatch = useAppDispatch()

  const onCreateHandler = (event: any) => {
    event.preventDefault()

    if (name) {
      dispatch(addCurrency({
        name,
        code
      }))
      onHide()
    }

    setName('')
    setCode('')
  }

  return (
    <Modal isShow={isShow} onHide={onHide}>
      <h2 className={classes.Title}>Создать Операцию</h2>

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
          className={classes.Input}
          required={true}
        />

        {/*<div className={classes.RadioButtons}>*/}
        {/*  <Radio*/}
        {/*    label="доход"*/}
        {/*    name="typeTransaction"*/}
        {/*    value={StatusFilter.Income}*/}
        {/*    onChange={() => setTransactionType('income')}*/}
        {/*    checked={StatusFilter.Income === transactionType}*/}
        {/*  />*/}
        {/*  <Radio*/}
        {/*    label="расход"*/}
        {/*    name="typeTransaction"*/}
        {/*    value={StatusFilter.Consumption}*/}
        {/*    onChange={() => setTransactionType('consumption')}*/}
        {/*    checked={StatusFilter.Consumption === transactionType}*/}
        {/*  />*/}
        {/*</div>*/}
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
import React, { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import ModalCreate from '../../components/modals/ModalCreate/ModalCreate'
import CurrencyList from '../../components/CurrencyList/CurrencyList'
import classes from './Currency.module.scss'

function Currency() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  return (
    <div>
      <h1>Страница валют</h1>

      <Button
        className={classes.CreateButton}
        onClick={() => setIsShowModal(true)}
      >
        Создать операцию
      </Button>
      <main>
        <CurrencyList/>
      </main>
      <ModalCreate isShow={isShowModal} onHide={() => setIsShowModal(false)}/>
    </div>
  )
}

export default Currency
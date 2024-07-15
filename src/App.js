import React from "react";

function App() {
  const [paymentMethod, setPaymentMethod] =  React.useState('card');
  const [basketShow, setBasketShow] = React.useState(false);
  const [showEmailField, setShowEmailField] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleCheckboxChange = () => {
    setShowEmailField(!showEmailField);
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const cardRef = React.useRef(null);
  const cardNumber = React.useRef(null);
  const sbpRef = React.useRef(null);

  const handleCloseBasket = () => {
    setBasketShow(!basketShow);
  }

  React.useEffect(() => {
    cardNumber.current.focus();
  }, [])

 

  const handleChangePaymentMethod = (ev) => {
    const selectedMethod = ev.currentTarget.getAttribute('data-method');
    

    const elements = document.querySelectorAll('.payment__method-item');
    elements.forEach((el) => {
      el.classList.remove('selected')
    })
    ev.currentTarget.classList.add('selected');
    setPaymentMethod(selectedMethod);

   
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="logo"><a className="logo__link" href="https://croki555.github.io/shop-py/">SHOP-PY</a></div>
          <p className="header__description">
            <span className="header__lock lock">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"/>
              </svg>
            </span>
            SHOP-PY никому не передает ваши данные
            </p>
        </div>
      </header>
      <div className={`payment ${basketShow ? 'fade-show' : ''}`}>
        <div className="payment__container">
          <div className="payment__order">
            <div className="payment__details">
              <div className="payment__details-left">
                <a className="payment__details-link" href="https://croki555.github.io/shop-py/">shop-py.ru</a>
                <p className="payment__details-description">Итого с учётом НДС</p>
                <span className="payment__details-price">{Number('1000').toLocaleString()} ₽</span>
              </div>
              <div className="payment__details-right">
                <button className="payment__details-btn"  onClick={handleCloseBasket}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4ec14e" viewBox="0 0 16 16">
                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"/>
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"/>
                  </svg>
                </button>
              </div>
              
            </div>
            <form className="payment__form" method="post">
              <div className="payment__method method">
                <h2 className="payment__title payment__method-title">Cпособ оплаты</h2>
                <ul className="payment__list payment__method-list">
                  <li className="payment__method-item selected" data-method="card" onClick={handleChangePaymentMethod}  ref={cardRef}>
                    <div className="payment__method-body">
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/visa.png" alt="Карта VISA" />
                      </div>
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/master-card.png" alt="Карта MasterCard" />
                      </div>
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/mir.png" alt="Карта МИР" />
                      </div>
                    </div>
                  </li>
                  <li className="payment__method-item" data-method="spb" onClick={handleChangePaymentMethod} ref={sbpRef}>
                    <div className="payment__method-body">
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/sbp.png" alt="QR-код сбп" />
                      </div>
                    </div>
                  </li>
                </ul>
                {
                  paymentMethod === 'card' && (
                    <>
                      <div className="card">
                      <div className="card__left">
                        <div className="card__header">
                          <img className="payment__img card__img" src="./images/visa.png" alt="Карта VISA" />
                          <img className="payment__img card__img" src="./images/master-card.png" alt="Карта MasterCard" />
                          <img className="payment__img card__img" src="./images/mir.png" alt="Карта МИР" />
                        </div>
                        <div className="card__body">
                          <div className="card__body-row">
                            <label className="card__body-label">Номер карты</label>
                            <input className="card__input" placeholder="XXXX XXXX XXXX XXXX" ref={cardNumber}/>
                          </div>
                          <div className="card__body-row">
                            <label className="card__body-label">Действует до</label>
                            <input className="card__input" placeholder="ММ" style={{ width: 48, textAlign: 'center' }}/>
                            <span style={{ color: '#808d9a' }}> / </span>
                            <input className="card__input" placeholder="ГГ" style={{ width: 48, textAlign: 'center' }}/>
                          </div>
                        </div>
                      </div>
                      <div className="card__right">
                        <div className="card__header card__right-header"></div>
                        <div className="card__body card__righ-body">
                          <div className="card__body-row card__right-body">
                            <label className="card__body-label card__right-label">CVV/CVC</label>
                            <input className="card__input card__right-input" placeholder="000" style={{ width: 56 }}/>
                            <span style={{ display: "block", fontSize: 12, width: 86  }}>три цифры с обратной стороны карты</span>
                          </div>
                        </div>
                      </div>
                      </div>
                      <div style={{ marginBottom: 20 }}>
                        <label style={{ lineHeight: '22px', cursor: 'pointer' }}>
                           <input type="checkbox"/>
                            <span style={{ display:'inline-block', width: 10 }}></span>Запомнить карту. Это безопасно.
                           <br/>
                            Сохраняя карту, вы соглашаетесь с <a href="!#">условиями привязки карты</a>
                        </label>
                       
                      </div>
                      <div className="payment__bottom">
                        <div>
                          <label className="payment__bottom-label">
                            <input
                              type="checkbox"
                              onChange={handleCheckboxChange}
                            />
                            <span style={{ display: "inline-block", width: 10 }}></span> Получить квитанцию на эл.почту
                          </label>
                            {showEmailField && (
                              <div style={{ paddingTop: 10, maxWidth: 300 }}>
                                <input
                                  className="payment__bottom-input"
                                  type="email"
                                  name="email"
                                  value={email}
                                  placeholder="Введите адрес электронной почты"
                                  onChange={handleEmailChange}
                                />
                              </div>
                            )}
                        </div>
                      </div>
                      <button className="payment__btn disabled" style={{ width: '100%' }}>Оплатить {Number('1000').toLocaleString()} ₽</button>
                      <div style={{ marginBottom: '10px' }}>
                        <img className="payment__img" src="./images/security-logos.png" alt="Логотипы безопастности оплаты" />
                      </div>
                      <a className="back-link" href="!#">&#60; Вернуться назад</a>
                    </>
                  )
                }
                {
                  paymentMethod === 'spb' && (
                    <>
                    <h2 className="payment__title payment__method-title">Отсканируйте QR-код для оплаты</h2>
                    <p style={{ color: '#808d9a', textAlign: 'center' }}>Заказ №32523 на сумму {Number('1000').toLocaleString()} ₽ ожидает подтверждения оплаты от банка</p>
                    <div style={{ height: '300px' }}>
                      <img className="payment__img" src="./images/qrcode.png" alt="QR-CODE SPB Оплата" />
                    </div>
                    <p style={{ textAlign: 'center' }}>После оплаты вас автоматически перенесёт на страницу подтверждения платежа</p>
                    <a className="back-link" href="!#">&#60; Вернуться назад</a>
                    </>
                  )
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        basketShow && (
          <>
            <div className="basket">
              <div className="basket__header">
                  <a href="!#">Изменить заказ</a>
                  <button className="basket__close" onClick={handleCloseBasket}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                  </button>
                </div>
              <h2 className="basket__title">Детали заказа №32523</h2>
                <ul className="basket__list">
                    <li className="basket__list-item">
                      <p className="basket__description">Название x3 = {Number('250').toLocaleString()} ₽</p>
                    </li>
                    <li className="basket__list-item">
                      <p className="basket__description">Название x3 = {Number('250').toLocaleString()} ₽</p>
                    </li>
                    <li className="basket__list-item">
                      <p className="basket__description">Название x3 = {Number('250').toLocaleString()} ₽</p>
                    </li>
                    <li className="basket__list-item">
                      <p className="basket__description"><b>Итог: 1&nbsp;000 рублей</b></p>
                  </li>
                </ul>
            </div>
            <div className="modal-backdrop fade show"></div>
          </>
        )
      }
      
      
    </>
  );
}

export default App;

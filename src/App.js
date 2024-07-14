import React from "react";

function App() {
  const [paymentMethod, setPaymentMethod] =  React.useState('visa');

  const [showEmailField, setShowEmailField] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleCheckboxChange = () => {
    setShowEmailField(!showEmailField);
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const visaRef = React.useRef(null);
  const mastercardRef = React.useRef(null);
  const mirRef = React.useRef(null);
  const qrcodeRef = React.useRef(null);

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
    <div className="payment">
      <h1 className="payment__title">Страница оплаты</h1>
      <div className="payment__container">
        <div className="payment__details">
          <h2 className="payment__title payment__details-title">Детали заказа (#234562)</h2>
          <ul className="payment__list payment__details-list">
            <li className="payment__details-item">
              <p className="payment__details-description">Название x3 = 250₽</p>
            </li>
            <li className="payment__details-item">
              <p className="payment__details-description">Название x3 = 250₽</p>
            </li>
            <li className="payment__details-item">
              <p className="payment__details-description">Название x3 = 250₽</p>
            </li>
            <li className="payment__details-item">
              <p className="payment__details-description">Название x3 = 250₽</p>
            </li>
            <li className="payment__details-item">
              <p className="payment__details-description"><b>Итог: {Number('1000').toLocaleString()} рублей</b></p>
            </li>
          </ul>
        </div>
        <div className="payment__order">
          <div className="payment__info info">
            <p className="info__description">
              <span className="info__description-title">Магазин: <a href="https://Croki555.github.io/shop-py">SHOP-PY</a> </span>
            </p>
            <p className="info__description">
              <span className="info__description-title">Описание: Оплата заказа #234562</span>
            </p>
            <hr/>
            <p className="info__description">
              <span className="info__description-title">Сумма: {Number('1000').toLocaleString()} руб.</span>
            </p>
          </div>
          <form className="payment__form" method="post">
            <div className="payment__method method">
              <h2 className="payment__title payment__method-title">Выберите способ оплаты</h2>
                <ul className="payment__list payment__method-list">
                  <li className="payment__method-item selected" data-method="visa" onClick={handleChangePaymentMethod}  ref={visaRef}>
                    <div className="payment__method-body">
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/visa.png" alt="Карта VISA" />
                      </div>
                      <h3 className="payment__title payment__method-item-title">Карта VISA</h3>
                    </div>
                  </li>
                  <li className="payment__method-item" data-method="mastercard" onClick={handleChangePaymentMethod} ref={mastercardRef}>
                    <div className="payment__method-body">
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/master-card.png" alt="Карта MasterCard" />
                      </div>
                      <h3 className="payment__title payment__method-item-title">Карта MasterCard</h3>
                    </div>
                  </li>
                  <li className="payment__method-item" data-method="mir" onClick={handleChangePaymentMethod} ref={mirRef}>
                    <div className="payment__method-body">
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/mir.png" alt="Карта МИР" />
                      </div>
                      <h3 className="payment__title payment__method-item-title">Карта МИР</h3>
                    </div>
                  </li>
                  <li className="payment__method-item" data-method="qrcode" onClick={handleChangePaymentMethod} ref={qrcodeRef}>
                    <div className="payment__method-body">
                      <div className="payment__method-img">
                        <img className="payment__img" src="./images/sbp.png" alt="QR-код сбп" />
                      </div>
                      <h3 className="payment__title payment__method-item-title">Оплата по QR-коду</h3>
                    </div>
                  </li>
                </ul>
                {
                  paymentMethod === 'visa' && (
                    <div className={`payment__method-selected payment__method-visa selected`} id="visa" ref={visaRef}>
                      <div className="card">
                        <div className="card__left">
                          <div className="card-number">
                          <input className="card__input" type="text" name="card-number" placeholder="Введите номер карты" />
                          </div>
                          <div className="card-expiry">
                            <input className="card__input" type="number" name="expiry-month" placeholder="Месяц" min="1" max="12"/>
                            <span style={{ fontSize: '30px', margin: '0 10px', color: 'grey' }}>/</span>
                            <input className="card__input" type="number" name="expiry-year" placeholder="Год" min="2024" max="2030" />
                          </div>
                        </div>
                        <div className="card__right">
                          <div className="card__right-img">
                            <img className="payment__img" src="./images/visa.png" alt="Карта VISA" />
                          </div>
                          <div className="card-cvc">
                            <input className="card__input card__input-cvc" type="text" name="cvc" placeholder="CVC"  />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                {
                  paymentMethod === 'mastercard' && (
                    <div className={`payment__method-selected payment__method-mastercard selected`} id="mastercard" ref={mastercardRef}>
                      <div className="card">
                        <div className="card__left">
                          <div className="card-number">
                            <input className="card__input" type="text" name="card-number" placeholder="Введите номер карты" required />
                          </div>
                          <div className="card-expiry">
                            <input className="card__input" type="number" name="expiry-month" placeholder="Месяц" min="1" max="12"/>
                            <span style={{ fontSize: '30px', margin: '0 10px', color: 'grey' }}>/</span>
                            <input className="card__input" type="number" name="expiry-year" placeholder="Год" min="2024" max="2030" />
                          </div>
                        </div>
                        <div className="card__right">
                          <div className="card__right-img">
                            <img className="payment__img" src="./images/master-card.png" alt="Карта MasterCard" />
                          </div>
                          <div className="card-cvc">
                            <input className="card__input card__input-cvc" type="text" name="cvc" placeholder="CVC"  />
                          </div>
                        </div>
                      </div>
                  </div>
                  )
                }
                {
                  paymentMethod === 'mir' && (
                    <div className={`payment__method-selected payment__method-mir selected`} id="mir" ref={mirRef}>
                        <div className="card">
                          <div className="card__left">
                            <div className="card-number">
                              <input className="card__input" type="text" name="card-number" placeholder="Введите номер карты" required />
                            </div>
                            <div className="card-expiry">
                              <input className="card__input" type="number" name="expiry-month" placeholder="Месяц" min="1" max="12"/>
                              <span style={{ fontSize: '30px', margin: '0 10px', color: 'grey' }}>/</span>
                              <input className="card__input" type="number" name="expiry-year" placeholder="Год" min="2024" max="2030" />
                            </div>
                          </div>
                          <div className="card__right">
                            <div className="card__right-img">
                              <img className="payment__img" src="./images/mir.png" alt="Карта МИР" />
                            </div>
                            <div className="card-cvc">
                              <input className="card__input card__input-cvc" type="text" name="cvc" placeholder="CVC"  />
                            </div>
                          </div>
                        </div>
                    </div>
                  )
                }
                {
                  paymentMethod === 'qrcode' && (
                    <div className={`payment__method-selected payment__method-qrcode selected`} id="qrcode" ref={qrcodeRef}>
                      <div className="payment__method-qrcode-img">
                        <img className="payment__img" src="./images/qrcode.png" alt="QRCODE" />
                      </div>
                    </div>
                  )
                }
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
              <button className="payment__btn" type="submit">Оплатить {Number('1000').toLocaleString()} ₽</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

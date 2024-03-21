import Add_cart from './Add_cart'
import {useContext} from 'react';
import {CartContext} from './CartContext';

export default function CartList(props) {
    // контекст для доступа к корзине
    const cart = useContext(CartContext);
    // общая стоимость товаров в корзине
    const cost = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="cart">
            <i onClick={cart.toggleVisible}>
                close
            </i>
            <h5>Корзина</h5>
            {cart.items.length ? (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Сумма</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map(item =>
                            <CartItem key={item.id} {...item} />
                        )}
                        <tr>
                            <th colSpan="3">Итого</th>
                            <th>{cost}</th>
                            <th>руб.</th>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Ваша корзина пуста</p>
            )}
        </div>
    );
}
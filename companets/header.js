import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbarmenu">
                    <ul>
                        <li><a href="/"></a> Отправить или получить</li>
                        <li><a href="/"></a> Отследить посылку</li>
                        <li><a href="/"></a>Сервисы и продукты</li>
                        <li><a href="/"></a>Правила приема и доставки </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;

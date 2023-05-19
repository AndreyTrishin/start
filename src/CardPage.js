import React, { Component } from 'react'
import MCard from './Card'


var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export default class CardPage extends Component {
    render() {
        return (
            <div>
                <div className='content-grid'>
                    <MCard title='Первый' description={lorem} />
                    <MCard title='Второй' description={lorem} />
                    <MCard title='Третий' description={lorem} />
                    <MCard title='Четвёртый' description={lorem} />
                    <MCard title='Пятый' description={lorem} />
                    <MCard title='Шестой' description={lorem} />
                    <MCard title='Седьмой' description={lorem} />
                    <MCard title='Восьмой' description={lorem} />
                </div>
            </div>
        )
    }
}

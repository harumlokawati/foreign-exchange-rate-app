import React, { Component } from 'react'

import styles from './Layout.scss';
import '../../styles/layout.scss';


class Layout extends Component {
    render() {
        return (
            <div className={styles.app_container}
            //      style = {{ backgroundImage:  `url('/static/background-full.png')`,
                //             //     backgroundSize: 'cover',
                //             //     backgroundPosition: 'center center',
                //             //     backgroundRepeat: 'no-repeat',
                //             // }}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
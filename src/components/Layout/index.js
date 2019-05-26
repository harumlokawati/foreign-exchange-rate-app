import React, { Component } from 'react'

import styles from './Layout.scss';
import '../../styles/layout.scss';


class Layout extends Component {
    render() {
        return (
            <div className={styles.app_container}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
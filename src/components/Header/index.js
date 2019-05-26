import React, {Component} from 'react'
import styles from './header.scss';
import {InputBase} from "@material-ui/core";
import IconMenu from "../IconMenu";


class Header extends Component {
    render() {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src="../../../static/logo.png"/>
                <div id="subtitle" className={styles.subtitle}>See your money value here</div>
                <div className={styles.option}>
                    <div className={styles.row}>
                        <div className={styles.md1}>
                            <img className={styles.icon} src="../../../static/coins.png"/>
                        </div>
                        <div className={`${styles.md6} ${styles.base_col}`}>
                            <div className={styles.currency}>{this.props.base_name}</div>
                            <div className={styles.base}>{this.props.base}</div>
                        </div>
                        <div className={`${styles.md1} ${styles.icon_down}`}>
                            <IconMenu options={this.props.currency_options} id="currency_menu" icon_url="../../../static/down.png" handleMenuItemClick={this.props.changeBase}/>
                        </div>
                        <div className={`${styles.md4} ${styles.amount}`}>
                            <InputBase variant="inline"
                                       defaultValue={this.props.amount}
                                       inputProps={{
                                           style: {
                                               textAlign: "right",
                                               fontSize: 20
                                           }
                                       }}
                                       onChange={this.props.handleChange}
                            />
                        </div>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;
import React, {Component} from 'react'
import {Paper} from '@material-ui/core';
import '../../styles/layout.scss';
import styles from './card.scss';


class CurrencyCard extends Component {
    render() {
        return (
            <Paper className={styles.paper}>
                <div className={styles.row}>
                    <div className={`${styles.md11}`}>
                        <div className={` ${styles.row}`}>
                            <div className={`${styles.md1} ${styles.code}`}>
                                {this.props.base}
                            </div>
                            <div className={`${styles.md11} ${styles.cal_amount}`}>
                                {this.props.amount}
                            </div>
                        </div>
                        <div className={`${styles.attr} ${styles.bold}`}>
                            {this.props.name}
                        </div>
                        <div className={styles.attr}>
                            {this.props.rate}
                        </div>
                    </div>
                    <div className={`${styles.md1} ${styles.center} ${styles.button_remove}`}>
                        <img src="../../../static/round-delete-button.png" className={styles.remove} onClick={this.props.onRemove}/>
                    </div>
                </div>
            </Paper>
        )
    }
}

export default CurrencyCard;
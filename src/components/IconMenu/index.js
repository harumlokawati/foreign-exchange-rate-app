import React, {Component} from 'react'
import {Menu, MenuItem, Paper} from '@material-ui/core';
import '../../styles/layout.scss';
import styles from './iconmenu.scss';


class IconMenu extends Component {
    state = {
        anchorEl : null,
    }

    handleClose() {
        this.setState({anchorEl: null})
    }

    handleClick(event) {
        this.setState({anchorEl : event.currentTarget});
    }

    render() {
        const open = Boolean(this.state.anchorEl);

        return (
            <div>
                <img className={styles.down} src={this.props.icon_url} onClick={event=>this.handleClick(event)}/>
                <Menu
                    id={this.props.id}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    anchorEl={this.state.anchorEl}
                    open={open}
                    onClose={()=>this.handleClose()}
                    PaperProps={{
                        style: {
                            maxHeight: 40 * 4.5,
                            width: 200,
                            zIndex: 1000
                        },
                    }}
                >
                    {this.props.options.map(option => (
                        <MenuItem style={{zIndex: 1000}} key={option} onClick={event => {this.props.handleMenuItemClick(event, option); this.handleClose()}}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}

export default IconMenu;
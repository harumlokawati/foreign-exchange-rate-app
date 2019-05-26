import React, {Component} from 'react'
import {TextField, MenuItem, Button, FormControl, createMuiTheme} from '@material-ui/core';

class FormSymbol extends Component {

    render() {
        return (
            <div>
                <FormControl variant="outlined" style={{width: '150px', paddingLeft: '15px', paddingRight: '15px'}}>
                    <TextField
                        name={"symbol-input"}
                        select
                        label={this.props.label}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    style: {
                                        maxHeight: 48 * 4.5,
                                        width: 250,
                                    },
                                },
                            }
                        }}
                        InputProps={{
                            style: {
                                fontFamily: ['Muli', 'sans-serif'],
                                color: "#6C7E8B",
                                textAlign:'left'
                            }
                        }}
                        margin="normal"
                        variant="outlined">
                        {this.props.options.map((item, index)=>{
                            return <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        })}
                    </TextField>
                </FormControl>
                <Button style={{height: '55px', marginTop: '16px', marginBottom: '8px'}} variant="contained"
                        color="primary" onClick={this.props.onSubmit}>
                    {this.props.buttonText}
                </Button>
            </div>
        );
    }
}

export default FormSymbol;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadRate, removeSymbol, addSymbol, setBase} from '../../src/actions/main';
import {currency} from '../../src/constants/currency';
import {setAmount} from "../../src/actions/main";
import styles from './page.scss';
import CurrencyCard from './CurrencyCard';
import Header from './Header'
import FormSymbol from './FormSymbol';
import {Button} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Add} from '@material-ui/icons';
import ReactLoading from 'react-loading';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
    }
});

class Page extends Component {
    state = {
        onAdd: false,
        addSymbolValue: '',
    };

    componentDidMount() {
        const {symbols, base, dispatch} = this.props
        dispatch(loadRate(symbols, base))
    };

    static async getInitialProps({Component, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }


    handleChangeAmount = event => {
        const {dispatch} = this.props
        dispatch(setAmount(event.target.value))
    };

    handleChange(event) {
        this.setState({addSymbolValue: event.target.value})
    }

    removeSymbol(symbol) {
        const {dispatch} = this.props
        dispatch(removeSymbol(symbol))
    }

    onAddClick() {
        this.setState({onAdd: true})
    }

    onSubmitClick() {
        const {dispatch, symbols, base} = this.props
        const symbol = this.state.addSymbolValue
        const newsymbols = symbols.concat([symbol])

        if (symbol != '') {
            dispatch(addSymbol(symbol))
            dispatch(loadRate(newsymbols, base))
        }

        this.setState({addSymbolValue: ''})
        this.setState({onAdd: false})
    }

    changeBase(event, new_base) {
        const {dispatch, symbols, base} = this.props

        dispatch(setBase(new_base))

        if (base != new_base) {
            dispatch(dispatch(loadRate(symbols, new_base)))
        }
    }

    render() {
        let {base, loading, amount} = this.props
        let {onAdd, addSymbolValue} = this.state
        if (!base) {
            base = 'USD'
        }
        const currency_base = base + " - " + currency[base].name
        return (
            <div className="page_container">
                <Header amount={amount} currency_options={Object.keys(currency)} base={base}
                        base_name={currency_base} handleChange={this.handleChangeAmount}
                        changeBase={this.changeBase.bind(this)}/>

                <div className={styles.list_container}>
                    <div className={styles.currency_list}>
                        {this.renderExchangeList()}
                    </div>
                </div>

                {loading &&
                    <ReactLoading type="spinningBubbles" color="#E6E6E6" className={styles.loading} />
                }

                <div className={styles.form_container}>
                    <MuiThemeProvider theme={theme}>
                        {!onAdd &&
                        <Button variant="contained" color="primary" onClick={() => this.onAddClick()}>
                            ADD
                            <Add/>
                        </Button>
                        }
                        {onAdd &&
                        <FormSymbol label={"symbol"}
                                    value={addSymbolValue}
                                    onChange={(event) => this.handleChange(event)}
                                    options={this.getOptions()}
                                    buttonText="submit"
                                    onSubmit={() => this.onSubmitClick()}
                        />}
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }

    getOptions() {
        const {symbols} = this.props;

        let keys = Object.keys(currency).filter(e => !symbols.includes(e));

        let opt = keys.map(function (i) {
            return {"label": i, "value": i}
        });

        return opt
    }

    renderExchangeList() {
        const {symbols, rates} = this.props

        if (rates)
            return symbols.map((item, index) => {
                if (!rates[item]) return

                let rate = `1 ${this.props.base} = ${item} ${rates[item]}`
                let amount = (rates[item] * this.props.amount).toFixed(4)
                let name = ""
                if (currency[item] != undefined) name = currency[item].name

                return (
                    <CurrencyCard key={index} base={item} name={name} amount={amount} rate={rate}
                                  onRemove={event => this.removeSymbol(item)}/>
                )
            });
    }

}


const mapStateToProps = (state) => {
    return {
        amount: state.app.amount,
        base: state.app.base,
        symbols: state.app.symbols,
        rates: state.app.rates,
        loading: state.app.loading
    }
}

export default connect(mapStateToProps)(Page)
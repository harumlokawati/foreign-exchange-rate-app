import React from 'react';
import { connect } from 'react-redux';

import Page from '../src/components/page';

class Index extends React.Component {

    render() {
        return (
            <Page title="Foreign Exchange"/>
        )
    }
}

export default connect()(Index);
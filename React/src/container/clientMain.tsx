import React from 'react';
import * as Action from './duck';
import { connect } from 'react-redux';
import { State } from '../rootReducer';
import { clientMainNumSelector } from '../selector/clientMainSelector';
type Props = StateProps & DispatchProps;

class ClientMain extends React.Component<Props> {
    render(): JSX.Element {
        const { add, num } = this.props;
        return (
            <div>
                <span>真相只有一个, 你就是凶手</span>
                <div>{ num }</div>
                <button onClick={() => { add(1) }}>点击+1</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any): any => ({
    add (num: number) {
        dispatch(Action.add(num));
    }
});

const mapStateToProps = (state: State) => ({
    num: clientMainNumSelector(state)
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClientMain);

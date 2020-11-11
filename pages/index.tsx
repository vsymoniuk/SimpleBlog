import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../store/actions/counterActions";
import { RootState } from "../store/reducers/rootReducer";

const Counter = ({incrementCounter,decrementCounter,counterValue}): JSX.Element => {
  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <h1>{counterValue}</h1>
    </div>
  );
};

Counter.getInitialProps = async ({ store }) => ({ store });

const mapStateToProps = (state: RootState) => ({
  counterValue: state.counter.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapStateToProps = (state, action) => {
    const { photos: { feed } } = state;
    return {
        feed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
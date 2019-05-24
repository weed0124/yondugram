import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user"

const mapStateToProps = (state, ownProps) => {
    const { user: { userList, notifiList } } = state;
    
    return {
        notifiList,
        userList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNotification: () => {
            dispatch(userActions.getNotification());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
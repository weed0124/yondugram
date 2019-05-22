import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapDispatchProps = (dispatch, ownProps) => {
    return {
        handleHeartClick: () => {
            if (ownProps.isLiked) {
                dispatch(photoActions.unlikePhoto(ownProps.photoId))
            } else {
                dispatch(photoActions.likePhoto(ownProps.photoId))
            }
        }
    }
}

export default connect(null, mapDispatchProps)(Container);
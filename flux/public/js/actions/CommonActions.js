import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';

export default class CommonActions {
	create(_id,id, text) {
		AppDispatcher.dispatch({
			actionType: CommentConstants.COMMENT_CREATE,
			_id : _id,
			id : id,
			text: text,
		});
	}

	destroy(id) {
		AppDispatcher.dispatch({
			actionType: CommentConstants.COMMENT_DESTROY,
			id: id,
		});
	}
};

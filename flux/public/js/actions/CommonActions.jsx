import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import CommentConstants from '../constants/CommentConstants.jsx';

export default class CommonActions {
	create(id, text) {
		console.log("ssb",arguments);
		AppDispatcher.dispatch({
			actionType: CommentConstants.COMMENT_CREATE,
			author: id,
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

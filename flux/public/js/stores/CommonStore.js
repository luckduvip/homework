//"use strict";
import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import CommentConstants from '../constants/CommentConstants';
import GlobalEvent from '../global/GlobalEvent';



// create dummy data
/*
 *for (let i = 0; i < 2; i++) {
 *    create('Nate', 'This is sample comment.');
 *}
 */

function destroy(id) {
	delete _comments[id];
}

const CommentStore = Object.assign({}, EventEmitter.prototype, {
	getCurVal(_id){
		return GlobalEvent.getVal(_id);
	},
	getAll() {
		return [
				 { id : "0", text:"item 0"}
				,{ id : "1", text:"item 1"}
				,{ id : "2", text:"item 2"}
				,{ id : "3", text:"item 3"}
				,{ id : "4", text:"item 4"}
				,{ id : "sb", text:"hwhw sb"}
		]
	},

	emitChange() {
		this.emit('change');
	},

	addChangeListener(callback) {
		this.on('change', callback);
	},

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
});
// Register callback to handle all updates
AppDispatcher.register(action => {
	let text;

	switch (action.actionType) {
		case CommentConstants.COMMENT_CREATE:
			text = action.text.trim();
			if (text !== '') {
				GlobalEvent.pushVal(action._id,{
					_id : action._id
					,id : action.id
					,text : action.text
				});
				CommentStore.emitChange();
			}
			break;

		case CommentConstants.TODO_DESTROY:
			destroy(action.id);
			CommentStore.emitChange();
			break;
		default:
			// no op
	}
});

export default CommentStore;
/*
 *var str  = function(){}
 *module.export = str;
 */

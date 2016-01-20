//"use strict";
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import { EventEmitter } from 'events';
import CommentConstants from '../constants/CommentConstants.jsx';



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
	getCurVal(){
		return curVal;
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
var curVal = {};
// Register callback to handle all updates
AppDispatcher.register(action => {
	let text;

	switch (action.actionType) {
		case CommentConstants.COMMENT_CREATE:
			text = action.text.trim();
			if (text !== '') {
				curVal = {
					id : action.id
					,text : action.text
				}
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

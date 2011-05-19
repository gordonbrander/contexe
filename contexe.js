/**
 * Contexe - Contextual Execution
 * http://github.com/gordonbrander/contexe
 * @author Gordon Brander
 * @version 0.1
 * Released under the terms of both MIT and GNU GPL License
 */
!function (context, doc) {
	Contexe = function (element) {
		/* Use your own DOM fragment, or a keyword ('body'/'html') */
		var el = element || 'html',
			_class = Contexe;
		
		/* Enforce "new" and use a Factory for the lazy that don't assign to variables. */
		if (!(this instanceof _class)) {
			var i = _class.ins;
			if (typeof i[element] === 'undefined') {
				i[element] = new _class(element);
			};
			return i[element];
		};
		
		if (el === 'html') {
			el = doc.getElementsByTagName('html')[0];
		}
		/* Body will only work if the body tag has already loaded. Use at bottom of page
		or with a DOMReady utility */
		else if (el === 'body') {
			el = doc.getElementsByTagName('body')[0];
		};
		
		this.el = el;
	};
	Contexe.ins = [];
	Contexe.prototype = {
		classReg: function (c) {
			return new RegExp("(^|\\s+)" + c + "(\\s+|$)");
		},

		hasClass: function (el, c) {
			return this.classReg(c).test(el.className);
		},
		
		given: function (classname, callback, args) {
			if (this.hasClass(this.el, classname)) {
				callback.apply(null, args);
			};
			return this;
		}
	};
	
	context['Contexe'] = Contexe;
	return context;
}(this, document);
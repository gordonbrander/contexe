!function (context, doc) {
	var Exe = function (element) {
		var tmpEl,
			el = element || 'html';
		
		if (el === 'html') {
			tmpEl = doc.getElementsByTagName('html')[0];
		}
		/* Body will only work if the body tag has already loaded. Use at bottom of page
		or with a DOMReady utility */
		else if (el === 'body') {
			tmpEl = doc.getElementsByTagName('body')[0];
		}
		/* Use your own DOM fragment */
		else {
			tmpEl = element;
		};
		
		this.el = tmpEl;
	};
	Exe.prototype.hasClass = function (classname, element) {
		var el = element || this.el,
			classStr = el.className,
			classes = classStr.split(' ');
		for (var i = classes.length - 1; i >= 0; i--){
			if (classes[i] === classname) {
				return true;
			};
		};
		return false;
	};
	Exe.prototype.given = function (classname, callback) {
		if (this.hasClass(classname)) {
			callback();
		};
		return this;
	};
	
	context['Contexe'] = Exe;
	return context;
}(this, document);
!function (context, doc) {
	var C = function (element) {
		var tmpEl,
			el = element || 'html';
		
		if (typeof this !== C) {
			return new C(element);
		};
		
		if (el === 'html') {
			tmpEl = doc.getElementsByTagName('html')[0];
		}
		else if (el === 'body') {
			tmpEl = doc.getElementsByTagName('body')[0];
		};
		
		this.el = tmpEl;
		
		return this;
	};
	C.prototype.hasClass = function (classname, element) {
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
	C.prototype.given = function (classname, callback) {
		if (this.hasClass(classname)) {
			Object.call(callback);
		};
	};
	
	context['Contexe'] = C;
	return context;
}(this, document);
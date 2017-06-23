//删首尾空
String.prototype.trim = function (){
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
//删除文本中的空格
String.prototype.cleanBlank = function() {
	return this.isEmpty() ? "" : this.replace(/\s/g, "");
}

function foo(){
    var bar = 1;
    quux = 2;
    function zip(){
	var quux = 4;
	bar = true;
    }
    return zip;
}

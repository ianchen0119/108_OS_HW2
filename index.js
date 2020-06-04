let a = function(i,j){
	return 3.5*i+(-6.6*j)
	}
let b = function(i,j){
	return 6.6+(8.8*i)-3.5*j
	}
function MatrixC(i,j){
	let result = 0;
	for (var x = 1; x <= 60; x++) {
		let c = a(i,x)*b(x,j)
		result = result + c;
	}
	return result
}
let HWsetting = { a, b, MatrixC }
module.exports = HWsetting;
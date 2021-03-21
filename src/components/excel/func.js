function r(roman) {
	var value = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
	return roman.split('').map(i => value[i]).reduce((previousValue, currentValue, index, array) => previousValue + ((array[index + 1] > currentValue) ? -currentValue : currentValue), 0)
}

r('MMVIII')
r('IV')
r('MDCLXVI')
r('IX')
const getDialogId = (id1: string, id2: string) => {

	const idsArray1 = id1
		.split("")
		.map(symbol => {
			return symbol.charCodeAt(0)
		})

	const idsArray2 = id2
		.split("")
		.map(symbol => {
			return symbol.charCodeAt(0)
		})

	return idsArray1
		.map((el, index) => {
			return Math.abs(el - idsArray2[index])
		})
		.join("-")

}

export default getDialogId
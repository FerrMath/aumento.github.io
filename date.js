let time = "3h15m59s"
let separators = ["h","H","m","M","s","S"];
let regex = new RegExp(separators.join('|'),'g');

let result = time.split(regex).map(i => i.trim()).slice(0,-1);



function fixDate(data) {
	let hour = data[0] < 10 ? "0"+data[0] : data[0];
	let min = data[1] < 10 ? "0"+data[1] : data[1];
	let sec = data[2] < 10 ? "0"+data[2] : data[2];

	console.log(`${hour}:${min}:${sec}`)
}

console.log("Input: " + time)
fixDate(result)
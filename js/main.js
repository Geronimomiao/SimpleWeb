let speed = 50

let writeCode = (code) => {
  let domCode = document.querySelector('#code')
  let n = 0
  var clock = setInterval(() => {
    n += 1
    domCode.innerHTML = code.substring(0, n)
    myStyle.innerHTML = code.substring(0, n)
    domCode.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"})
    if (n >= code.length) {
      window.clearInterval(clock)
    }
  }, speed)
}

let main = () => {
	writeCode(cssCode)
}

main()
//
// let testCode = `
// /* 你好 */
// /* 我是一名在读本科生 */
//
// /* 白色伤眼睛，来点暗色系的背景吧！*/
// html{
// 	background: #999;
// }
// `
//
// let writeCode = (code) => {
// 	let domCode = document.querySelector('#code')
// 	let styleCode = document.querySelector('#myStyle')
// 	domCode.innerHTML = code
// 	styleCode.innerHTML = code
// }
//
// let main = () => {
// 	writeCode(testCode)
// }
//
// main()
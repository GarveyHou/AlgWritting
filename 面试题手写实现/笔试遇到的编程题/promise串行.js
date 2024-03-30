async function fn() {
  let res = []
  for (let i = 0; i < n; i++) {
    try {
      let data = await URL()
      res.push(data)
    } catch (err) {}
  }
  return res
}
fn().then((res) => console.log(res))

// function request() {
//   return new Promise((resolve, reject) => {
//     Qingqiu(resolve()||reject())
//   })
// }

function fn() {}

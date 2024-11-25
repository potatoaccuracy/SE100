function getNumberPromise() {
    // Write your code here
    return new Promise(
        (resolve)=>{
            setTimeout(()=>{
                resolve(10)
            }, 2000)
        }
    )
}
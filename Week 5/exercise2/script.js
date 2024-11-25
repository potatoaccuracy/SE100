function fetchData(): Promise<string> {
    return new Promise(
        (resolve)=>{
            setTimeout(()=>{
                resolve('Data retrieved')
            }, 1000)
        }
    )    
}

function processData(data: string): Promise<string> {
    return new Promise(
        (resolve) => {
            setTimeout(()=>{
                resolve(data + ' and processed')
            },2000)
        }
    )
}

function displayData(data: string) {
    console.log(data)
}
const d1 = new Promise((resolve , reject)=>{
    if (false) {
        resolve('Promise resolved');
    }
    else{
        reject('Promise rejected');
    }
});


d1.then((result) => {
    console.log(result);
}).catch((err) => { 
    console.log(err);
});
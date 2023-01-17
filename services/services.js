export async function perritos (){
    const res =await fetch("http://localhost:3000/api/hello")
    const perr=await res.json()

    return perr;
}

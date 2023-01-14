export async function perritos (){
    const res =await fetch("http://localhost:3000/api/hello")
    const perr=await res.json()

    return perr;
}

export async function nuevosperritos (){
    const resperr =await perritos()
    const nuevos = resperr.slice(0 ,3)
    return nuevos;
}
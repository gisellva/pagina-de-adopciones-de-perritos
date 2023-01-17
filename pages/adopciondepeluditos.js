

export async function getServerSideProps() {
const url="https://pagina-empresa-recreaciones.vercel.app/api/hello"
 const res=await fetch(url)
 const data =await res.json()
 console.log(data)
  return {
    props: {
      data,
    },
  };
}


export default function MiPagina({ data }) {
   console.log(data) 
  return(
    <div>
   
   <p >{data[2].nombre} </p>
    </div>
    
  );
}
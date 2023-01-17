

export async function getStaticProps() {
const url="http://localhost:3000/api/hello"
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
    
  return(
    <div>
   
     <div>
        {data.map(dat => <p key={dat.id}>{dat.nombre} </p>)}
     </div>
    </div>
    
  );
}
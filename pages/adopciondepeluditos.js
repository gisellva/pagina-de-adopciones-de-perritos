

export async function getServerSideProps() {
const url="https://rickandmortyapi.com/api/character/1,2"
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
   console.log(data[0].name) 
  return(
    <div>
   
     <div>
        {data.map(dat => <p key={dat.id}>{data[0].name} </p>)}
     </div>
    </div>
    
  );
}
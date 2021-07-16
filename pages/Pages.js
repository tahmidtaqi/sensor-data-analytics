function Pages({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  Pages.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    //console.log(ctx,res,json);
    return { stars: json.stargazers_count }

  }
  
  export default Pages
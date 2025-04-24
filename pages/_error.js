import NotFound from "./404";
import ServerError from "./500";

function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? <NotFound/>
          : <ServerError/>}
      </p>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    console.log("Res -------->", res);
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error
import React, {useContext} from 'react'
import { MyContext, ThemeContext } from '../Contexts'

function Comp3() {
  const name = useContext(MyContext);
  const theme = useContext(ThemeContext);
  return(
    <>
   <h2>hi {name}</h2>
   <p>I will give you {theme} mode</p>
   </>
  );
}

export default Comp3;
AIzaSyCqjr4TmL9bhjc3nfqV1qexZKG1CJKuwM4
UCE_M8A5yxnLfW0KZeXko6Nw
https://www.googleapis.com/youtube/v3/search?key=AIzaSyCqjr4TmL9bhjc3nfqV1qexZKG1CJKuwM4&channelId=UCE_M8A5yxnLfW0KZeXko6Nw&part=snippet,id&order=date&maxResults=5

https://www.googleapis.com/youtube/v3/search?key=AIzaSyCqjr4TmL9bhjc3nfqV1qexZKG1CJKuwM4&channelId=UCE_M8A5yxnLfW0KZeXko6Nw&part=snippet,id&order=date&maxResults=5

{
  "kind": "youtube#searchListResponse",
  "etag": "_EvoL7DLByX-PO5nb52Hus_nMMk",
  "regionCode": "ET",
  "pageInfo": {
    "totalResults": 0,
    "resultsPerPage": 0
  },
  "items": []
}
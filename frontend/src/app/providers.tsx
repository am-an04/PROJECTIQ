import {

QueryClient,

QueryClientProvider,

} from "@tanstack/react-query";

const client=new QueryClient();

interface Props{

children:React.ReactNode;

}

export default function Providers({

children,

}:Props){

return(

<QueryClientProvider client={client}>

{children}

</QueryClientProvider>

);

}
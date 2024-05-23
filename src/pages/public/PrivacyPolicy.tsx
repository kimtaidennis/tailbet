import { useQuery, gql } from "@apollo/client";

 
const query = gql`
    {
        ContentNode( id: "privacy") {
            content
            name
        }
    }
`;

const PrivacyPolicy =  () => {
    const { loading, error, data } = useQuery(query);
   
    return (
        <div className="p-3 md:p-5 lg:px-10 lg:w-5/6 lg:mx-auto">
            { loading ? (
                <div className="bg-dark-op border border-dark-border px-2 py-3">Storyblok Loading...</div>
            ) : error || data == null ? (
                <div className=" bg-red-200 text-dark-bg px-2 py-3">{error?.message}</div>
            ) : (
                
                    <div className="">
                        {
                            data?.ContentNode?.content.description.content.map( (el:any,index: number) => {
                                if(el.type === 'heading') {
                                    return index === 0 ? <h3 key={index} className=" text-2xl mb-5 text-yellow"> { el.content[0].text}</h3> : <h4 key={index} className="mb-2 text-slate-300"> { el.content[0].text}</h4>
                                } else if(el.content) {
                                    return <p key={index} className="font-light mb-2 text-justify">{ el.content[0].text}</p>
                                }
                                return '';
                            })
                        }
                    </div>
                
            )}
       </div>
    )
}

export default PrivacyPolicy
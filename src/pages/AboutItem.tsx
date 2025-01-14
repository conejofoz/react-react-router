import { useParam, useParams } from 'react-router-dom';

export const AboutItem = ()=>{
    const params = useParams();

    return (
        <div>
            Página sobre de: {params.slug}
        </div>
    )
}
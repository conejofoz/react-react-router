import { useParams, useNavigate } from 'react-router-dom';

export const AboutItem = ()=>{
    const params = useParams();
    const navigate = useNavigate()

    const handleBackButton = ()=>{
        navigate(-1); //volta uma página do histórico
    }

    const handleHomeButton = ()=>{
        navigate('/')
    }

    return (
        <div>
            Página sobre de: {params.slug}
            <hr />
            <button onClick={handleBackButton} className='mt-4'>Voltar</button>
            <button onClick={handleHomeButton} className='mt-4'>Home</button>
        </div>
    )
}
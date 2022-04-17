const Display = ({status}) => {

    const positiveResponse = 
    <h1>Login feito com sucesso!</h1>

    const negativeResponse = 
    <h1>Algo deu errado! Verifique novamente seus dados</h1>

    return(
        <div>
            {status === true ? positiveResponse : negativeResponse}
        </div>
    )
}
export default Display
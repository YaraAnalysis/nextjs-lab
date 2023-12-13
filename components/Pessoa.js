export default function Pessoa({ nome, idade}) {
    return (
        <div className="pessoa">
            <br/>
            <b>Nome</b>: {nome}
            <br/>
            <b>Idade</b>: {idade}
            <br/>

            {idade >= 18 ? (
                <spam>Maior de idade</spam>
            ) : (
                <spam>Menor de idade</spam>
            )
            }

            <br/>
            <br/>
        </div>
    );
}
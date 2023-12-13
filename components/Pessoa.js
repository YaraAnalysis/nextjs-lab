export default function Pessoa({ nome, idade}) {
    return (
        <div className="pessoa">
            <br/>
            <b>Nome</b>: {nome}
            <br/>
            <b>Idade</b>: {idade}
            <br/>
        </div>
    );
}
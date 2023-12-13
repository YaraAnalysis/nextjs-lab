export default function Pessoa(props) {
    return (
        <div className="pessoa">
            <br/>
            <b>Nome</b>: {props.nome}
            <br/>
            <b>Idade</b>: {props.idade}
            <br/>
        </div>
    );
}
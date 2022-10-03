const Agregar = ({ submit}) => {
    return (
        <section className="agregar-colaborador">
            <form onSubmit={(e)=> submit(e)}>
                <h3> Agregar colaborador</h3>
                <input type="text" placeholder="Nombre del Colaborador"></input>
                <input type="text" placeholder="Correo del Colaborador"></input>
                <button> Agregar Colaborador</button>
            </form>
        </section>
    )


}

export default Agregar
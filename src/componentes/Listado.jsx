const Listado = ({ listado }) => {
    return (
        <ol>
            {
                listado.map((colaborador) => {
                    return (
                        <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>
                    )

                })
            }
        </ol>

    )
}


export default Listado
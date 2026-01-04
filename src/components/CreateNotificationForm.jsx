import { useState } from "react";

function CreateNotificationForm ({guardarNotificacion}){
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    function limpiarForm(){
        setTitulo("")
        setDescripcion("")
    }

    return(
            <div className="bg-white rounded-xl border border-border-color p-6 sm:p-8 shadow-sm">
        <form className="space-y-6">

        <div className="space-y-4">
            <div className="grid gap-1">
            <label for="title" className="text-sm font-bold text-text-main ml-2">
                Título
            </label>
            <input
                onChange={(e)=> setTitulo(e.target.value)}
                value={titulo}
                id="title"
                type="text"
                placeholder="Tu titulo aqui"
                className="w-full rounded-full border border-border-color bg-background-light px-5 py-3 text-sm focus:border-primary focus:ring-primary transition-shadow"
            />
            </div>

            <div className="grid gap-1">
            <label for="description" className="text-sm font-bold text-text-main ml-2">
                Descripción
            </label>
            <textarea
                onChange={(e)=> setDescripcion(e.target.value)}
                value={descripcion}
                id="description"
                rows="4"
                placeholder="Tu descripción aqui"
                className="w-full rounded-2xl border border-border-color bg-background-light px-5 py-3 text-sm focus:border-primary focus:ring-primary resize-none transition-shadow"
            ></textarea>
            </div>

            <div className="flex items-center gap-2 pt-2 ml-2">
            <input
                id="urgent"
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label for="urgent" className="text-sm font-medium text-text-sub">
                Acepto terminos y condiciones
            </label>
            </div>
        </div>

        <div className="flex justify-end pt-2">
            <button
            type="button"
            onClick={()=>guardarNotificacion({     
                title : titulo,
                description : descripcion,
                read : false}, limpiarForm)
            }
            className="px-8 py-3 bg-primary text-black font-bold rounded-full shadow-lg shadow-primary/20 hover:bg-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
            Enviar notificacion
            </button>
        </div>

        </form>
    </div>
    )
}

export default CreateNotificationForm;
//alertas
const alertas = {

    
    success: () => {
        Swal.fire({
            icon: 'success',
            title: 'Deportista agregado correctamente',
            showConfirmButton: false,
            timer: 2000
            });
    },

        
    error: () => {
        const err = {
            icon: 'error',
            title: 'Valor incorrecto',
            text: 'Responda por "si" o por "no"'
        }

        Swal.fire(
            err
        );
        
    },

    success2 : () => {
        Swal.fire({
            icon: 'success',
            title: 'Formulario completado!',
            timer: 1500,
        })
    },

};

export {alertas};


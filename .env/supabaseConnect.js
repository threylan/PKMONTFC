import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const supabase = createClient(
    "https://ghejsktojybcfwwoikyn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZWpza3RvanliY2Z3d29pa3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTk4NzYsImV4cCI6MjA4NTE5NTg3Nn0.3X14dQqX2z8k6uPa6ZkftkSAM_bbNOFsd0kKZIrcgT4"
);

async function cargarDatos(){
    try{

        const{data, error} = await window.supabaseClient.from('producto').select('*');

        console.log("DATA:", data);
        console.log("ERROR:", error);

        const lista = document.getElementById('lista');
        lista.innerHTML = '';

        if(error){
            lista.innerHTML = `<li>Error al cargar los datos: ${error.message}</li>`;
        }

        if(!data || data.length === 0){
            lista.innerHTML = '<li>No hay datos disponibles.</li>';
            return;
        }

        data.array.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `ID: ${item.id}, Nombre: ${item.nombre}, Precio: ${item.precio}`;
            lista.appendChild(li);
        });

    }catch(error){
        console.error('Error al cargar datos:', error);
        const lista = document.getElementById('lista');
        lista.innerHTML = `<li>Error al cargar los datos: ${error.message}</li>`;
    }
}

export {cargarDatos};
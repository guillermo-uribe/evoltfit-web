import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, Fragment } from "react";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import CardEjercicio from "/components/CardEjercicio";
import SeleccionarEjercicio from "/components/SeleccionarEjercicio";
import supabase from "../config/supabaseClient";

export default function DetalleEjercicio() {
  const router = useRouter();
  let ejercicioIndex = router.query.ejercicio;

  const [sesion, setSesion] = useState(null);
  const [ejercicio, setEjercicio] = useState(null);
  const [rutinas, setRutinas] = useState(null);
  const [formInput, setFormInput] = useState({});

  useEffect(() => {
    handleSesion()
    getEjercicio()
  }, []);

  const handleSesion = async () => {

    if (!ejercicioIndex) {
      router.push('/biblioteca')
    }

    const { data, error } = await supabase.auth.getSession()

    if(data.session){
      setSesion(data.session);
      getRutinas(data.session)
      console.log(data.session);
    } 
    else {
      setSesion(null);
      //console.log("No hay Sesión " + error);
    }
  }

  async function getEjercicio() {
    const { data, error } = await supabase
    .from('ejercicios')
    .select('*')
    .eq('id', ejercicioIndex)

    if (error) {
      console.log('ERROR: No se encontró el ejercicio.')
      console.log(error)
      router.push('/biblioteca')
    }
    else{
      setEjercicio(data[0]);
      //console.log(data[0])
    }
  }

  async function getRutinas(session) {
    const { data, error } = await supabase
    .from('rutinas')
    .select('*')
    .eq('usuario', session.user.id)

    if (error) {
      console.log('ERROR: Hubo un error al recuperar la rutina.')
      console.log(error)
    }
    else{
      //console.log(data);
      setRutinas(data);
    }
  }

  async function nuevaRutina() {
    let query = supabase
    .from('rutinas')
    .select('nombre', { count: 'exact', head: true })
    .eq('usuario', sesion.user.id)

    const count = await query
    //console.log(count);

    const { data, error } = await supabase
      .from('rutinas')
      .insert({
        usuario: sesion.user.id, 
        nombre: "Nueva rutina " + (count.count + 1)
        })
      .select()

    if (error) {
      console.log(error)
      console.log("ERROR: Hubo un error al crear una nueva rutina.")
    }
    else{
      //console.log(data);
      //console.log("Se creó una nueva rutina.")
      agregarEjercicio(data[0].id)
      router.push({
        pathname: '/editarRutina',
        query: { rutina: data[0].id }
      })
    }
  }

  async function agregarEjercicio(idRutina) {
    const { data, error } = await supabase
      .from('rutinas_ejercicio')
      .insert({
        rutina: idRutina, 
        ejercicio: ejercicio.id
      })

    if (error) {
      console.log(error)
      console.log("ERROR: Hubo un error al agregar un nuevo ejercicio.")
    }
    else{
      //console.log("Se agregó un nuevo ejercicio.")
    }
  }

  const handleOnInputChange = useCallback(
    (event) => {
      const { value, name, id, checked } = event.target;

      setFormInput({
        ...formInput,
        [name]: value,
      });

      if(name == 'agregarRutina'){
        if (value == 'Nueva Rutina') {
          if (sesion === null) {
            router.push('/login')
          }
          else{
            nuevaRutina()
          }
        }
        else{
          agregarEjercicio(value)
          router.push({
            pathname: '/editarRutina',
            query: { rutina: value }
          })
        }
      }

      console.log(name + " | " + id + ": " + value + " -> " + checked);
      //console.log(formInput.equipo)
    },
    [formInput, setFormInput, sesion, ejercicio]
  );

  return (
    <div className="bg-stone-100 w-full z-0" data-theme="emerald">
      <Head>
        <title>EvoltFit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <div>          
          {
            ejercicio ? 
              <div className="mx-auto mt-2">
                <div className="flex flex-col w-9/12 mx-auto">
                  <div>
                    <button className="btn btn-ghost m-0 px-2 text-lg" onClick={() => {router.push('/biblioteca')}}>
                      <div className='text-3xl mt-auto'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                      </div>
                      <span className="ml-2">{"Volver a Biblioteca"}</span>
                    </button>
                    <br/>
                    {/* EJERCICIO */}
                    <div className="my-6">
                      <h2 className="text-2xl font-medium">{ejercicio.nombre}</h2>
                      <p className="text-xl font-light">{ejercicio.musculo_primario}</p>
                      <img src={ejercicio.img} alt={ejercicio.nombre} />
                      
                      {/* AGREGAR A RUTINA */}
                      <div className="form-control mt-4 mb-4">
                        <select name="agregarRutina" id="agregarRutina" onChange={handleOnInputChange} className="select select-secondary lg:text-xl lg:py-4 h-full border-0 font-normal rounded-xl shadow-md" defaultValue='agregar'>
                          <option id="agregar" value="agregar" hidden>Agregar a Rutina</option>
                          { rutinas ? 
                              (rutinas.length !== 0 ? 
                                rutinas.map((rutina) => (
                                  <option key={rutina.id} id={rutina.id} value={rutina.id}>{rutina.nombre}</option>
                              ))
                              :
                                ''
                              )
                              :
                                ''
                          }
                          <option id="Nueva Rutina" value="Nueva Rutina">Crear Nueva Rutina</option>
                        </select>
                      </div>

                      <h3 className="mt-6 text-lg font-medium">Recomendaciones</h3>
                      <p className="my-2 text-lg">{ejercicio.recomendaciones}</p>
                      <h3 className="mt-6 text-lg font-medium">Errores comunes</h3>
                      <p className="my-2 text-lg">{ejercicio.errores}</p>
                      <div className="flex flex-row w-full items-center justify-center">
                        <div className="w-fit mx-auto">
                          <h3 className="mt-6 text-md">Otros musculos activados</h3>
                          <p className="my-2 text-md font-light">{ejercicio.musculo_otros.join(", ")}</p>
                        </div>
                        <div className="w-fit mx-auto">
                          <h3 className="mt-6 text-md">Equipo</h3>
                          <p className="my-2 text-md font-light">{ejercicio.equipo.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full">
                  {/* Aqui se muestran las rutinas */}
                </div>
              </div>
            : 
            <div className="mt-12">
              <div className="loader mt-6"></div>
            </div>
          }
        </div>
        <br />
      </main>

      <br />

      <Footer></Footer>
    </div>
  );
}
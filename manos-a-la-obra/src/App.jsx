import basuraLogo from './assets/basuraLogo.png'
import Style from './styles.css'

function App() {

  return (
    <>
      <div className='ToDoList'>
        <main>
          <section>
            <h1>Lista de Tareas de Tomás</h1>
            <div className='ToDoInput'>
              <label className='InputContainer'><input type="text" className='TareaInput' placeholder="Nombre de la tarea" required/><button className='TareaSubmit' type="submit">ADD</button></label>
            </div>
          </section>
          <hr className="bottom-line"></hr>
          <section>
            <div className='ListTask'>
              <ul>
                <div className='ContainerTask'>
                  <li>
                    <input type='checkbox' name='TareaHecha' value="1"/><label className='TareaTachada'>Tarea N</label><button className='BotonBorrar'><img className='TachoImg' src={basuraLogo} alt="Eliminar" /></button>
                  </li>
                </div>
                <div className='ContainerTask'>
                  <li>
                    <input type='checkbox' name='TareaHecha' value="1"/><label className='TareaTachada'>Tarea N + 1</label><button className='BotonBorrar'><img className='TachoImg' src={basuraLogo} alt="Eliminar" /></button>
                  </li>
                </div>
                <div className='ContainerTask'>
                  <li>
                    <input type='checkbox' name='TareaHecha' value="1"/><label className='TareaTachada'>Tarea N + 2</label><button className='BotonBorrar'><img className='TachoImg' src={basuraLogo} alt="Eliminar" /></button>
                  </li>
                </div>
                <div className='ContainerTask'>
                  <li>
                    <input type='checkbox' name='TareaHecha' value="1"/><label className='TareaTachada'>Tarea N + 3</label><button className='BotonBorrar'><img className='TachoImg' src={basuraLogo} alt="Eliminar" /></button>
                  </li>
                </div>
                <div className='ContainerTask'>
                  <li>
                    <input type='checkbox' name='TareaHecha' value="1"/><label className='TareaTachada'>Tarea N + 4</label><button className='BotonBorrar'><img className='TachoImg' src={basuraLogo} alt="Eliminar" /></button>
                  </li>
                </div>
                <div className='ContainerTask'>
                  <li>
                    <input type='checkbox' name='TareaHecha' value="1"/><label className='TareaTachada'>Tarea N + 5</label><button className='BotonBorrar'><img className='TachoImg' src={basuraLogo} alt="Eliminar" /></button>
                  </li>
                </div>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App

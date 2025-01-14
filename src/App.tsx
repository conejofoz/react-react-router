import { MainRoutes } from "./routes/MainRoutes";




const App = ()=>{
  return (
    <div>
      <header>
        <h1>Título do site</h1>
      </header>
      <hr />
      <div className="py-4">
        <MainRoutes />
      </div>
      <hr />
      <footer>
        Rodapé bla bla bla
      </footer>
    </div>
  )
}


export default App;
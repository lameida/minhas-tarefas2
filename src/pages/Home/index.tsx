import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barralateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefa'

const Home = () => (
  <>
    <Barralateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home

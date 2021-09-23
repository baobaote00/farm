import Fields from './Fields'
import ThanhCongCu from './ThanhCongCu'

const Home = ({ children }) => {

    let background = "https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/bg.png?alt=media&token=82686c14-7d32-4d17-8192-9d4e569371cf"
    return (
        <div className="App">
            <img src={background} className="img-fluid" alt="logo" />
            <ThanhCongCu />
            <Fields />
        </div>
    )
}

export default Home

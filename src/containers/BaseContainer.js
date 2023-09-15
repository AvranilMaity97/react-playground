import Header from '../components/Header/Header';
import './BaseContainer.css'
import TransactionsContainer from './TransactionsContainer';

const BaseContainer = () =>{
    return (
        <div className="base-container">
            <Header />
            <TransactionsContainer />
        </div>
    );
}

export default BaseContainer;
import { PortfolioList } from '../data/dataPortfolio';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';

const Portofolio = () => {
    return (
        <section id="portfolio">
            <div className="wrapper">
                <h3>Portfolio</h3>
                <div className="grid">
                    {
                        PortfolioList.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <Link to={`/portfolio/${item.id}`}><img src={item.image} alt={`Portfolio ${item.id}`} /></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portofolio;

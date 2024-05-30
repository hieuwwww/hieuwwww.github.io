import './nexpage.css'
import { Link } from 'react-router-dom';
export default function NextPage() {
    return (
        <div className="container_back_next">



            <Link><i class="fa-solid fa-chevron-right fa-flip-horizontal"></i></Link>

            <Link> <i class="fa-solid fa-chevron-right"></i></Link>


        </div>
    );
}
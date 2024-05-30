import NavBarOfficial from '../OfficialHome/NavBar';
import csss from './math1.module.css'
import VIDEO from './videomath';


export default function Math1() {
    const bground1 = {
        backgroundImage: 'url("/pics/nentoanlop1.jpg")',
        marginLeft: '25%',
        marginTop: '15%'
        // backgroundImage: 'url("/pics/nentoanlop1.jpg")'
    }
    return (
        <div style={{ marginLeft: '25%', marginTop: '8%', }}>
            <h2 style={{ backgroundImage: 'url("/pics/nentoanlop1.jpg")', height: '300px', width: '86%', backgroundSize: 'cover' }}></h2>
            <h2 style={{ marginTop: '80px' }}>TOÁN LỚP 1</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingBottom: '200px' }}>
                <VIDEO />
                <VIDEO />
                <VIDEO />
                <VIDEO />
                <VIDEO />
                <VIDEO />
                <VIDEO />
                <VIDEO />
            </div>
        </div >
    );
}
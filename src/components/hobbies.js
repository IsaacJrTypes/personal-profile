import emptyBlock from '../img/emptyBlock.png';

const styling = { backgroundImage: `url(${emptyBlock})`, backgroundSize: 'cover' };

function Hobbies() {
    return (
        <div className=" mx-auto w-1/3 text-center py-4" style={styling}>
            <h2 className='text-2xl backdrop-blur-sm'>Hobbies and Interests</h2>
            <ul>
                <li>Mushroom Hunting</li>
                <li>Swimming</li>
                <li>Coin Collector</li>
                <li>Competitive Sports Enthusiast</li>
                <li>Party Animal</li>
                <li>Oh, and Plumbing</li>
            </ul>
        </div>
    );
}
export default Hobbies;
import emptyBlock from '../img/emptyBlock.png';

export function Hobbies() {
    return (
        <div class=" mx-auto w-1/3 text-center py-4" style={{ backgroundImage: `url(${emptyBlock})`, backgroundSize: 'cover' }}>
            <h2 class='text-2xl backdrop-blur-sm'>Hobbies and Interests</h2>
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
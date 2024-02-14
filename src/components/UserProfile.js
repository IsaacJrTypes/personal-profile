import profile_pic from '../img/mario_profile.jpeg';
import qBlock from '../img/qBlock.jpeg';

const img = <img src={profile_pic} className="mx-auto mb-2 w-64 rounded-full border-solid border-3 border-green-700" alt='Mario Head shot'></img>;
const blurb = <p className='text-center'>"I'm-a plumber who's not only about fixing pipes but also saving Princess Peach and the Mushroom Kingdom from Bowser. My brother Luigi, we go on many adventures, jumping through worlds, collecting coins, and kart racing! <br /> Let's-a go!</p>;
const styling = { backgroundImage: `url(${qBlock})`, backgroundSize: 'cover', backgroundPosition: 'center' };

function UserProfile(props) {
    return (
        <div className="w-1/3  mx-auto" >
            {img}
            <div className='border-solid border-4 border-black py-4 rounded-sm text-balance mx-auto' style={styling}>
                <div className='backdrop-blur-sm'>
                    <h1 className='text-center text-2xl'> It's a me, {props.name}!!</h1>;
                    {blurb}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
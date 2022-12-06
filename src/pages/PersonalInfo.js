import image from './kenil.jpg';

const PersonalInfo = () => {
    return(
        <><div class="heading"><h1>Kenil Maniya</h1>
        </div>
        <div id="imse"><img  src={image} alt="new" /></div>
        <div>
            <p>
				<ul>
				<li><b>NAME</b> : KENIL MANIYA</li>
				<li><b>PHONE</b> : +1 437-421-9884</li>
				<li><b>ADDRESS</b> : 1095 Partington Avenue, Windsor, ON, N9B 2P1</li>
				<li><b>E-MAIL</b> : maniya.kenil@gmail.com</li>
                <li><b>GITHUB</b> : @maniyakenil</li>
                <li><b>LINKEDIN</b> : @kenilmaniya</li>
				</ul>
			</p> 
        </div>
        <div>

        </div></>
        
        
    );
}

export default PersonalInfo;
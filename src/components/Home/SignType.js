import React from "react";
import Typewriter from "typewriter-effect";

const SignType = () => {
	return (
		<Typewriter
			options={{
				strings: ["Software Developer", "Youtuber", "Gamer"],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default SignType;

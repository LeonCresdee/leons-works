<h1>Realitynaut</h1>

<h2 id="tldr">TLDR</h2>

<p>
	A helmet that turns its wearer into a human probe for AI. They must respond to instructions and
	questions asked by a chat AI. With the end goal being that either the AI is able to gain some sort
	of significant information about the real world, or the AI is able to guide the user to a goal.
	The idea being that it highlights a major restriction in chat AIs - their access to the real
	world. As well as send it’s wearer on a what will hopefully be a surreal albeit very local
	adventure.
</p>

<h2 id="overview">Intro</h2>

<p>
	For the past year or so AI has been the hottest show in town. It’s dominated the news, social
	media, and nearly every corner of the digital world. Many platforms have been quick to adopt AI
	functionalities; typically in the form of text generating chat bots built upon large language
	models (LLMs). This is the type of AI this project will be based on.
</p>

<p>
	Often these AI’s are presented to users in the form of “Ask me anything…”, “How can I help you
	today?” or “Ask AI”. This conversational tone defines the intent of what these AI’s are here to
	do… assist. All of the major chat AI’s are presented and interacted with through this rhythm of
	call and response. Like a boring date, we’re encouraged to probe the AI with questions that it’ll
	attempt to answer or at the very least respond to.
</p>

<div class="flex-images"></div>

<p>
	What if we were to flip this idea and have the AI ask us for information, or give us instructions
	to follow. We’d be acting like a human vessel for the AI; feeding back information of reality. A
	bit like the text adventure games of yesteryear. But rather than the computer telling us what’s
	going on and what we can do, and us deciding on an action. Instead we would be informing the
	computer on the surroundings and the computer would decide what the user does. Transforming the
	user into an explorer of their own reality - a “Realitynaut”
</p>

<h2>Project</h2>

<p>
	I plan to bring this experience to life by building a helmet that will contain a heads up display
	(HUD), a microphone, Raspberry Pi, and of course the noggin of our brave “realitynaut”.
</p>

<p>
	The microphone will be connected to the Raspberry Pi which will be using speech to text to convert
	the wearers spoken words into text that can be sent to our chat AI or “overseer” as I’d like to
	refer to them in this project. The questions/instructions in the overseers response will then be
	displayed on the wearers HUD ideally placed just in front of their face in a way that is
	comfortable to read but still enclosed within the helmet.
</p>

<p>
	With this created we’ll have an interface for our user to communicate with a chat AI. Next is to
	use prompt engineering to setup the AI. We need to make sure it only asks questions or gives
	instructions. The responses will also need to be short and concise. Not just to keep the exchanges
	between user and AI simple but also for user experience as the HUD will likely have a limited
	resolution.
</p>

<p>
	It’ll be important to give the AI a goal. Otherwise the exchanges may drift endlessly, unable to
	create a meaningful experience. This goal may be that it wants to learn something about the real
	world. Specifically the surrounding world of the user. Like the board game Articulate it may be
	necessary for the AI to be restricted on asking for the information directly from the user and
	must instead guide the user to the answer. Otherwise any interaction with the surrounding world
	could be circumvented.
</p>

<p>
	For the HUD there are some off-the-shelf solutions like the modules build with OL23C
	<a href="https://www.tindie.com/products/hicenda/023-micro-amoled-display-ar-display-3000cdm2/"
		>example</a
	>. But these come at a premium that doesn’t fit into the budget of this project. Alternatively a
	simple approach may be to just use a transparent OLED display. However testing would need to be
	done on how usable they are close to the users face. Lastly there is an approach that uses a
	mirror and Fresnel lens to project a screen on to transparent acrylic
	<a href="https://github.com/perseus784/June_Glasses">example</a>.
</p>

<h2 id="meaning">Meaning</h2>

<p>
	I hope by wearing the helmet and going on a handful of short adventures as a “realitynaut”, users
	will gain some perspective on the limitations of AI. Hopefully they develop a better understanding
	of chat AI’s capabilities before developing any sort of reliance upon it. I also hope they reflect
	on their access and relationship with the immediate world around them. On how they’ll always be
	the best source of information on their own life experiences.
</p>

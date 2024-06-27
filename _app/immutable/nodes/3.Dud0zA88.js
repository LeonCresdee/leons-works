import{s as at,n as S}from"../chunks/scheduler.CtbWrGNo.js";import{S as ot,i as st,e as a,s,c as o,g as l,a as r,b as lt,d as e,f as F,h as i}from"../chunks/index.BRgGXQ2d.js";function rt(it){let h,B="Realitynaut",_,u,E="TLDR",k,f,N=`A helmet that turns its wearer into a human probe for AI. They must respond to instructions and
	questions asked by a chat AI. With the end goal being that either the AI is able to gain some sort
	of significant information about the real world, or the AI is able to guide the user to a goal.
	The idea being that it highlights a major restriction in chat AIs - their access to the real
	world. As well as send it’s wearer on a what will hopefully be a surreal albeit very local
	adventure.`,j,d,G="Intro",H,c,J=`For the past year or so AI has been the hottest show in town. It’s dominated the news, social
	media, and nearly every corner of the digital world. Many platforms have been quick to adopt AI
	functionalities; typically in the form of text generating chat bots built upon large language
	models (LLMs). This is the type of AI this project will be based on.`,P,m,V=`Often these AI’s are presented to users in the form of “Ask me anything…”, “How can I help you
	today?” or “Ask AI”. This conversational tone defines the intent of what these AI’s are here to
	do… assist. All of the major chat AI’s are presented and interacted with through this rhythm of
	call and response. Like a boring date, we’re encouraged to probe the AI with questions that it’ll
	attempt to answer or at the very least respond to.`,T,A,L,w,K=`What if we were to flip this idea and have the AI ask us for information, or give us instructions
	to follow. We’d be acting like a human vessel for the AI; feeding back information of reality. A
	bit like the text adventure games of yesteryear. But rather than the computer telling us what’s
	going on and what we can do, and us deciding on an action. Instead we would be informing the
	computer on the surroundings and the computer would decide what the user does. Transforming the
	user into an explorer of their own reality - a “Realitynaut”`,q,v,Q="Project",D,b,X=`I plan to bring this experience to life by building a helmet that will contain a heads up display
	(HUD), a microphone, Raspberry Pi, and of course the noggin of our brave “realitynaut”.`,O,x,Y=`The microphone will be connected to the Raspberry Pi which will be using speech to text to convert
	the wearers spoken words into text that can be sent to our chat AI or “overseer” as I’d like to
	refer to them in this project. The questions/instructions in the overseers response will then be
	displayed on the wearers HUD ideally placed just in front of their face in a way that is
	comfortable to read but still enclosed within the helmet.`,M,y,Z=`With this created we’ll have an interface for our user to communicate with a chat AI. Next is to
	use prompt engineering to setup the AI. We need to make sure it only asks questions or gives
	instructions. The responses will also need to be short and concise. Not just to keep the exchanges
	between user and AI simple but also for user experience as the HUD will likely have a limited
	resolution.`,R,C,$=`It’ll be important to give the AI a goal. Otherwise the exchanges may drift endlessly, unable to
	create a meaningful experience. This goal may be that it wants to learn something about the real
	world. Specifically the surrounding world of the user. Like the board game Articulate it may be
	necessary for the AI to be restricted on asking for the information directly from the user and
	must instead guide the user to the answer. Otherwise any interaction with the surrounding world
	could be circumvented.`,W,g,tt=`For the HUD there are some off-the-shelf solutions like the modules build with OL23C
	<a href="https://www.tindie.com/products/hicenda/023-micro-amoled-display-ar-display-3000cdm2/">example</a>. But these come at a premium that doesn’t fit into the budget of this project. Alternatively a
	simple approach may be to just use a transparent OLED display. However testing would need to be
	done on how usable they are close to the users face. Lastly there is an approach that uses a
	mirror and Fresnel lens to project a screen on to transparent acrylic
	<a href="https://github.com/perseus784/June_Glasses">example</a>.`,z,p,et="Meaning",U,I,nt=`I hope by wearing the helmet and going on a handful of short adventures as a “realitynaut”, users
	will gain some perspective on the limitations of AI. Hopefully they develop a better understanding
	of chat AI’s capabilities before developing any sort of reliance upon it. I also hope they reflect
	on their access and relationship with the immediate world around them. On how they’ll always be
	the best source of information on their own life experiences.`;return{c(){h=a("h1"),h.textContent=B,_=s(),u=a("h2"),u.textContent=E,k=s(),f=a("p"),f.textContent=N,j=s(),d=a("h2"),d.textContent=G,H=s(),c=a("p"),c.textContent=J,P=s(),m=a("p"),m.textContent=V,T=s(),A=a("div"),L=s(),w=a("p"),w.textContent=K,q=s(),v=a("h2"),v.textContent=Q,D=s(),b=a("p"),b.textContent=X,O=s(),x=a("p"),x.textContent=Y,M=s(),y=a("p"),y.textContent=Z,R=s(),C=a("p"),C.textContent=$,W=s(),g=a("p"),g.innerHTML=tt,z=s(),p=a("h2"),p.textContent=et,U=s(),I=a("p"),I.textContent=nt,this.h()},l(t){h=o(t,"H1",{"data-svelte-h":!0}),l(h)!=="svelte-ewhrna"&&(h.textContent=B),_=r(t),u=o(t,"H2",{id:!0,"data-svelte-h":!0}),l(u)!=="svelte-116jj72"&&(u.textContent=E),k=r(t),f=o(t,"P",{"data-svelte-h":!0}),l(f)!=="svelte-182spmz"&&(f.textContent=N),j=r(t),d=o(t,"H2",{id:!0,"data-svelte-h":!0}),l(d)!=="svelte-1s563hj"&&(d.textContent=G),H=r(t),c=o(t,"P",{"data-svelte-h":!0}),l(c)!=="svelte-1alpmzj"&&(c.textContent=J),P=r(t),m=o(t,"P",{"data-svelte-h":!0}),l(m)!=="svelte-yg9d0d"&&(m.textContent=V),T=r(t),A=o(t,"DIV",{class:!0}),lt(A).forEach(e),L=r(t),w=o(t,"P",{"data-svelte-h":!0}),l(w)!=="svelte-7b4rcf"&&(w.textContent=K),q=r(t),v=o(t,"H2",{"data-svelte-h":!0}),l(v)!=="svelte-ed8li1"&&(v.textContent=Q),D=r(t),b=o(t,"P",{"data-svelte-h":!0}),l(b)!=="svelte-u2bvml"&&(b.textContent=X),O=r(t),x=o(t,"P",{"data-svelte-h":!0}),l(x)!=="svelte-1uzquo5"&&(x.textContent=Y),M=r(t),y=o(t,"P",{"data-svelte-h":!0}),l(y)!=="svelte-yeduf4"&&(y.textContent=Z),R=r(t),C=o(t,"P",{"data-svelte-h":!0}),l(C)!=="svelte-dnq4l5"&&(C.textContent=$),W=r(t),g=o(t,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1t0jb5c"&&(g.innerHTML=tt),z=r(t),p=o(t,"H2",{id:!0,"data-svelte-h":!0}),l(p)!=="svelte-ue40q8"&&(p.textContent=et),U=r(t),I=o(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-bkoffz"&&(I.textContent=nt),this.h()},h(){F(u,"id","tldr"),F(d,"id","overview"),F(A,"class","flex-images"),F(p,"id","meaning")},m(t,n){i(t,h,n),i(t,_,n),i(t,u,n),i(t,k,n),i(t,f,n),i(t,j,n),i(t,d,n),i(t,H,n),i(t,c,n),i(t,P,n),i(t,m,n),i(t,T,n),i(t,A,n),i(t,L,n),i(t,w,n),i(t,q,n),i(t,v,n),i(t,D,n),i(t,b,n),i(t,O,n),i(t,x,n),i(t,M,n),i(t,y,n),i(t,R,n),i(t,C,n),i(t,W,n),i(t,g,n),i(t,z,n),i(t,p,n),i(t,U,n),i(t,I,n)},p:S,i:S,o:S,d(t){t&&(e(h),e(_),e(u),e(k),e(f),e(j),e(d),e(H),e(c),e(P),e(m),e(T),e(A),e(L),e(w),e(q),e(v),e(D),e(b),e(O),e(x),e(M),e(y),e(R),e(C),e(W),e(g),e(z),e(p),e(U),e(I))}}}class dt extends ot{constructor(h){super(),st(this,h,null,rt,at,{})}}export{dt as component};

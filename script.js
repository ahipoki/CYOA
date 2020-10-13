var practice = prompt("Do you want to do the story or the assignment?");
if (practice == "assignment"){
  var playing = true;
  while (playing == true){//While loop to get through each option
    var choice1 = prompt("Do you want to go left or right?");//1st choice
    if (choice1 == "left"){//Left
      alert("You go left");//Goes left
      var choice2 = prompt("Do you want to go up or down?");//2nd choice
      if (choice2 == "up"){//Up
        alert("You go up");//Goes up
        playing = false;
      }
      else if (choice2 == "down"){//Down
        alert("You go down");//Goes down
        playing = false;
      }
      else{//Anything else
        alert("That was not a valid option");//Not a valid choice
      }
    }
    else if (choice1 == "right"){//Right
      alert("You go right");//Goes right
      choice3 = prompt("Do you want to go in or out?");//3rd choice
      if (choice3 == "in"){//In
        alert("You go in");//Goes in
        playing = false;
      }
      else if (choice3 == "out"){//Out
        alert("You go out");//Goes out
        playing = false;
      }
      else{//Anything else
        alert("That was not a valid option");//Not a valid option
      }
    }
    else{//Anything else
      alert("That was not a valid option");//Not a valid option
    }
  }
}
else if (practice == "story"){
  prologue();
  chapterOneOne();
  var thugs = prompt("Do you want to fight or run?");//ask if they want to fight or run from the thugs attempting to mug you
  if (thugs == "fight"){//If you choose fight, go down that route
    chapterOneFight();
  }
  else if (thugs == "run"){//If you choose run, go down that route
    chapterOneRun();
    chapterOneFight();
  }
}
else{
  alert("That was not a valid option");
}
function prologue(){//Prologue
  alert("—This is really bad. Feeling the bare hard ground against his face, you realized you had fallen, face flat onto the ground. All your strength left you, and you lost all sensation in your hands. All you felt throughout your body was heat.");
  alert("—Hot, hot, hot, hot, hot, hot");
  alert("Coughing violently, you vomitted blood like the spring of life raising from your throat, to the point where it flowed out of your mouth like water, and bubbles of blood arose from the edge of your lips. With your blurred vision, you could see the floor stained bright red.");
  alert("—Ahh. Is this all my blood?");
  alert("Mistakenly thinking that all the blood had spilled out of your body, you reached out with your quivering hand, searching for the source of the heat that was engulfing your body. And you realized your finger was caught by a gash in your abdomen.");
  alert("No wonder it felt so hot. It seemed that you had mistaken 'pain' for 'heat'. A deep gash had almost split your torso into two, with a piece of skin barely connecting them together.");
  alert("In short, it seemed you were faced with what was called a 'dire situation'. As soon as you realized it, your consciousness immediately faded. In front of your eyes was a black shoe stepping onto the slowly spreading carpet of blood, creating ripples. Someone's there. And that someone most likely killed you. But even so, you did not think of looking at his face. Something like that didn't matter. What you only wished for was for her to be safe.");
  alert("'......baru?''");
  alert("You thought you heard a voice sounding like a bell. You remembered. To hear that voice... to be able to hear that voice... it was your salvation. Which is why—");
  alert("'—...''");
  alert("A short cry, and the culprit was once again welcomed by a carpet of blood—the fallen body lay next to you. And there was your hand, stretched out loosely. The white hand that fell limply slightly entwined with your blood-smeared hand, and you thought you felt its faintly moving fingers squeeze back.");
  alert("'......for me'");
  alert("Holding onto your far flown consciousness, you grabbed it by the scruff of its neck and forcefully turned it around in an attempt to buy some time.");
  alert("'I... will definitely—'");
  alert("—save you");
  alert("In the next instant, you—Subaru—lost your life.");
}
function chapterOneOne(){//Chapter one up to first choice
  alert("This has seriously become a bad situation. As you arrived at the destination, penniless, your heart was being buried by those words. Although the word 'pennliess' wasn't quite accurate, as you had entire fortune in the wallet in his pocket to the point that you could probably still do a little shopping. But even so, it is a situation that can only be expressed by the word 'penniless'.");
  alert("'As I thought. Stuff like the value of currency is very different here.'");
  alert("In your hand was a ten-yen coin—you flipped the rare 'Ginza ten' with your fingers, while letting out a deep sigh.");
  alert("You were just an ordinary guy lacking character. You had short black hair, and a rather average height. Not too tall and not too short. You had a physique that would make anyone wonder if you had ever trained your body, and bore a striking resemblance to a cheap gray t-shirt. The only thing that left an impression was the sharp gaze of your small irises, but even now, that had completely lost its vigor as it drooped down without an ounce of ambition.");
  alert("You had a look so ordinary that anyone could lose you in the crowd—But despite that, those who saw you out of the corner of their eyes would most certainly look at you like a strange object. It's something that is to be expected. At any rate, of all the people staring at you, not a single one had black hair nor wore a tracksuit.");
  alert("Their hair came in many colors like red and gold,from colors like brown all the way to green and blue. Furthermore, they were dressed in stuff like armor, a dancer's clothing, a pitched black robe and the like.");
  alert("Under the restrained wave of stares, you folded your arms and had no choice but to accept it.");
  alert("'In other words, it's that,' you said while snapping your fingers, and pointing it to the people looking at you. '—a trans-world summon, or so it seems.'");
  alert("Rolling past in front of you came a carriage-like vehicle being pulled by a giant lizard-like creature.");
  alert("Natsuki Subaru was born on Earth, the third planet in the solar system, into an extremely normal middle-class family as a Japanese boy. If one were to talk about your roughly seventeen years of life in a simple fashion, a preamble would suffice, and any other elaboration would be along the lines of 'A third year public high school student that doesn't feel like going to school'.");
  alert("To enter a school or to find a job. When made to stand at the crossroads of life, people are forced to make a decision. Though if someone were to ask anyone, they would call it 'a part of life', you were a little better at running away from things you detested than other humans. In the end, the number of times you excused yourself from school slowly increased, and by the time you noticed, you became a son that kept skipping school and doing a splendid job of making your parents cry.");
  alert("And in the end, I was summoned from another world and am sure to be kicked out of high school..... I really don't get any of this.");
  alert("Though you felt like you were in a poorly-made dream, even if you were to pinch your cheeks or bang your head against the wall, you wouldn't wake up. You sighed. Moving away from the main street where you were bathed in stares of curiosity, you sat down on the paved surface of a back alley, slightly away from the street.");
  alert("'So assuming that this is a fantasy world, this civilization would be that of the medieval era. From what can be seen, there aren't any machines and the way the surface was paved is not bad... My money obviously can't be used here.");
  alert("Regarding the do's and don'ts of communcation with the people here and the recognition of the value of materials, you, who realized you had been summoned to another world, swiftly tried to confirm it. Luckily, you could understand the words without a hitch and was able to confirm that trade was done with the exchange of gold, silver, and copper as currency, though you were given a look of disgust at the fruit stall you had first come into contact with.");
  alert("It was in circumstances like these, where you had the ability to quickly grasp the situation that you deeply felt blessed to be a youth in the current generation addicted to anime and games. One would not be exaggerating to describe a phenomenon like trans-world summons as that of the dreams of an adolescant male.");
  alert("And most of all, when you looked at your overly crappy starting equipment and the situation you were put in, you let out a whine, 'An easygoing guy like me won't be able to accept it if I'm not given more company benefits you know!'");
  alert("A mobile phone (about to run out of battery), a wallet (with plenty of membership cards for video rentals), a cup noodle which he bought at the convenience store (tonkotsu soy sauce flavor), a similar snack (corn potage flavor), the gray tracksuit that he loved so much (yet to be washed), and a pair of worn out sneakers (two years old) were among the things he had.");
  alert("Why don't I have a single Excalibur on me? I'm so done. What should I do?");
  alert("The trans-world summon occurred when you were on your way home from the convenience store so it couldn't be helped. It was exactly in a blink of an eye. The only things that seemed useful, the snacks, were half eaten as you lost them to your empty stomach. Though you later realized it was an important source of food, there was no use crying over spilt milk.");
  alert("Even if you were to try to relieve the huge initial shock you had, the passing lizard carriage and the looks of passers-by walking across the street did not make it any better.");
  alert("'I wonder if it would be more typical to ignore and not interrupt everyone, including the lizard and the demi-human.'");
  alert("In front of you were people dressed in eccentric clothing with colorful hair. And most of all, the one that kept reminding you about the reality of trans-world summoning was the existence of demi-humans. As far as your rough scan of the area went, you discovered 'dog ears' and 'cat ears'. The more eccentric ones you could see were 'lizard-man' like. And if you thought about it, there were humans no different from you.");
  alert("Seeing as how there are many demi-humans in this world, there probably are numerous wars and dangers around. Though whether the animals I've seen are here or not is of a different matter, judging by the lizard pulling the carriage, I would say their roles haven't changed—or so it seems.'");
  alert("After putting that into order, you let out a long breath, different from a sigh. If this development was similar to that found in a fantasy, you should be able to use your current knowledge to thrive in this situation. —But you couldn't bring yourself to accept it.");
  alert("'The reason for the summon is unclear with no way to return. I don't remember going through a mirror nor falling into a pond, and in the first place if I'm a summon, where's the beautiful girl that summoned me?'");
  alert("A fantasy world is worthless without a main heroine. If it were a two-dimensional world, it would be sleeping on the job. The fact that you got summoned without a motive and left alone made you look disposable. You, who had finished ascertaining the situation and the reality of things, had no other choice than to quickly escape from reality.");
  alert("'Well, that being said, isn't it no different than being cooped up in my room back on my world?'");
  alert("Though he thought of his parents for a brief moment, there was no time for homesickness.");
  alert("But first, if I don't do anything about this situation, thought Subaru as he stood up and headed to the main street.");
  alert("'Oh, I'm sorry.'");
  alert("As you were about to come out of the alley, you passed by a human figure crossing through the alley at the same moment. Tossing words of apology to the person you almost knocked into, you tried to move out of the way.");
  alert("'—Wh-Whoa!'");
  alert("Grabbed forcefully from the back by your shoulder, your body was dragged across the street before being put back in place. You turned around with unstable legs, and there was the man who threw you on the ground. He had such a large build that you could only look up at him, and behind followed two of his companions, and they moved to a position as if to block the road. You had a bad feeling about their actions which you were all too familiar with.");
  alert("'Umm...May I please ask what sort of intentions you have?'");
  alert("'It seems you don't understand just where you stand. Well, if you bring out what you have, then it won't hurt.'");
  alert("'Ah—so that's how it is. Well, there's that. Ha ha, I'm really at a loss here.'");
  alert("Looks of mockery and disdain. The men were about twenty years old, and their vileness could be seen from their dirty bodies and faces. Thought they didn't look like demi-humans, they were certainly not good people. Relatively, under this development were the daily threats and the common encounters with hooligans. In other words, 'Shiiiiiiiiit, the compulsory route has begun.'");
  alert("While calculating your next move, you kept things going by smiling cordially at the men who had smug looks on their faces. Though you were in a pinch, a long time ago it was promised that humans who were invited to another world would exhibit superhuman abilities. If you were summoned under the same conditions as countless other trans-world trips, it was highly likely you were given some unique ability. As you thought about it, you felt your body becoming lighter.");
}
function chapterOneFight(){
  alert("'Somehow, the gravity here feels as if it is about a tenth that of my world. I can do this. I can really do this! I'll mow you down and make you the fertilizer for my path to greatness together with your experience points.'");
  alert("'Looks like that guy is muttering something.'");
  alert("'I'm not sure what that guy is saying, but I know he's making fun of us. Kill 'em!'");
  alert("'That's my line!...I'm gonna make you regret this!' you declared as you let out a straight right with all your might, aimed at the largely built man in front. A magnificent hit directly to the nose. However your fist, which hit the front teeth of your enemy, started bleeding. —The first time you punched someone! And you hurt yourself even more than you expected. Despite having put plenty of effort into simulations before, this was your first real fight.");
  alert("The man you punched fell onto the floor. Using your remaining momentum, you lunged towards the next man who was still shocked. Arching your foot, you lashed it across the side of the man's head, smashing him into the wall; thus your second victim fainted in pain. Having started off surprisingly well, your confidence in your concept of 'trans-world invincibility' started to grow.");
  alert("'As I thought, this world is set up such that I am the strongest!.................'");
  alert("Spinning around, you crouched in position, ready to beat the day lights out of the last man. But in the hands of the last man, you caught a glimps of the glimmer of a knife. Just like that, you slid across the floor knees first and beautifully folded your body, pressing your forehead against the floor.");
  alert("'I'm sorry! It was completely my fault! Please forgive me! Please have mercy on my soul!'");
  alert("Dogeza. This expresses the greatest degree of submission to the other party. The most degrading point in the spirit of the Japanese. The adrenaline you had felt up till now left you. You could feel your blood running cold. You, desperately trying to butter up to the man, curled up your body and apologized profusely.");
  alert("There was no way you were going to go up against a knife. No matter how well-trained someone is, it's over once they get stabbed. There are no worldly possesseions that will last forever. Just then, you realized the other two, who were supposed to be down, had stood back up. Though one was holding his bleeding nose while the other was shaking his head in a daze, together, they seemed unexpectedly fine.");
  alert("'Eh? My one-hit speacialty was only up to this extent? What's going on? What about the 'promise of the summoned'?'");
  alert("'What the hell are you talking about? How dare you do us in!'");
  alert("The 'promise of the summoned' was a complete mistake. You didn't actually become any stronger. Still in dogeza, your head was being stepped on, and your forehead was ground into the floor causing it to bleed. While having your head stepped on, your desperate and curled up body received continuous acts of violence. The one who started getting physical was you. And for that matter, the men did not show any mercy.");
  alert("—Shiiiiit. It hurts like hell. I might die. No, really.");
  alert("Unlike your world, there was no guarantee the gangsters would not take your life. All the more, before being tormented to death, you should make a last ditch attempt to counteratta—");
  alert("'Don't you move you idiot!'");
  alert("'It hurts! Ahhhhhhh, it hurts it hurts! I said it hurts!'");
  alert("The man stepped on your hand as you tried to stand up and switched his knife over to his other hand.");
  alert("'I'll make you unable to move and strip you of all your possessions! How dare you act like a fool...'");
  alert("'If your objective is about precious items, frankly speaking, it's useless. At any rate, I'm penniless...!'");
  alert("'If that's the case, any rare clothing or footwear will do. Just become the food for the mice in the back alley already.");
  alert("Oh, there are also mice in this world. It'd be nice if it's not big like a monster.");
  alert("You gazed at the knife, which was about to be plunged into you, like it was someone else's problem, trying to escape reality. You couldn't particularly see any revolving lanterns, nor was there the phenomenon where the world started to move very slowly. Perhaps it would end just like the snip of a string. —It was that time.");
  alert("'Get out of the way! Get out of the way! Get out of the way! You people there! You guys are really a hindrance!' said a desperate voice as someone came rushing into the back alley.");
  alert("Just like the men who looked up with startled looks on their faces, you, with a restrained body, too lifted your gaze. Going past you was a petite girl, her semi-long blond hair flowing behind her. She had red eyes that shone with determination and 'vampire teeth', giving her a mischievous air.");
  alert("Though the first impression of her was that of a cheeky girl, if she were to smile, she would have a face that would be adored by many. With such perfect timing, almost as if it was calculated, the flame of hope that was dying in your eyes reignited. You were waiting for this development. The young girl dressed in tatters has naturally come across a scene where an armed robbery is being committed.");
  alert("Just as things are supposed to be, the development where the girl has a chivalrous spirit and is about to save you, whose life is about to disappear is about to—");
  alert("'This looks like an awesome scene but sorry! I'm in a hurry! Please stay strong!'");
  alert("'—Wait. EHHHHHH! Seriously?!'");
  alert("However, such hopes were immediately crushed. The young girl raised her hand apologetically towards you as she ran through the narrow alley, straight past the men and towards what should have been a dead-end. Kicking off from a plank lying next to the wall, she swiftly grabbed hold of the lip of the wall and in a moment, disappeared over it.");
  alert("The girl could no longer be seen and the surroundings fell into a deep silence. The girl disappeared as fast as she appeared just like a typhoon,and everyone else at the scene who witnessed her coming and going was dumbfounded. But the fact that your situation hadn't changed was also the reality.");
  alert("'Has your rage died down and perhaps changed your minds?'");
  alert("'Rather, it has worsened. Don't think you can get away that easily.'");
  alert("Up till now, your body had been stepped on by the men and you couldn't move. From the glimmer of the knife held in the man's hand, the raw feeling of an imminent death grew stronger.");
  alert("—No, no. This has to be a lie. It can't be. For it to be this easy.");
  alert("You gave a tense smile, yearning desperately for someone to interfere with the situation. However, such a convenient development did not come. The point of the blade came towards you. The feeling of giving up welled up in your chest, and you knew you were going to cry. It wasn't fear. It was just that you couldn't stand the fact that you was going to die without accomplishing anything. Just like being forsaken by everything, in a pit of overwhelming despair.");
  alert("'—Stop right there, you villains.'");
  alert("That voice overpowered the sound of the bustling crowd, the crude vulgarities of the men, your own heavy breathing, and shook the world.");
  alert("Time stopped, or at least that is how one would describe the current situation. A young girl stood at the entrance of the alleyway. She was beautiful. She had braided silver hair that reached all the way to her waist and a pair of bluish purple eyes that were looking in their direction. Her delicate features had a mix of voluptuousness and childness, and somehow, she possessed an air of nobility that gave off a dangerous charm.");
  alert("She was about a head shorter than you, so about 160cm tall. Her white themed clothing did not have any fancy accessories, but rather it was the clothing's simplicity that caught one's attention. The only thing that stood out was the white coat over her, which was embroidered with a symbol of a hawk-like bird giving it a majestic impression. However, even the clothing was no more than a supplement to highlight the existence that was the girl.");
  alert("'I will not overlook anymore of this outrage. —stop right there.'");
  alert("The voice, like a silver bell, resounded gently in your ears, causing you to forget the situation you were currently in. You were completely overwhelmed by the presence of the silver-haired girl, and that same feeling spread to the other men as well.");
  alert("'Ah......You, what exactly.......'");
  alert("'I'll still be able to forgive you now. I was careless as well. So please, return what you have stolen.'");
  alert("'Oi, the thing you're wearing looks expensive. Could it be that you're a noble...? Eh? What have we stolen?'");
  alert("'Please, it's very important. If it was something other than that, I'd gladly give it up, but I absolutely can't if it's that. Please. You're a good boy so please hand it over nicely.'");
  alert("The girl was even making it sound as if it was a deal. However, an inexplicable feeling of oppression had started to rise around us. Something that is hard to put into words was happening.");
  alert("'Wa, wait! I... I think we're talking about different things here.'");
  alert("'......What do you mean?'");
  alert("The man pointed at you whom he was kicking, and said, 'Y—You aren't here to......save him right?'");
  alert("'......You guys are a weird bunch. Having a dispute amongst yourselves? I'm not heartened by the fact that it's three against one......though, since you asked me about my relations to any of this, I guess I'd have to say I have none.'");
  alert("One could feel a hint of irritation present in her voice. It was as if she thought the man was trying to change the topic. The men, who remembered about the impatience of the young girl's attitude, each tried desperately to explain the situation.");
  alert("'Please hold on! If your objective isn't about him, then we're unrelated! It was that kid just now, wasn't it?'");
  alert("'You said it was stolen didn't you? The wall! She kicked off the wall and ran across the roof!'");
  alert("'All the way, all the way there! In that direction! If she's running at that speed she should have already passed through the streets!'");
  alert("In the continuous stream of words from the men, the gaze of the young girl shifted to you, looking for the truth in their words. Without thinking, you too nodded.");
  alert("'Hmm......It doesn't seem like it's a lie. Well then, so the girl who stole it is down this street? I'll have to hurry.'");
  alert("Turning her back on you, the young girl headed towards the end of the alley. The men were obviously relieved. Faced with the reality of being abandoned, you stared in sh—");
  alert("'Even though it's of a separate manner, it's not something I can overlook.'");
  alert("Turning around, the young girl turned her palm towards them—from her palm, shot out a wildly dancing ball of light. The sound of a hard ball hitting flesh echoed throughout, and the men let out a cry of pain before being knocked off their feet. Then, you heard a whizz, and a fist-sized ball of ice landed next to you. That materialized ball of ice, which ignored the seasons and laws of physics, vaporized instantly as though being swallowed up by the atmosphere.");
  alert("'—Magic'");
  alert("The word most appropriate to explain this phenomenon immediately came out from your mouth. Though there wasn't any incantation, it was without a doubt created and shot out from the girl's palm. Seeing it first hand, there was something you immediately realized, 'It has less of an illusionary feel to it than I imagined......it's more of a disappointing realistic feel.' Even though you imagined it to be something like flashes of light or bursts of energy, the real thing instantly generates a crude lump of ice, deals physical damage, and then instantly disappears. Nothing more.");
  alert("'You......did us good back there.'");
  alert("Putting aside your thoughts about magic, the men,who took a real hit from the ice ball, stood up. Two were only able to stand on unsteady feet. The other, who was hit in a bad spot, was still passed out. However, the fact that their comrade got done in only managed to intensify their rage. The knife guy and the man who held a blunt weapon resembling a club took up battle stances.");
  alert("'Since it has come to this, I don't care whether the opponent is a magic user or a noble. My rage ain't gonna quell. We'll surround and murder you! Are you actually thinking you can win against the two of us? Huh!?' said the knife guy while holding one hand against his face, which had blood dripping from his nostrils.");
  alert("In the face of such jeers, the young girl closed an eye.");
  alert("'That's true, it may be hard if it's two against one. —so we'll be on equal grounds if it's two against two I presume?'");
  alert("As if it was a follow up to the girl's words, a gender neutral high pitched voice broke in from the street's atmosphere. You, surprised, looked around. The men too, looked around in confusion because there wasn't anyone where the voice came from. Neither at the entrance of the alley nor in it. And then, as if to show something to the bewildered you and co., the young girl reached out with her left arm. With her palm facing upwards, 'It' was atop her white fingertips.");
  alert("'If I'm looked at with such high expectations...how do I put it?...I'll feel awkward.' 'It' said while covering its face embarassingly with its paws. It was a cat the size of a palm sitting upright. It had gray fur and droopy ears. Based on Subaru's knowledge, it looked closest to a breed of cat known as the American Shorthair apart from the fact that it had a pink nose and a tail the length of its body. Looking at the palm sized cat, the face of the knife guy turned pale and screamed.");
  alert("'—Y,you're a spirit mage!'");
  alert("'That's right. If you are to step down now, I won't chase you. Hurry up and decide. I'm in a hurry.'");
  alert("In response to the young girl's words, the men hurriedly carried their fallen comrade on their shoulders and headed towards the end of the alley. On the way, as they passed the young girl, one of them clicked their tongue just loud enough so she could hear.");
  alert("'I'll remember your face. You shitty b*tch. The next time I see you around here I won't let you off this easily.'");
  alert("'If you do anything to this girl, your entire family line, including you, will be cursed you know; although, by the time that happens you'll most likely be dead.'");
  alert("Despite the best threat the hoodlum could muster, it paled in comparison to the cat's lighthearted retort. Though the cat said it with a frivolous attitude, the faces of the men turned the palest they had been yet. This time, without a word, they escaped into the crowd. The gangsters disappeared, and only Subaru, the young girl, and her cat were left in the alley.");
  alert("Anyway, I have to say a word of thanks you thought as you forgot that your body was in pain and tried to move your torso.");
  alert("'—Don't move,' said the silver-haired girl in a cold voice, without a hint of emotion.");
  alert("A heavy sense of caution could be seen in the girl's eyes. Even though she understood that you were of no relation to the men, it did not serve as a reason for her to trust you. Those were the eyes she was making. Although those were the eyes that were looking at you, your reaction to them was slightly different. The bluish purple eyes of the young girl were looking in your direction. They were so beautiful; you were almost entranced by it.");
  alert("Just being looked at, you, who had zero experience with beautiful girls, unconsciously averted your eyes and your face reddened. Looking at Subaru's behavior, the young silver hair girl let out an unrestrained laugh.");
  alert("'See? He averted his eyes because he had a guilty conscience. It seems I was right.'");
  alert("'I wonder about that... Just from that guy-like reaction alone, I'd think the amount of trouble he can give is likely to be zero.'");
  alert("'Be quiet Puck. —You, you do know about the girl who stole the emblem from me don't you?' asked the girl as she shut he small cat up.");
  alert("Even that face which was brimming with self-confidence was pretty. However—");
  alert("'Sorry for getting your hopes up, but I have no idea of even trivial stuff like this.'");
  alert("'Eh? No, no way!'");
  alert("Her self-confidence was completely stripped from her face, and Subaru was able to catch a glimpse of the young girl's natural expression. The high and mighty attitude she had up till now had disappeared, and the panicking young girl and the cat on her palm looked at each other.");
  alert("'Wh...wh...what should I do? Don't tell me we really just went on a wild goose chase......?'");
  alert("'Though we're still on it as we speak, I think it'd be better if we hurry. The culprit made an extremely quick escape so she most probably had some strange divine protection.'");
  alert("'Mmm, why do you make it sound as if it's not your problem, Puck?'");
  alert("'Well, you were the one who said it'd be useless if I interfered. Oh, and what are you gonna do with the boy?'");
  alert("As if they just remembered, the two returned the topic of conversation to you who forced a smile. It was as if the young girl went '—Ah!' and finally realized your existence and situation.");
  alert("Just being saved by you is enough. You're in a hurry aren't you? It'd be better the faster you pursue,' you lied as you stood up.");
  alert("—Though if you'd like I could help you. How about it, miss?'");
  alert("Was what Subaru intended to say while pushing up his hair with his teeth shining but—");
  alert("'Ehhh?'");
  alert("Your head suddenly felt disorientated and your hand which was about to reach the wall missed, and just like that, you fell face first onto the floor.");
  alert("'Ah—it seems I was too late to tell you not to strain yourself and stand up.'");
  alert("The warning from the small cat came one step too late. The result from falling in such an unexpected manner was a sharp pain that took your consciousness to a faraway land.");
  alert("—So, what should we do?'")
  alert("'It's none of my concern, right? It's not something you can die from. Just leave him.'");
  alert("From your far flown consciousness, you could slightly make out the conversation of the two. As expected of a fantasy world. It has a rather extreme opinion on the topic of sympathy. A negative way of thinking was that if this goes on, you would be left alone in the back alley. A positive way of thinking was that since you were about to die, being able to keep your life was more than enough. Thinking about these two perspectives, your consciousness gradually drifted—");
  alert("'Seriously—?'");
  alert("'Seriously!'");
  alert("At the instant you were about to lose your consciousness, you saw the silver haired young girl turn around, red-faced.");
  alert("'I definitely, definitely won't save you or anything!'");
  alert("—The fantasy in another world where even an angry face looked extremely cute. With that final thought, this time, your consciousness fell into darkness.");
}
function chapterOneRun(){//Run route
  alert("You look over your shoulder to try and make a path to escape but all you see is a dead-end. You're forced to face your attackers.");
}

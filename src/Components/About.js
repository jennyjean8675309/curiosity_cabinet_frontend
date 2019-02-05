import React from 'react'

const About = () =>
  <div className="about">
    <h1 className="ui header">Cabinets of Curiosity</h1>
    <img src={require("../cabinet_doors.jpg")} className="ui medium circular image"/>
    <br></br>
    <br></br>
    <h3>A Brief history of the cabinet of curiosity...</h3>
      <p>{`Cabinets of curiosity have a long history, but really came to be 'a thing' during the 16th century, when scientific revelations were being made, new worlds were being discovered, and technological tools were being developed that helped people to see things in new ways.`}</p>

      <p>{`For the intellectually curious (and most likely wealthy), collections were being formed of marvelous and fantastic objects tha encouraged imaginative thought and further exploration and that captured the true Renaissance spirit of awe and wonder. These collections were called cabinets of curiosities and were very hodge-podge in nature.`}</p>

      <p>{`A cabinet of curiosity, also called a kunstkammer (art cabinet) or wunderkammer (wonder cabinet), was a somewhat puzzling collection of rare and fascinating objects. The word 'cabinet' did not refer to a cupboard, but rather to an entire room. Some collections were housed in a cupboard, some in a room, and some were so large they took up entire wings of palaces. Early collections were based on Renaissance Humanist beliefs - central to the Humanist belief during this time was that a man could learn all there was to know about the universe in his lifetime (hah! silly Humanists). Cabinets were meant to be microcosms of the macrocosm, or a mini representation of the world at large.`}</p>

    <h3>How this all relates to you...</h3>
      <p>{`Shockingly, these cabinets of yesteryear, rather than becoming encyclopedic libraries of the universe as we know it, instead became reflections of their owners - what their interests were, and how their unique perspective of the world was mirrored in the objects they collected. Though maybe these early collectors were a bit misguided by `}<a href='https://library.brown.edu/create/unicornfound/narwhal-tusk/'>unicorn horns</a>{` (narwhal tusks) and `}<a href='http://listverse.com/2017/05/17/top-10-bizarre-objects-commonly-found-in-cabinets-of-curiosities/'>sea monsters</a>{`, we believe that there is still a great deal of value in seeing the world through another's perspective.`}</p>

      <p>{`So, dear Internet User, we invite you to explore these modern cabinets of curiosity, and even to create one of your very own if you so desire...`}</p>

      <h5>{`What will you collect?`}</h5>

      <p></p>
  </div>

export default About

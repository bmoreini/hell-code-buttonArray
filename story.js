function track(){
  switch (n){
      // COLUMN 0 ------------------------------------------------------------------------------------------------------------
      
    case "0,0,0": {
      messages = ["<b>"+n+" - Home</b>","This is your house, in the town. You live here. A door on the south side leads out to the rest of the village."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      
      locItems = [null,"book","hat"];
      hotspots = ["Select..."];
      someCount = 1;

      while (someCount < locItems.length){
        current = locItems[someCount];
        mergeSet(index_owned);
        if (merge == false){
          addItem(locItems[someCount]);
          hotspots.push(locItems[someCount]);
        }
        someCount++;
      }
      
      break;
    }
      
    case "0,-1,0": {
      messages = ["<b>"+n+" - Town Center</b>","You stroll to the center of the town. To the north is your house, and to the east are the shops. South is the river, and west are grassy fields used for farming."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,1,0": {
      messages = ["<b>"+n+" - Plains 6</b>","You stroll through the wide plains. To the west, the plains streach onwards, but to the north, and grasses give way to desert."];
      delayText(messages,0);
      choices = ["Select...","North","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,-2,0": {
      messages = ["<b>"+n+" - Riverside 1</b>","You walk alongside the river bank, and gaze out over the river. To the north, a path leads back to the village center. The river is shallow enough at this time of year for you to wade southward, or you could follow the river bank east. To the west, you can see sprawling grassy fields."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,2,0": {
      messages = ["<b>"+n+" - Desert 3</b>","You venture on through the desert. To the north and east, the desert continues on. To the south, however, the desert sands give way to sprawling plains."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,-3,0": {
      messages = ["<b>"+n+" - River 1</b>","You wade through the river. To the north and south, you can see the river bank. The river continues to the east, and to the west you can see some sort of pond."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,3,0": {
      messages = ["<b>"+n+" - Desert 2</b>","You journey on through the desert. To the north, you see an oasis surronded by verdant plantlife. To the east, south, and west, the desert seems to stretch endlessly."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,-4,0": {
      messages = ["<b>"+n+" - Riverside 3</b>","You stroll along the riverside. You could head north and wade through the river, or continue east along the riverbank. To the south, you can see a grassy meadow."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,4,0": {
      messages = ["<b>"+n+" - Oasis</b>","You approach the oasis, wading through the content plantlife. To the south, you can see the open desert. To the north, you can see what seems to be some sort of cave system."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,-5,0": {
      messages = ["<b>"+n+" - Meadow 2</b>","You wander through the peaceful meadow. To the north, you can see the river bank. To the east, the meadow streched onward."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "0,5,0": {
      messages = ["<b>"+n+" - Desert Caves 1</b>","You enter the desert caves, and peer around at the cool rocks. They are cool in both temperature are appeal.","To the east, you can see what looks like an ancient tomb. To the south, you can see the exit to the cave leading out to an oasis."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN -1 ------------------------------------------------------------------------------------------------------------------
      
    case "-1,0,0": {
      messages = ["<b>"+n+" - Grassy Fields 3</b>","You wander through the grassy fields. A few sheep watch as you walk along. To the south, the grassy fields stretch endlessly. To the north, the grasses grow sparser and become plains."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,-1,0": {
      messages = ["<b>"+n+" - Grassy Fields 1</b>","You wander through the grassy fields. You see a small herd of cattle grazing in the distance. To the north, west, and south, the fields sprawl onwards. To the east, you can see the town center."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,1,0": {
      messages = ["<b>"+n+" - Plains 1</b>","You venture out through the plains. To the north, east, and west, the plains strech seemingly endlessly. To the south, the plains become grassy fields where livestock graze."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,-2,0": {
      messages = ["<b>"+n+" - Grassy Fields 2</b>","You wander through the grassy fields. A horse and a foal are grazing in the distance. To the north and west, the fields continue. To the east, you can see the bank of the river."];
      delayText(messages,0);
      choices = ["Select...","North","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,2,0": {
      messages = ["<b>"+n+" - Plains 4</b>","You treck onwards through the plains. The plains continue for as far as you can see, in every direction."];
      delayText(messages,0);
      choices = ["Select...","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,-3,0": {
      messages = ["<b>"+n+" - Salt Water Pond</b>","You explore the pond, and find that its water is almost as salty as your attitude! Probably not good for drinking...","To the east, a freshwater river feeds into the pond. To the south, you can see a beaver dam near the shore. To the west, a smaller stream leads away from the pond."];
      delayText(messages,0);
      choices = ["Select...","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,3,0": {
      messages = ["<b>"+n+" - Desert 1</b>","You venture on through the sand-filled desert. To the east, the desert continues on. To the north, the sandy soil gives way to barren dirt."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,-4,0": {
      messages = ["<b>"+n+" - Beaver Dam</b>","You expolre the beaver dam, much to the dismay of the bevaers living there. Back to the north is the salt water pond."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,4,0": {
      messages = ["<b>"+n+" - Barren Ground 2</b>","You trudge along the barren ground. To the north, the barren expanse continues onwards. To the south, the soil becomes more sandy and turns into a desert."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,-5,0": {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-1,5,0": {
      messages = ["<b>"+n+" - Barren Ground 1</b>","You trudge along across the barren expanse. To the south, the fields of barren earth continue. To the west, you see a few shadowy, dead, trees."];
      delayText(messages,0);
      choices = ["Select...","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN 1 ------------------------------------------------------------------------------------------------------------------
      
    case "1,0,0": {
      messages = ["<b>"+n+" - Desert Caves 2</b>","You explore the sandstone caves. They are filled with neat rocks.","To the north lies the exit of the cave, which leads back to the desert."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,-1,0": {
      messages = ["<b>"+n+" - Shops</b>","You walk down the street, looking at the shops as you pass by. You would buy something, but you have no money.","To the west is the town center."];
      delayText(messages,0);
      choices = ["Select...","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,1,0": {
      messages = ["<b>"+n+" - Desert 5</b>","You journey onwards through the desert. To the north, the desert stretches onwards. To the east, you see what seems to be an endless expanse of mud. To the south, you can see a few caves in a sandstone cliff."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,-2,0": {
      messages = ["<b>"+n+" - Riverside 2</b>","You stroll along the riverside. To the east, the river drops into a gorge and prevents you from following it further. You could wade south into the river, or continue west walking along the riverbank."];
      delayText(messages,0);
      choices = ["Select...","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,2,0": {
      messages = ["<b>"+n+" - Desert 4</b>","You journey on through the desert. To the north, south, and west, you can see nothing but more desert. To the east, the desert merges into mud flats."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,-3,0": {
      messages = ["<b>"+n+" - River 2</b>","You wade through the river. The river continues calmly along to the east and west. To the north and south, you can see the riverbanks on either side."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,3,0": {
      messages = ["<b>"+n+" - Desert 6</b>","You continue onwards through the desert. To the south and west, you see... more desert. To the north, you see a sturdy fortress made of sandstone bricks."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,-4,0": {
      messages = ["<b>"+n+" - Riverside 4</b>","You walk along the riverside. To the north is the river, and to the south is a peaceful meadow. The riverbank continues to the west."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,4,0": {
      messages = ["<b>"+n+" - Desert Fortress</b>","You enter the sandstone fortress. Inside are a number of guards, who are quite friendly and rather bored. To the south is the gate, which leads back out to the desert."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,-5,0": {
      messages = ["<b>"+n+" - Meadow 1</b>","You stroll along through the beautiful meadow. Wildflowers and butterflies are everywhere. It's very picturesque.","To the north is the bank of the river. To the west, the meadow streches on."];
      delayText(messages,0);
      choices = ["Select...","North","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "1,5,0": {
      messages = ["<b>"+n+" - Desert Tomb</b>","You poke around inside the hidden tomb. No evil spirits attempt to posess you in any way at all. How boring.","To the west is the entrance back to the main caves."];
      delayText(messages,0);
      choices = ["Select...","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN -2 ------------------------------------------------------------------------------------------------------------------
      
    case "-2,0,0": {
      messages = ["<b>"+n+" - Plains 2</b>","You journey through the plains. To the north, the plains sprawl endlessly. To the south, you can see grassy fields used for grazing livestock."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,-1,0": {
      messages = ["<b>"+n+" - Grassy Fields 5</b>","You wander through the grassy fields. A few sparrows dart overhead. To the esat and south, the grassy fields strech onward. To the north, the fields become plains. To the west, you can see the edge of a forest."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,1,0": {
      messages = ["<b>"+n+" - Plains 3</b>","You wander through the plains. The plains seem to stretch endlessly in every direction."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,-2,0": {
      messages = ["<b>"+n+" - Grassy Fields 4</b>","You amble through the peaceful, grassy, fields. You can see a few sheep grazing up on a hill. To the north and east, the grassy fields continue onwards. To the west, you can see a forest."];
      delayText(messages,0);
      choices = ["Select...","North","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,2,0": {
      messages = ["<b>"+n+" - Plains 5</b>","You journey through the grassy plains. Plains seem to strech in every direction. You hope you are not lost."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,-3,0": {
      messages = ["<b>"+n+" - Stream 1</b>","You follow the saltwater stream. To the east is the source of the stream, a pond. To the west, the stream continues through the forest. To the south, you can see a mossy grove tucked away among the trees."];
      delayText(messages,0);
      choices = ["Select...","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,3,0": {
      messages = ["<b>"+n+" - Dark Forest 3</b>","You forge onwards through the dark and foreboding forest. The barren trees seems to stretch in every direction."];
      delayText(messages,0);
      choices = ["Select...","North","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,-4,0": {
      messages = ["<b>"+n+" - Mossy Grove</b>","You explore the mozzy grove. It's filled with moss.","To the north is a saltwater stream. To the south, the mossy grove seems strangely distorted."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,4,0": {
      messages = ["<b>"+n+" - Dark Forest 5</b>","You journey onwards through the dark forest. To the north, the trees seem to thin out. To the south and west, the forest continues endlessly."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,-5,0": {
      messages = ["<b>"+n+" - Mossy Fae Grove</b>","You wander deeper into the mossy grove. You think you can see a few faeries darting about in the corners of your vision.","To the north, the mossy grove seems more stable, with significantly less faeries."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-2,5,0": {
      messages = ["<b>"+n+" - Dark Forest Edge</b>","You reach the edge of the dark forest. A few barren trees seem to cast more shadows than they should.","To the east, the trees vanish entirely, leaving only barren earth. To the south, the trees grow denser and become a shadowy forest."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN 2 ------------------------------------------------------------------------------------------------------------------
      
    case "2,0,0": {
      messages = ["<b>"+n+" - Salt Marsh 1</b>","You carefully pick your way through the salt marsh. To the north, the marsh gives way to mud flats. To the south, the marsh grows denser and more treacherous."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,-1,0": {
      messages = ["<b>"+n+" - Salt Marsh 2</b>","You carefully navigate through the dense salt marsh. It seems to stretch in every direction. You can't help but think about all of the people who drown in bogs and marshes."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,1,0": {
      messages = ["<b>"+n+" - Mud Flats 3</b>","You wander across the mud flats. They're more flat than mud.","To the north, the mud flats continue. To the south, you can see a marsh. To the west, the mud flats grow dry and sandy, and become desert."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,-2,0": {
      messages = ["<b>"+n+" - Gorge 1</b>","You explore the walls of the gorge. There dosn't seem to be any way up them. To your east are some cliffs, which a waterfall flows over. To the south is the river."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,2,0": {
      messages = ["<b>"+n+" - Mud Flats 2</b>","You wander across the mud flats. To the north and south, the mud flats stretch onwards. To the east, you can see a plain of jagged rocks. To the west, the mud flats become desert."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,-3,0": {
      messages = ["<b>"+n+" - River 3</b>","You wade on through the river as it descends into a gorge. To the north and south are steep walls of the gorge. To the east, a waterfall cascades down from high cliffs, blocking your path. To the west, the river flows gently onwards."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,3,0": {
      messages = ["<b>"+n+" - Mud Flats 1</b>","You wander across the mud flats. To the east, you can see a field of jagged rocks rising from the ground. To the south, and mud flats stretch endlessly."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,-4,0": {
      messages = ["<b>"+n+" - Gorge 2</b>","You explore the walls of the gorge, but find no way to climb them. To the north is the river, and to the east are the high cliffs which the waterfall cascades down from."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,4,0": {
      messages = ["<b>"+n+" - Peak Caves 1</b>","You explore the caves of the jagged peak. They are filled with small pointy rocks.","To the north, you see what looks like some sort of dungeon hidden within the caves. To the east, the caves open back up to the jagged peaks."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,-5,0": {
      messages = ["<b>"+n+" - Goblin Lair</b>","You venture into the goblin lair. There are quite a few goblins inside, who are very friendly. You discuss shiny rocks with them for a while.","To the east is the exit, which leads back to the bramble."];
      delayText(messages,0);
      choices = ["Select...","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "2,5,0": {
      messages = ["<b>"+n+" - Peak Dungeon</b>","You sneak into the dungeon, but there is no one inside. A few prison cells lie empty and abandoned. The place feels very eerie.","To the south is the exit, which leads back to the caves."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN -3 ------------------------------------------------------------------------------------------------------------------
      
    case "-3,0,0": {
      messages = ["<b>"+n+" - Leafy Forest 3</b>","You wander through the forest. A hawk flies overhead, chasing something you can't see.","To the north, the forest continues. To the south, the trees thin out."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,-1,0": {
      messages = ["<b>"+n+" - Leafy Forest 2</b>","You wander among the trees, which are spread out rather sparsely. To the north, the trees grow thicker. To the south, the thin forest continues. To the east, the trees give way to grassy fields where livestock graze."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,1,0": {
      messages = ["<b>"+n+" - Leafy Forest 5</b>","You journey through the verdant forest. To the south, the forest continues. To the north, the trees become sickly and bare, and cast darker shadows."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,-2,0": {
      messages = ["<b>"+n+" - Leafy Forest 1</b>","You wander between the sparse trees. To the north, the sparse forest continues. To the east, the trees give way to grassy fields where livestock graze. To the south, you can see a stream flowling gently. To the west, you catch sight of a sandy beach."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,2,0": {
      messages = ["<b>"+n+" - Dark Forest 1</b>","You walk between the barren trees. The air feels a bit cooler. To the north, the shadowy forest continues. To the south, the trees become more healthy and vibrant."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,-3,0": {
      messages = ["<b>"+n+" - Stream 2</b>","You explore the saltwater stream. To the north and south you can see forest. To the east, the stream continues into the woods. To the west, the stream flows down onto a sandy beach."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,3,0": {
      messages = ["<b>"+n+" - Dark Forest 2</b>","You journey through the shadows of the barren forest. The darkness seems to stretch in every direction."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,-4,0": {
      messages = ["<b>"+n+" - Leafy Forest 4</b>","You wander through the verdant forest. To the north, a saltwater stream flows gently along. To the west, you can see a sandy beach."];
      delayText(messages,0);
      choices = ["Select...","North","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,4,0": {
      messages = ["<b>"+n+" - Dark Forest 4</b>","You wander through the dark, barren, forest. To the north, you can see an overgrown garden through the trees. To the east, the forest continues onwards."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,-5,0": {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-3,5,0": {
      messages = ["<b>"+n+" - Dark Garden 1</b>","You wander through the overgrown garden. You recognise a few species of vegtable, which seem to be prospering just fine without human assistance.","To the south is the garden gate, which leads back to the forest. To the west is a crumbling, abandoned, castle."];
      delayText(messages,0);
      choices = ["Select...","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN 3 ------------------------------------------------------------------------------------------------------------------
      
    case "3,0,0": {
      messages = ["<b>"+n+" - Saltwater Pools</b>","You explore the strange pools of salty water. To the north is a mysterious grove. To the east is a glen of pine trees. To the south is a salt marsh."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,-1,0": {
      messages = ["<b>"+n+" - Salt Marsh 3</b>","You carefully explore the salt marsh. To the north is a strange cluster of pools, filled with salty water. To the west, the salt marsh continues."];
      delayText(messages,0);
      choices = ["Select...","North","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,1,0": {
      messages = ["<b>"+n+" - Salt Fae Grove</b>","You explore the strange grove. The entire grove seems to shimmer slightly, and a few faeries dart around in the corners of your vision.","To the south are the saltwater pools."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,-2,0": {
      messages = ["<b>"+n+" - Cliff 1</b>","You climb the steep cliff the borders the waterfall. To the east is the riverbank above, and to the west is the riverbank below. To the south is the waterfall, which you could climb under from your current position."];
      delayText(messages,0);
      choices = ["Select...","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,2,0": {
      messages = ["<b>"+n+" - Jagged Rocks 1</b>","You carefully make your way between the jagged rocks. To the north, the forest of jagged rocks continues. To the east, a rocky mountain slopes upwards. To the west, mud flats strech on."];
      delayText(messages,0);
      choices = ["Select...","North","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,-3,0": {
      messages = ["<b>"+n+" - Waterfall 1</b>","You cling to the wet rocks beneath the waterfall. It's significantly less interesting here than you thought it would be, and significantly more wet.","To the north and south are the cliffs that border the waterfall. To the west is the river below."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,3,0": {
      messages = ["<b>"+n+" - Jagged Rocks 2</b>","You make your way through the forest of jagged rocks. To the north, a cluster of jagged spires forms a peak. To the east, the rocky slope of a mountain climbs upwards. To the south, the forest of rocky spires continues. To the west, the rocks give way to mud flats."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,-4,0": {
      messages = ["<b>"+n+" - Cliff 2</b>","You climb the cliff beside the waterfall. To the north is the waterfall, which you could navigate beneath from this angle. To the east is the riverbank above, and to the west is the gorge below."];
      delayText(messages,0);
      choices = ["Select...","North","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,4,0": {
      messages = ["<b>"+n+" - Jagged Peak</b>","You scale the jagged peak, careful not to injure yourself on the sharp rocks. To the north and west of the peak, you can see caves in the rock face. To the south, the peak descends into a field of jagged stones, and to the east, the rocky slope of a mountain rises upwards."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,-5,0": {
      messages = ["<b>"+n+" - Bramble 2</b>","You push your way through the dense brambles. To the west, you can see a goblin lair. To the east, the brambles thin out."];
      delayText(messages,0);
      choices = ["Select...","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "3,5,0": {
      messages = ["<b>"+n+" - Peak Caves 2</b>","You enter the cave, and marvel at all of the pretty rocks inside. To the south is the cave's exit, which leads back to the jagged peak."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN -4 ------------------------------------------------------------------------------------------------------------------
      
    case "-4,0,0": {
      messages = ["<b>"+n+" - Beach 4</b>","You stroll along the sandy beach. The salty ocean waves lap at the shore.","To the north, the beach becomes covered in small pebbles rather than sand. To the south, the sandy beach continues."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,-1,0": {
      messages = ["<b>"+n+" - Beach 3</b>","You stroll along the serene, sandy, beach. The sand seems to stretch in every direction."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,1,0": {
      messages = ["<b>"+n+" - Rocky Shore 1</b>","You make your way along the rocky shore. It has lots of very pretty rocks.","To the north, the rocky shore continues. To the south, the pebbles give way to a sandy shoreline."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,-2,0": {
      messages = ["<b>"+n+" - Beach 1</b>","You stroll along the sandy beach. A seagull flies overhead.","To the north, the beach stretches endlessly. To the south, a stream crosses the sand and flows out to sea. To the east, you can see a grove of verdant trees."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,2,0": {
      messages = ["<b>"+n+" - Rocky Shore 2</b>","You make your way along the rocky shore, stopping to marvel at the pretty pebbles. To the north, you can see jagged rocks rising up from the earth. To the south, the pebbly beach continues."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,-3,0": {
      messages = ["<b>"+n+" - Stream / Beach</b>","You investigate the saltwater stream which cuts through the sand on its way to the sea. To the north and south, the beach streches onwards. To the east, the stream leads up into the forest."];
      delayText(messages,0);
      choices = ["Select...","North","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,3,0": {
      messages = ["<b>"+n+" - Impassible Rocks</b>","You investigate the large, seaweed-covered rocks, but see no safe way to bypass them. To the south is the rocky shore."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,-4,0": {
      messages = ["<b>"+n+" - Beach 2</b>","You stroll along the sandy beach, enjoying the sun. To the north, a stream cuts through the sand as it flows out to the ocean. To the east, you can see the edge of the forest."];
      delayText(messages,0);
      choices = ["Select...","North","East"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,4,0": {
      messages = ["<b>"+n+" - Dark Graveyard</b>","You wander around the graveyard, but not a single zombie rises to attack you. You are rather dissapointed.","To the north is the door back to the ruined castle."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,-5,0": {
      messages = [n,"You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "-4,5,0": {
      messages = ["<b>"+n+" - Dark Castle</b>","You wander around the old castle. It's very, very, very abandoned.","To the east is the door back to the overgrown garden. To the south is a door leading to a small graveyard."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN 4 ------------------------------------------------------------------------------------------------------------------
      
    case "4,0,0": {
      messages = ["<b>"+n+" - Pine Grove</b>","You wander through the grove of pine trees. It smells like air freshener.","To the east, the pine trees thicken into a forest. To the west, you can see some strange pools of water."];
      delayText(messages,0);
      choices = ["Select...","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,-1,0": {
      messages = ["<b>"+n+" - Pine Forest 3</b>","You wander through the pine forest. A racoon stares out at you from a hollow tree.","To the east, the forest stretches onwards. To the south, you can see a river bank."];
      delayText(messages,0);
      choices = ["Select...","East","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,1,0": {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,-2,0": {
      messages = ["<b>"+n+" - Riverside 5</b>","You walk along the riverside. To the north, lies a vast pine forest. To the east, the riverbank continues onwards. To the south is the river, and to the west steep cliffs surrond a waterfall."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,2,0": {
      messages = ["<b>"+n+" - Mountain 3</b>","You clamber over the steep mountain slope. To the north and east, the mountain climbs upwards. To the west, a field of jagged rocks stretches onward."];
      delayText(messages,0);
      choices = ["Select...","North","East","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,-3,0": {
      messages = ["<b>"+n+" - River 4</b>","You wade through the river. The current tugs at your legs, pulling you towards the waterfall in the west. To the east, the river emerges from the ground. To the north and south, you can see the riverbanks."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,3,0": {
      messages = ["<b>"+n+" - Mountain 2</b>","You climb bravely on the rocky mountain slope. To the north the mountain rises, and to the south, it descends. To the west, a field of jagged rocks streches outward."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,-4,0": {
      messages = ["<b>"+n+" - Riverside 7</b>","You stroll along the river bank. To the north is the river, and to the west steep cliffs frame a waterfall. The river bank continues to the east. To the south, you can see a mess of brambles."];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,4,0": {
      messages = ["<b>"+n+" - Mountain 1</b>","You climb the steep mountain slope. To the east, the mountain slopes upwards, and to the south, it slopes down. To the west, a jagged peak of stone rises, isolated from the rest of the mountain."];
      delayText(messages,0);
      choices = ["Select...","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,-5,0": {
      messages = ["<b>"+n+" - Bramble 1</b>","You push your way through the bramble, flinching at the thorns. To the north, you can see the riverbank. To the west, the bramble thickens and becomes more difficult to traverse."];
      delayText(messages,0);
      choices = ["Select...","North","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "4,5,0": {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
      // COLLUMN -5 ------------------------------------------------------------------------------------------------------------------
      
      // Water expansion + island stuff will go here eventually?
      
      // COLLUMN 5 ------------------------------------------------------------------------------------------------------------------
      
    case "5,0,0": {
      messages = ["<b>"+n+" - Pine Forest 2</b>","You venture on through the pine forest. To the north and south, the forest streches endlessly. To the west, you can see a grove in the pine trees."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,-1,0": {
      messages = ["<b>"+n+" - Pine Forest 4</b>","You wander through the pine forest. To the north and west, the forest continues. To the south, you can see a river bank."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,1,0": {
      messages = ["<b>"+n+" - Pine Forest 1</b>","You venture through the pine forest. It is distinctly pine-scented.","To the north, a rocky mountain slope rises before you. To the south, the pine forest continues."];
      delayText(messages,0);
      choices = ["Select...","North","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,-2,0": {
      messages = ["<b>"+n+" - Riverside 6</b>","You stroll along the riverside. To the west, the river bank continues. To the north, you can see a pine forest. To the south, the river vanishes into a spring in the ground."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,2,0": {
      messages = ["<b>"+n+" - Mountain 4</b>","You venture over the steep mountain slope. A passing goat gives you a judgemental look.","To the south, a pine forest takes root in the rocky soil. To the west, the mountain continues upwards."];
      delayText(messages,0);
      choices = ["Select...","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,-3,0": {
      messages = ["<b>"+n+" - River 5</b>","You investigate the source of the river. It seems to spring from an ungerground tunnel, but you are unable to venture far inside due to your need for oxygen to survive.","To the north and south, you can see the banks of the river. To the west, the river continues flowing gently."];
      delayText(messages,0);
      choices = ["Select...","North","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,3,0": {
      messages = ["<b>"+n+" - Mountain Castle</b>","You enter the mountain castle, and are gretted by a number of rather bored guards. You play a game of chess with them.","To the north is the exit to the castle, which will take you back to the mountains."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,-4,0": {
      messages = ["<b>"+n+" - Riverside 8</b>","You stroll along the riverside, listening to the birdsong. To the north, the river vanishes into a spring in the ground. To the west, the river bank continues."];
      delayText(messages,0);
      choices = ["Select...","North","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,4,0": {
      messages = ["<b>"+n+" - Mountain 5</b>","You bravely climb the steep mountain slope. A rather condescending vulture watches you.","To the west, the mountain slopes downwards. To the south, you can see a stone castle build into the rock of the mountain."];
      delayText(messages,0);
      choices = ["Select...","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,-5,0": {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","North"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
      
    case "5,5,0": {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You clipped through reality. Don't do that."];
      delayText(messages,0);
      choices = ["Select...","South"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }

        // Defaults ------------------------------------------------------------------------------------------------------------------
        
    default: {
      messages = ["<b>"+n+" - Out Of Bounds</b>","You are... somewhere?","(You clipped out of bounds, somehow! That's probably not good.)"];
      delayText(messages,0);
      choices = ["Select...","North","East","South","West"];
      answer = setOptions(choices);
      hotspots = ["Select..."];
      break;
    }
  }
}
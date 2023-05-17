import Tile from "./Tile";

import altairPic from "../src/altair.png";
import ezioPic from "../src/ezio.webp";
import connorPic from "../src/connor.webp";
import edwardPic from "../src/edward.webp";
import shayPic from "../src/shay.webp";
import arnoPic from "../src/arno.png";
import eviePic from "../src/evie.webp";
import jacobPic from "../src/jacob.webp";
import bayekPic from "../src/bayek.png";
import kassandraPic from "../src/kassandra.webp";
import eivorPic from "../src/eivor.webp";
import basimPic from "../src/basim.webp";

const listOfAssassins = [
    {
        name: "Altaïr Ibn-La'Ahad",
        pic: altairPic,
        content: "Altaïr Ibn-La'Ahad (Arabic: الطائر ابن لا أحد‎ 1165 – 1257) was a member of the Levantine Brotherhood of Assassins who served as their Mentor from 1191 until his death in 1257. During his tenure as Mentor, through the knowledge of an Apple of Eden, Altaïr made several discoveries and inventions that greatly helped the Order's progression. His leadership saw to the spread of the Assassins' influence throughout Europe and Asia."
    },
    {
        name: "Ezio Auditore da Firenze",
        pic: ezioPic,
        content: "Ezio Auditore da Firenze (1459 – 1524) was a Florentine nobleman during the Renaissance, and, unbeknownst to most historians and philosophers, a Master Assassin and the Mentor of the Italian Brotherhood of Assassins, a title which he held from 1503 to 1513."
    },
    {
        name: "Ratonhnhaké:ton",
        pic: connorPic,
        content: "Ratonhnhaké:ton (/radũnhaɡɛ̌ːdõ/, born 1756), also known by the adopted name of Connor, was a Kanien'kehá:ka-born Master Assassin of the Colonial Brotherhood during the period of the American Revolutionary War. He is an ancestor of Desmond Miles through the paternal line."
    },
    {
        name: "Edward Kenway",
        pic: edwardPic,
        content: "Edward James Kenway (1693 – 1735) was a Welsh-born British privateer-turned-pirate and a member of the West Indies and British Brotherhoods of Assassins."
    },
    {
        name: "Shay Cormac",
        pic: shayPic,
        content: "Shay Patrick Cormac (c. 1731 – unknown) was a member of the Templar Order, operating around the Atlantic Ocean during the Seven Years' War. Formerly a member of the Colonial branch of the Assassin Brotherhood, Shay devoted his Templar career to hunting down his prior associates. Aboard his ship, the Morrigan, Shay's travels brought him to New York and the Appalachian Mountains, among other locations."
    },
    {
        name: "Arno Dorian",
        pic: arnoPic,
        content: "Arno Victor Dorian (born 1768) was a member of the French Brotherhood of Assassins and a Master Assassin during the French Revolution. He is also an ancestor of the modern Assassin Callum Lynch through his paternal line."
    },
    {
        name: "Evie Frye",
        pic: eviePic,
        content: "Dame Evie Frye (born 1847) was a Master Assassin of the British Brotherhood, active in London during the Victorian era, and the elder twin sister of Jacob Frye. She was also a member of the Order of the Sacred Garter, and the grand-aunt of Lydia Frye."
    },
    {
        name: "Jacob Frye",
        pic: jacobPic,
        content: "Sir Jacob Frye (born 1847) was a Master Assassin of the British Brotherhood, active in London during the Victorian era, and the younger twin brother of Evie Frye. He later became a member of Queen Victoria's Order of the Sacred Garter, and the grandfather of Lydia Frye."
    },
    {
        name: "Bayek",
        pic: bayekPic,
        content: "Bayek of Siwa (born c. 85 BCE), also known by the alias Amun, was one of the last Medjay of Egypt and the founder of the Hidden Ones alongside his wife, Aya."
    },
    {
        name: "Kassandra",
        pic: kassandraPic,
        content: "Kassandra (Greek: Κασσανδρα; 458 BCE – 2018 CE), renowned as the Eagle Bearer, nicknamed the West Wind,[3] and bestowed the title of Keeper,[4] was a Spartan mercenary who operated in Greece during the Peloponnesian War."
    },
    {
        name: "Eivor Varinsdottir",
        pic: eivorPic,
        content: "Eivor Varinsdottir (Runic: ᛅᛁᚢᛅᚱ; born 847), renowned as the Wolf-Kissed, was a Viking shieldmaiden and jarlskona from Norway who raided in what would become England during the late 9th century. She was the reincarnation of the Isu Odin, the chief of the Æsir who was revered as a god in Germanic and Norse mythology."
    }, 
    {
        name: "Basim Ibn Ishaq",
        pic: basimPic,
        content: "Basim Ibn Ishaq (born c. 835) is a human reincarnation of the Isu Loki who used Yggdrasil to permit his consciousness to survive the Great Catastrophe millennia ago. Born in the Abbasid Caliphate during the 9th century, Basim became a Hidden One working primarily in foreign nations on their behalf, even becoming the leader of the bureau of Constantinople."
    }
];

const TileCollection = () => {

    return ( 
        <div className="tile-collection">
            {listOfAssassins.map(a => <Tile details={a} />)}
        </div>
     );
}
 
export default TileCollection;
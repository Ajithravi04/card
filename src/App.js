
import './App.css';
import'./card.css';
import Card from "./card";
import londen from "./londen.jpeg";
import road from "./road.jpeg";
import tokyo from "./tokyo.jpeg";
import venice from "./venice.jpeg";


function App() {
  return (
    <div className="App">

      <Card value={"main"} img={londen} 
            name={"londen"}
            desc={"London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. population of just under 9 million."} 
            button={"Joinnow"}/>
      <Card value={"main1"} img={road} 
            name={"Mexico"}
            desc={"A road trip, sometimes spelled roadtrip, is a long-distance journey traveled by automobile. Historic Route 66 in New Mexico journey traveled automobile."}
            button={"Joinnow"}/> 
      <Card value={"main"} img={tokyo} 
            name={"Tokyo"}
            desc={"Tokyo is the largest urban economy in the world by gross domestic product, and is categorized as an Alpha+ city by the Globalization and World Cities"}
            button={"Joinnow"}/>
      <Card value={"main1"} img={venice} 
            name={"Venice"}
            desc={"Venice, the capital of northern Italys Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads"}
            button={"Joinnow"}/>
            
    </div>
  );
}

export default App;

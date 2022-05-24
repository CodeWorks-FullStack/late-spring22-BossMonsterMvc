import { ProxyState } from "../AppState.js";
import { herosService } from "../Services/HerosService.js";

function _drawHeros(){
  let heros = ProxyState.heros
  // NOTE save big Templates until you have them all then you can display them
  let template = ''
  heros.forEach(h =>  template += h.Template)
  // console.log(template)
  document.getElementById('heros').innerHTML = template
}

function _drawGold(){
  document.getElementById('gold').innerText = ProxyState.gold.toString()
}

export class HerosController{
  constructor(){
    console.log('heros controlloer', ProxyState.heros);
    // NOTE registera a listener 'gold' is the property on the appstate we listen to and '_drawGold' is what we do when gold changes.  Remember to just pass the instructions of _drawGold not invoke it.
    ProxyState.on('gold', _drawGold)
    ProxyState.on('heros', _drawHeros)
    _drawHeros()
    _drawGold()
  }

  attackBoss(){
    console.log('attacking the boss');
    herosService.attackBoss()
  }
}
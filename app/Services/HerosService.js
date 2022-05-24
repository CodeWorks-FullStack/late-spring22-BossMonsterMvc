import { ProxyState } from "../AppState.js"
import { bossesService } from "./BossesService.js"



class HerosService {
  attackBoss() {
    // add up heros damage
    // subtract damage from boss health
    // check if the boss is dead
    let heros = ProxyState.heros
    let damage = 0
    heros.forEach(h => {
      if(h.active){
        damage += h.damage
      }
    })
    console.log('damage to be dealt', damage);
    let boss = ProxyState.bosses[0]
    boss.health -= damage
    console.log('boss status update', boss.health)
    // NOTE can't draw boss cause it's inaccessible and in another controller.
    // _drawBoss()
    // NOTE the '=' tells the proxystate that something is changing and triggers all listeners registered to it
    // NOTE in this case we trick the listener by resetting what it was equal too before,
    ProxyState.bosses = ProxyState.bosses
    if(boss.health <= 0){
      console.log('boss dead');
      // NOTE in this case we do actually change the value
      // the important part is the '='
      ProxyState.gold += boss.maxHealth
      bossesService.changeBoss()
      // change to next boss
    }
  }


}

export const herosService = new HerosService()
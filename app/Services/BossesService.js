import { ProxyState } from "../AppState.js"



class BossesService{
  attackHeros() {
    let boss = ProxyState.bosses[0]
    let heros = ProxyState.heros
    heros.forEach(h => {
      if(h.active){
        h.health -= boss.damage
      }
    })
    console.log('were taking damage here',heros);
    // NOTE again just tricking the listener to redraw cause we modified what was IN heros, not heros itself
    ProxyState.heros = ProxyState.heros
  }

  changeBoss(){
    // take dead boss out of array with shift
    let deadBoss = ProxyState.bosses.shift()
    // revive them and make them stronger
    deadBoss.level++
    deadBoss.maxHealth *= 1.5
    deadBoss.health = deadBoss.maxHealth
    // put them back in at the end
    ProxyState.bosses = [...ProxyState.bosses, deadBoss]
    console.log(ProxyState.bosses);
  }

}

export const bossesService = new BossesService()
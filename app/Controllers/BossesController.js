import { ProxyState } from "../AppState.js";
import { bossesService } from "../Services/BossesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawBoss(){
  let boss = ProxyState.bosses[0]
  console.log('drawing boss', boss);
  // NOTE im only drawing one boss so there is no need to create a sub 'template' and iterate, i can just draw the one right away.
  document.getElementById('boss').innerHTML = boss.Template
}

function _attackHeros(){
  let boss = ProxyState.bosses[0]
  bossesService.attackHeros()
  Pop.toast(boss.taunt(), 'error', 'bottom')
}

export class BossesController {
  constructor(){
    console.log('boss controller loaded', ProxyState.bosses);
    ProxyState.on('bosses', _drawBoss)
    _drawBoss()
    setInterval(_attackHeros, 5000)
  }


}
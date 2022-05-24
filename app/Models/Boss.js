

export class Boss{
  constructor(name, maxHealth, speed, damage, img, dialogue){
    this.name = name
    this.maxHealth = maxHealth
    this.health = maxHealth //this is just about the creation of the boss so i can re-use this
    this.level = 1
    this.speed = speed
    this.damage = damage
    this.img = img
    this.dialogue = dialogue
  }

  taunt(){
    let index = Math.floor(Math.random()*this.dialogue.length)
    return this.dialogue[index]
  }

  get Template(){
    return `
<div  class="col-6 bg-dark text-light p-3 rounded d-flex flex-column align-items-center">
    <h2>${this.name} : <span>${this.level}</span></h2>
    <img src="${this.img}" alt="">
  <div class="progress w-100">
    <div class="progress-bar bg-danger" role="progressbar" style="width: ${Math.round(this.health/this.maxHealth*100)}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">${this.health}</div>
    </div>
  </div>
</div>
    `
  }
}


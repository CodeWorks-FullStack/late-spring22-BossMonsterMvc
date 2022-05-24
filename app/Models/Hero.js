

export class Hero{
  constructor(name, maxHealth, damage, healing, price, img, active = false){
    this.name = name
    this.img = img
    this.maxHealth = maxHealth
    this.health = maxHealth
    this.damage = damage
    this.healing = healing
    this.price = price
    this.active = active
  }

  get Template(){
    return `
  <div class="col-md-3 p-3 rounded shadow d-flex flex-column align-items-center">
    <h4>${this.name}</h4>
    <img class="hero-img" src="${this.img}" alt="">
    <h4><b class="text-success">${this.health}</b></h4>

    ${this.Button}

  </div>
    `
  }

  get Button(){
    if(this.active){
      return `<button class="btn btn-success">heal ${this.price}</button>`
    } else {
      return `<button class="btn btn-warning">buy ${this.price}</button>`
    }
  }
}
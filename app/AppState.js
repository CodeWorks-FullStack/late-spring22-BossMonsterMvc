import { Boss } from "./Models/Boss.js"
import { Hero } from "./Models/Hero.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  gold = 0
  bosses = [
    new Boss('Maximus', 100, 1, 10, './assets/img/Anji.gif', ['Roar', 'I will defeat you', 'Growl']),
    new Boss('Jerry', 150, 1, 15, './assets/img/Rathalos.gif', ["What's the deal with big swords?", "You better Laugh", "*laugh track*"]),
    new Boss('Dr. Bean', 200, 2, 20, './assets/img/Teostra.gif', ["Time for check up.", "Here's your prescription", "I diagnose you with die."])
  ]

  heros = [
    new Hero('Nik', 50, 15, 0, 100,'./assets/img/SwitchAxe.webp', true), 
    new Hero('Cleatus', 50, 5, 10, 200, './assets/img/Cook.webp'),
    new Hero('Jonny Deere', 25, 25, 5, 300, './assets/img/palamute.gif'),
    new Hero('Apollo & Creed', 60, 0, 20, 400, './assets/img/Palicos.gif')
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

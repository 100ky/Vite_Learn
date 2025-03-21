// Verze 1: Okamžitý import (eager)
const modules = import.meta.glob('./10/*.js', { eager: true })
console.log("Eager modules:", modules)

// Verze 2: Lazy loading (načítání na vyžádání)
const lazyModules = import.meta.glob('./10/*.js')
console.log("Lazy modules:", lazyModules)

// Příklad použití lazy modulů:
for (const path in lazyModules) {
  lazyModules[path]().then((module) => {
    console.log(`Modul ${path} načten:`, module)
  })
}
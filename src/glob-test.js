// Jednoduchý test glob importů
const modules = import.meta.glob('./components/*.js');
console.log('Found modules:', modules);

// Příklad použití
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(`Module ${path} loaded:`, mod);
  });
}

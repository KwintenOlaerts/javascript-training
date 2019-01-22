const tab = [-2,1,4,];

const add = (x) => x + 2;

const display = () => {
  for (let i = 0; i < tab.length; i++) {
    window.alert(`De som van ${tab[i]} en 2 is gelijk aan: ${add(tab[i])}`)
  }
}
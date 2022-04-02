function formatDuration (seconds) {
  const values = []
  const units = {
    'year': 31536000,
    'day': 86400,
    'hour': 3600,
    'minute': 60,
    'second': 1
  }
  for (let unit in units) {
    if (units[unit] <= seconds) {
      const num = Math.floor(seconds / units[unit])
      values.push(num + ' ' + pluralize(unit,num))
      seconds -= units[unit] * num
    }
  }
  return oxfordJoin(values) || 'now'
}

function pluralize (word, num) {
  return num > 1 ? word + 's' : word
}

function oxfordJoin (arr) {
  return arr.reverse().map(function(el, idx){
    if (idx > 1)
      return el + ', '
    else if (idx == 1)
      return el + ' and '
    else
      return el
  }).reverse().join('')
}
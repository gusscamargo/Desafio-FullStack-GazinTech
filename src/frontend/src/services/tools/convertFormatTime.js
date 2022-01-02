export const convertFormatTime = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

export const convertDbFormatToHuman = (date) => {
  if(date === "") return ""

  const [a, m, d] = date.split("-")
  const mouths = [
                  'Jan',
                  'Fev',
                  'Mar',
                  'Abr',
                  'Mai',
                  'Jun',
                  'Jul',
                  'Ago',
                  'Set',
                  'Out',
                  'Nov',
                  'Dez'
                ]
                
  return `${d} ${mouths[m - 1]} ${a}`
}
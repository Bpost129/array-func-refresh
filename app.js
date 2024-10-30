let colors = ['red', 'green', 'blue']

const splicer = (x, y) => {
  let spliced = colors.slice(x, y)
  console.log(spliced)
  console.log(colors)
  return spliced
}

splicer(0, 2)
splicer(0, 1)



const greenbean = (food) => {
  if (food.toLowerCase() === 'greenbean') {
    console.log('That\'s a greenbean!')
  } else {
    console.log('That\'s not a greenbean...')
  }
}

// greenbean('tacos')
// greenbean('greenbEAN')
// greenbean('lasagna')

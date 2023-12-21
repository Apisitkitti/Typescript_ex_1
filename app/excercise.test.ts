import { greet } from './excercise'

describe('Greeting People', () => {
  it('It can join only one word', () => {
    const result = greet(['Bob'])

    expect(result).toEqual('Hello, Bob.')
  })

  it('It can say hi to no name people', () => {
    const result = greet([])

    expect(result).toEqual('Hello, my friend.')
  })

  it('If want to say hello with 2 people', () => {
    const result = greet(['Jill', 'Jane'])

    expect(result).toEqual('Hello, Jill and Jane.')
  })

  it('If want to say hello with 3 people', () => {
    const result = greet(['Amy', 'Brian', 'Charlotte'])

    expect(result).toEqual('Hello, Amy, Brian and Charlotte.')
  })
  // it('If want to shout a name', () => {
  //   const result = greet(['JERRY'])

  //   expect(result).toEqual('HELLO JERRY!')
  // })
  // it('If want to say hello with 3 people and shount', () => {
  //   const result = greet(['Amy', 'BRIAN', 'Charlotte'])

  //   expect(result).toEqual('Hello, Amy and Charlotte. AND HELLO BRIAN!')
  // })

  // it('If want to say hello with 3 people can input comma', () => {
  //   const result = greet(['Bob', 'Charlie, Dianne'])

  //   expect(result).toEqual('Hello, Bob, Charlie, and Dianne.')
  // })

  // it('If want to say hello with slash for and', () => {
  //   const result = greet(['Bob', '\' Charlie, Dianne\''])

  //   expect(result).toEqual('Hello, Bob and Charlie, Dianne.')
  // })
})

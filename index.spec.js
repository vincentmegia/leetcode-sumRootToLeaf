import process from './index.js'
import Node from './node.js'

describe('tests', () => {
   it('it returns 1', () => {
      const tree = new Node()
      tree.value = 1
      tree.left = new Node()
      tree.left.value = 0
      tree.left.left = new Node()
      tree.left.left.value = 0
      tree.left.right = new Node()
      tree.left.right.value = 1

      tree.right = new Node()
      tree.right.value = 1
      tree.right.left = new Node()
      tree.right.left.value = 0
      tree.right.right = new Node()
      tree.right.right.value = 1
      const result = process(tree)
      expect(result).toEqual(22)
   })

   it('it returns 0', () => {
      const tree = new Node()
      tree.value = 0

      const result = process(tree)
      expect(result).toEqual(0)
   })
})

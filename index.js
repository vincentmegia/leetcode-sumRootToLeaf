const queue = []
let output = 0

function process(root) {
   //implement DFS (Q)
   output = 0
   traverse(root)
   return output
}

function traverse(node) {
   if (node) {
      queue.push(node.value)
      traverse(node.left)
      traverse(node.right)

      // leaf nodes doesn't have children
      if (!node.left && !node.right) {
         // console.log('queue: ', queue)
         output += parseInt(queue.join(''), 2)
      }
      queue.pop()
   }
}

export default process

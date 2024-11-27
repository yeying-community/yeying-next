import {Digest} from '../tool/digest.js'

export class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map(leaf => this.hash(leaf))
    this.levels = [this.leaves]
    this.#buildTree(leaves)
  }

  // Build the tree and populate this.levels
  #buildTree(leaves) {
    while (this.levels[0].length > 1) {
      this.levels.unshift(this.#createNextLevel(this.levels[0]))
    }
  }

  hash(node) {
    const digest = new Digest(node)
    digest.update(new TextEncoder().encode(node))
    return digest.sum()
  }

  // Create the next level of the tree
  #createNextLevel(children) {
    let parents = []
    for (let i = 0; i < children.length; i += 2) {
      if (i + 1 < children.length) {
        parents.push(this.hash(children[i] + children[i + 1]))
      } else {
        // If the number of child nodes is odd, duplicate the last node
        parents.push(this.hash(children[i] + children[i]))
      }
    }
    return parents
  }

  // Get the Merkle root
  getRoot() {
    return this.levels[0][0]
  }

  getLeaf() {
    return this.leaves
  }

  // Get the whole Merkle tree
  getTreeArray() {
    return this.levels
  }
}

describe( "tree", function () {

  describe("initialization", function () {
    it( "initializes a node with no parameters", function () {
      var tree = new Tree();
      expect(tree.key).toEqual(null);
      expect(tree.left).toEqual(null);
      expect(tree.right).toEqual(null);
      expect(tree.parent).toEqual(null);
    });

    it (" initializes a node with single key parameter", function () {
      var tree = new Tree(1);
      expect(tree.key).toEqual(1);
      expect(tree.left).toEqual(null);
      expect(tree.right).toEqual(null);
      expect(tree.parent).toEqual(null);
    });
  });

  describe("#checkTreeValue", function () {
    var originTree;
    beforeEach(function () {
      originTree = new Tree(10);
    })

    describe("check the value of the tree's key property ", function () {
      it("is 10", function () {
        expect(originTree.key).toEqual(checkTreeProperty(originTree.key));
      });
      it("is null", function () {
        var tree = new Tree();
        expect(tree.key).toEqual(null);
        expect(tree.key).toEqual(checkTreeProperty(tree.key));
      })
    });

    describe("check the tree's left property", function () {
      it("is null", function () {
        expect(originTree.left).toEqual(null);
        expect(originTree.left).toEqual(checkTreeProperty(originTree.left));
      });
      it("is a tree", function () {
      })
    })

    describe("check the tree's right property", function () {
      it("is null", function () {
        expect(originTree.right).toEqual(null);
        expect(originTree.right).toEqual(checkTreeProperty(originTree.right));
      });
    })
  });

  describe("#insertKey", function () {
    var firstTree;
    beforeEach( function () {
      firstTree = new Tree(100);
    });

    describe("insertion if key value > key value of current tree", function () {
      describe("right property of tree is null", function () {
        it("assigns it a new tree instance", function () {
          var rightProp = insertKey(firstTree, 200);
          expect(rightProp instanceof Tree).toBe(true);
          expect(rightProp.parent).toBe(firstTree);
        });
      });

      describe("right property of tree is not null", function () {
        describe("recursive invocation of insertKey", function() {
          it("returns a new tree", function (){
            insertKey(firstTree, 250);
            var input1 =insertKey(firstTree, 300)
            var input2 = insertKey(firstTree, 400)
            expect(input2.key).toEqual(400);
            expect(input2.parent).toBe(input1);
          });
        })
      });
    });

    describe("insertion if  value < current tree", function () {
      describe("left property of tree is null", function () {
        it("assigns it a new tree instance", function () {
          var leftProp = insertKey(firstTree, 200);
          expect(leftProp instanceof Tree).toBe(true);
          expect(leftProp.parent).toBe(firstTree);
        });
      });

      describe("left property of tree is not null", function () {
        describe("recursive invocation of insertKey", function() {
          it("returns a new tree", function () {
            insertKey(firstTree, 50);
            var input1 = insertKey(firstTree, 28)
            var input2 = insertKey(firstTree, 23)
            expect(input2.key).toEqual(23);
            expect(input2.parent).toBe(input1);
          });
        })
      });
    });

    describe("insertion if key value === current tree", function () {
      it("return the passed in tree", function () {
        expect(firstTree).toEqual(insertKey(firstTree, 100));
      });
    });
  });

  describe("returnTree", function () {
    it("returns a tree based on its key value", function () {
      var originTree = new Tree(1000);
      var tree1 = insertKey(originTree, 750);
      var tree2 = insertKey(originTree, 500);
      var tree3 = insertKey(originTree, 250);

      expect(returnTree(originTree, 250)).toBe(tree3);
      expect(returnTree(originTree, 500)).toBe(tree2);
    });
  })
});
